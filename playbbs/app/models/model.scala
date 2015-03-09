package models


case class Comment(
  name: String,
  content: String)

object JsonFormats {
  import play.api.libs.json.Json
  import play.api.data._
  import play.api.data.Forms._

  // Generates Writes and Reads for Feed and User thanks to Json Macros
  implicit val commentFormat = Json.format[Comment]
}