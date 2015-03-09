package controllers

import play.api._
import play.api.mvc._
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json._
import scala.concurrent.Future

import reactivemongo.api._
import reactivemongo.bson._

import play.modules.reactivemongo.MongoController
import play.modules.reactivemongo.json.collection.JSONCollection
import play.modules.reactivemongo.json.BSONFormats._

object CommentsApplication extends Controller with MongoController {

  def collection: JSONCollection = db.collection[JSONCollection]("comments")


  import play.api.data.Form
  import models._
  import models.JsonFormats._

  def createComment = Action.async(parse.json) { request =>

    request.body.validate[Comment].map { comment =>
      collection.insert(comment).map { _ =>
        Created("Comment created.")
      }
    }.getOrElse(Future.successful(BadRequest("invalid json")))
  }

  def updateComment(id: String) = Action.async(parse.json) { request =>

    request.body.validate[Comment].map { comment =>
          collection.update(Json.obj("_id" -> BSONObjectID(id)), comment).map {
              _ => Ok("Comment Updated")
          }
    }.getOrElse(Future.successful(BadRequest("invalid json")))
  }
  
  def deleteComment(id: String) = Action.async { 
        collection.remove(Json.obj("_id" -> BSONObjectID(id))).map {
            _ => Ok("Comment Deleted")
        }
  }
  
  def getAll = Action.async {
    val cursor: Cursor[JsObject] = collection.find(Json.obj()).sort(Json.obj("_id" -> -1)).cursor[JsObject]

    val futureCommentsList: Future[List[JsObject]] = cursor.collect[List]()
    val futureCommentsJsonArray: Future[JsArray] = futureCommentsList.map { comments =>
      //Json.arr(comments)
      comments.foldLeft(JsArray())((jarr, x) => jarr ++ Json.arr(x))
    }
    futureCommentsJsonArray.map { comments =>
      Ok(comments)
    }
  }
  
}