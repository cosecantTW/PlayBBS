{"filter":false,"title":"model.scala","tooltip":"/playbbs/app/models/model.scala","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":14,"column":1},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":23,"column":1},"action":"insert","lines":["implicit object BSONObjectIDFormat extends PartialFormat[BSONObjectID] {","  def partialReads: PartialFunction[JsValue, JsResult[BSONObjectID]] = {","    case JsObject((\"$oid\", JsString(v)) +: Nil) => JsSuccess(BSONObjectID(v))","  }","  val partialWrites: PartialFunction[BSONValue, JsValue] = {","    case oid: BSONObjectID => Json.obj(\"$oid\" -> oid.stringify)","  }","}"]}]}]]},"ace":{"folds":[],"scrolltop":90,"scrollleft":0,"selection":{"start":{"row":15,"column":0},"end":{"row":15,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":22,"mode":"ace/mode/scala"}},"timestamp":1425895287708,"hash":"ee0353f0d50f4d2db6d184b43fd27097351470ef"}