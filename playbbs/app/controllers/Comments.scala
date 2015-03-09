package controllers

import play.api._
import play.api.mvc._
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json._
import scala.concurrent.Future

import reactivemongo.api._

import play.modules.reactivemongo.MongoController
import play.modules.reactivemongo.json.collection.JSONCollection

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

  def updateComment(id: String) = TODO
  
  /*Action.async(parse.json) { request =>

    request.body.validate[User].map { user =>
      // `user` is an instance of the case class `models.User`
      collection.insert(user).map { lastError =>
        Logger.debug(s"Successfully inserted with LastError: $lastError")
        Created
      }
    }.getOrElse(Future.successful(BadRequest("invalid json")))
  }
    */
  def getAll = Action.async {
    val cursor: Cursor[Comment] = collection.find(Json.obj()).sort(Json.obj("_id" -> -1)).cursor[Comment]

    val futureCommentsList: Future[List[Comment]] = cursor.collect[List]()

    futureCommentsList.map { comments =>
      Ok(comments.toString)
    }
  }
  
}