


var Comment = React.createClass({
  
  render: function() {
      //console.log(this.props.id);
    return (
      <div className="comment">
        <h3>
        <strong className="commentAuthor">
          {this.props.name}&nbsp;:&nbsp;
        </strong>
        {this.props.content}
        <form className="form-inline pull-right">
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger" onClick={this.props.onCommentDelete.bind(this,this.props.key,this.props.id)} >Delete</button>
        </form>
        </h3>
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
    comments.unshift(comment);
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
  handleCommentDelete: function(index,id) {
      console.log("handleCommentDelete "+index);
      console.log("handleCommentDelete "+id);
      var comments = this.state.data;
    $.ajax({
      url: this.props.url + '/' + id,
      dataType: 'json',
      type: 'DELETE',
      success: function(data) {
          comments.splice(index,1);
        this.setState({data: comments});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url+ '/' + id, status, err.toString());
      }.bind(this)
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
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <CommentList data={this.state.data} onCommentDelete={this.handleCommentDelete} />
        
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var onCommentDelete = this.props.onCommentDelete;
    var commentNodes = this.props.data.map(function(comment, index) {
      return (
        <Comment onCommentDelete={onCommentDelete} name={comment.name} content={comment.content} key={index} id={comment._id.$oid} url="/comment">
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
  handleClickClear: function(event) {
    this.refs.name.getDOMNode().value = '';
    this.refs.content.getDOMNode().value = '';
  },
  render: function() {
    return (
      <form className="commentForm form-inline" onSubmit={this.handleSubmit}>
        <input type="text" className="form-control" placeholder="Your name" ref="name" />
        <input type="text" className="form-control" placeholder="Say something..." ref="content" />
        <button type="submit" className="btn btn-primary" value="Post" >Submit</button>
        <button className="btn btn-warning" onClick={this.handleClickClear} >Clear</button>
      </form>
    );
  }
});

React.render(
  <CommentBox url="/comments" urlpost="/comment"  pollInterval={5000} />,
  document.getElementById('content')
);