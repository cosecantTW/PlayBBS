{"filter":false,"title":"playbbs.js","tooltip":"/playbbs/public/javascripts/playbbs.js","undoManager":{"mark":46,"position":46,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":["if (window.console) {","  console.log(\"Welcome to your Play application's JavaScript!\");","}"]},{"start":{"row":0,"column":0},"end":{"row":126,"column":2},"action":"insert","lines":["/**"," * This file provided by Facebook is for non-commercial testing and evaluation purposes only."," * Facebook reserves all rights not expressly granted."," *"," * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR"," * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,"," * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL"," * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN"," * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION"," * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."," */","","var converter = new Showdown.converter();","","var Comment = React.createClass({","  render: function() {","    var rawMarkup = converter.makeHtml(this.props.children.toString());","    return (","      <div className=\"comment\">","        <h2 className=\"commentAuthor\">","          {this.props.author}","        </h2>","        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />","      </div>","    );","  }","});","","var CommentBox = React.createClass({","  loadCommentsFromServer: function() {","    $.ajax({","      url: this.props.url,","      dataType: 'json',","      success: function(data) {","        this.setState({data: data});","      }.bind(this),","      error: function(xhr, status, err) {","        console.error(this.props.url, status, err.toString());","      }.bind(this)","    });","  },","  handleCommentSubmit: function(comment) {","    var comments = this.state.data;","    comments.push(comment);","    this.setState({data: comments}, function() {","      // `setState` accepts a callback. To avoid (improbable) race condition,","      // `we'll send the ajax request right after we optimistically set the new","      // `state.","      $.ajax({","        url: this.props.url,","        dataType: 'json',","        type: 'POST',","        data: comment,","        success: function(data) {","          this.setState({data: data});","        }.bind(this),","        error: function(xhr, status, err) {","          console.error(this.props.url, status, err.toString());","        }.bind(this)","      });","    });","  },","  getInitialState: function() {","    return {data: []};","  },","  componentDidMount: function() {","    this.loadCommentsFromServer();","    setInterval(this.loadCommentsFromServer, this.props.pollInterval);","  },","  render: function() {","    return (","      <div className=\"commentBox\">","        <h1>Comments</h1>","        <CommentList data={this.state.data} />","        <CommentForm onCommentSubmit={this.handleCommentSubmit} />","      </div>","    );","  }","});","","var CommentList = React.createClass({","  render: function() {","    var commentNodes = this.props.data.map(function(comment, index) {","      return (","        // `key` is a React-specific concept and is not mandatory for the","        // purpose of this tutorial. if you're curious, see more here:","        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children","        <Comment author={comment.author} key={index}>","          {comment.text}","        </Comment>","      );","    });","    return (","      <div className=\"commentList\">","        {commentNodes}","      </div>","    );","  }","});","","var CommentForm = React.createClass({","  handleSubmit: function(e) {","    e.preventDefault();","    var author = this.refs.author.getDOMNode().value.trim();","    var text = this.refs.text.getDOMNode().value.trim();","    if (!text || !author) {","      return;","    }","    this.props.onCommentSubmit({author: author, text: text});","    this.refs.author.getDOMNode().value = '';","    this.refs.text.getDOMNode().value = '';","  },","  render: function() {","    return (","      <form className=\"commentForm\" onSubmit={this.handleSubmit}>","        <input type=\"text\" placeholder=\"Your name\" ref=\"author\" />","        <input type=\"text\" placeholder=\"Say something...\" ref=\"text\" />","        <input type=\"submit\" value=\"Post\" />","      </form>","    );","  }","});","","React.render(","  <CommentBox url=\"comments.json\" pollInterval={2000} />,","  document.getElementById('content')",");"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["var converter = new Showdown.converter();",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":20},"end":{"row":15,"column":39},"action":"remove","lines":["converter.makeHtml("]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":50},"end":{"row":15,"column":51},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":10,"column":3},"action":"remove","lines":["/**"," * This file provided by Facebook is for non-commercial testing and evaluation purposes only."," * Facebook reserves all rights not expressly granted."," *"," * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR"," * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,"," * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL"," * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN"," * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION"," * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."," */"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":19},"end":{"row":113,"column":32},"action":"remove","lines":["comments.json"]},{"start":{"row":113,"column":19},"end":{"row":113,"column":87},"action":"insert","lines":["http://ec2-54-67-13-88.us-west-1.compute.amazonaws.com:9000/comments"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":19},"end":{"row":113,"column":87},"action":"remove","lines":["http://ec2-54-67-13-88.us-west-1.compute.amazonaws.com:9000/comments"]},{"start":{"row":113,"column":19},"end":{"row":113,"column":59},"action":"insert","lines":["http://playbbs.cosecant.in:9000/comments"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":22},"end":{"row":9,"column":28},"action":"remove","lines":["author"]},{"start":{"row":9,"column":22},"end":{"row":9,"column":26},"action":"insert","lines":["name"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":17},"end":{"row":76,"column":23},"action":"remove","lines":["author"]},{"start":{"row":76,"column":17},"end":{"row":76,"column":21},"action":"insert","lines":["name"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":31},"end":{"row":76,"column":37},"action":"remove","lines":["author"]},{"start":{"row":76,"column":31},"end":{"row":76,"column":35},"action":"insert","lines":["name"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":8},"end":{"row":92,"column":14},"action":"remove","lines":["author"]},{"start":{"row":92,"column":8},"end":{"row":92,"column":12},"action":"insert","lines":["name"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":25},"end":{"row":92,"column":31},"action":"remove","lines":["author"]},{"start":{"row":92,"column":25},"end":{"row":92,"column":29},"action":"insert","lines":["name"]}]}],[{"group":"doc","deltas":[{"start":{"row":94,"column":18},"end":{"row":94,"column":24},"action":"remove","lines":["author"]},{"start":{"row":94,"column":18},"end":{"row":94,"column":22},"action":"insert","lines":["name"]}]}],[{"group":"doc","deltas":[{"start":{"row":97,"column":32},"end":{"row":97,"column":38},"action":"remove","lines":["author"]},{"start":{"row":97,"column":32},"end":{"row":97,"column":36},"action":"insert","lines":["name"]}]}],[{"group":"doc","deltas":[{"start":{"row":97,"column":38},"end":{"row":97,"column":44},"action":"remove","lines":["author"]},{"start":{"row":97,"column":38},"end":{"row":97,"column":42},"action":"insert","lines":["name"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":14},"end":{"row":98,"column":20},"action":"remove","lines":["author"]},{"start":{"row":98,"column":14},"end":{"row":98,"column":18},"action":"insert","lines":["name"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":56},"end":{"row":104,"column":62},"action":"remove","lines":["author"]},{"start":{"row":104,"column":56},"end":{"row":104,"column":60},"action":"insert","lines":["name"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":63},"end":{"row":105,"column":67},"action":"remove","lines":["text"]},{"start":{"row":105,"column":63},"end":{"row":105,"column":64},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":64},"end":{"row":105,"column":65},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":65},"end":{"row":105,"column":66},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":66},"end":{"row":105,"column":67},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":67},"end":{"row":105,"column":68},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":68},"end":{"row":105,"column":69},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":69},"end":{"row":105,"column":70},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":19},"end":{"row":77,"column":23},"action":"remove","lines":["text"]},{"start":{"row":77,"column":19},"end":{"row":77,"column":26},"action":"insert","lines":["content"]}]}],[{"group":"doc","deltas":[{"start":{"row":93,"column":8},"end":{"row":93,"column":12},"action":"remove","lines":["text"]},{"start":{"row":93,"column":8},"end":{"row":93,"column":15},"action":"insert","lines":["content"]}]}],[{"group":"doc","deltas":[{"start":{"row":93,"column":28},"end":{"row":93,"column":32},"action":"remove","lines":["text"]},{"start":{"row":93,"column":28},"end":{"row":93,"column":35},"action":"insert","lines":["content"]}]}],[{"group":"doc","deltas":[{"start":{"row":94,"column":9},"end":{"row":94,"column":13},"action":"remove","lines":["text"]},{"start":{"row":94,"column":9},"end":{"row":94,"column":16},"action":"insert","lines":["content"]}]}],[{"group":"doc","deltas":[{"start":{"row":97,"column":44},"end":{"row":97,"column":48},"action":"remove","lines":["text"]},{"start":{"row":97,"column":44},"end":{"row":97,"column":51},"action":"insert","lines":["content"]}]}],[{"group":"doc","deltas":[{"start":{"row":97,"column":53},"end":{"row":97,"column":57},"action":"remove","lines":["text"]},{"start":{"row":97,"column":53},"end":{"row":97,"column":60},"action":"insert","lines":["content"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":14},"end":{"row":99,"column":18},"action":"remove","lines":["text"]},{"start":{"row":99,"column":14},"end":{"row":99,"column":21},"action":"insert","lines":["content"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":31},"end":{"row":43,"column":35},"action":"remove","lines":["data"]},{"start":{"row":43,"column":31},"end":{"row":43,"column":38},"action":"insert","lines":["comment"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":61},"end":{"row":113,"column":108},"action":"insert","lines":["url=\"http://playbbs.cosecant.in:9000/comments\" "]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":108},"end":{"row":113,"column":109},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":105},"end":{"row":113,"column":106},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":66},"end":{"row":113,"column":97},"action":"remove","lines":["http://playbbs.cosecant.in:9000"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":19},"end":{"row":113,"column":50},"action":"remove","lines":["http://playbbs.cosecant.in:9000"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":33},"end":{"row":113,"column":34},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":34},"end":{"row":113,"column":35},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":35},"end":{"row":113,"column":36},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":36},"end":{"row":113,"column":37},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":24},"end":{"row":38,"column":27},"action":"remove","lines":["url"]},{"start":{"row":38,"column":24},"end":{"row":38,"column":31},"action":"insert","lines":["urlpost"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":35},"end":{"row":46,"column":38},"action":"remove","lines":["url"]},{"start":{"row":46,"column":35},"end":{"row":46,"column":42},"action":"insert","lines":["urlpost"]}]}],[{"group":"doc","deltas":[{"start":{"row":73,"column":0},"end":{"row":75,"column":89},"action":"remove","lines":["        // `key` is a React-specific concept and is not mandatory for the","        // purpose of this tutorial. if you're curious, see more here:","        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":14},"end":{"row":73,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":0},"end":{"row":36,"column":16},"action":"remove","lines":["      // `setState` accepts a callback. To avoid (improbable) race condition,","      // `we'll send the ajax request right after we optimistically set the new","      // `state."]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":48},"end":{"row":34,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":1890,"scrollleft":0,"selection":{"start":{"row":33,"column":48},"end":{"row":33,"column":48},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":37,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1425910345838,"hash":"f1ae1917fcc3d85760ec3cde5859a168c93bc67b"}