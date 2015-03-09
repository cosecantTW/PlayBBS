


var Comment = React.createClass({
  render: function() {
    var rawMarkup = this.props.children.toString();
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.name}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    comments.push(comment);
    this.setState({data: comments}, function() {
      $.ajax({
        url: this.props.urlpost,
        dataType: 'json',
        contentType: 'text/json',
        type: 'POST',
        data: JSON.stringify(comment),
        success: function(data) {
          this.setState({data: comment});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.urlpost, status, err.toString());
        }.bind(this)
      });
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment, index) {
      return (
        <Comment name={comment.name} key={index}>
          {comment.content}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.getDOMNode().value.trim();
    var content = this.refs.content.getDOMNode().value.trim();
    if (!content || !name) {
      return;
    }
    this.props.onCommentSubmit({name: name, content: content});
    this.refs.name.getDOMNode().value = '';
    this.refs.content.getDOMNode().value = '';
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="name" />
        <input type="text" placeholder="Say something..." ref="content" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

React.render(
  <CommentBox url="/comments" urlpost="/comment"  pollInterval={5000} />,
  document.getElementById('content')
);