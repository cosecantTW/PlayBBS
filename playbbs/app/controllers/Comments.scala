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

      collection.insert(comment).map { lastError =>
        Logger.debug(s"Successfully inserted with LastError: $lastError")
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
  def getAll = TODO
  
  /*
  Action.async {
    // let's do our query
    val cursor: Cursor[User] = collection.
      // find all people with name `name`
      find(Json.obj("lastName" -> lastName)).
      // sort them by creation date
      sort(Json.obj("created" -> -1)).
      // perform the query and get a cursor of JsObject
      cursor[User]

    // gather all the JsObjects in a list
    val futureUsersList: Future[List[User]] = cursor.collect[List]()

    // everything's ok! Let's reply with the array
    futureUsersList.map { persons =>
      Ok(persons.toString)
    }
  }
  */
}