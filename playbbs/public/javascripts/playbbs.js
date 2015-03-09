


var Comment = React.createClass({
  
  render: function() {
      //console.log(this.props.id);
      var disabled = (this.props.id == "") ? "disabled" : "";
    return (
      <div className="comment">
        <h3>
        <strong className="commentAuthor">
          {this.props.name}&nbsp;:&nbsp;
        </strong>
        {this.props.content}
        <div className="form-inline pull-right">
        <button className="btn btn-primary" disabled={disabled} onClick={this.props.onCommentEdit.bind(null,this.props.index,this.props.id)} >Edit</button>
        <button className="btn btn-danger" disabled={disabled} onClick={this.props.onCommentDelete.bind(null,this.props.index,this.props.id)} >Delete</button>
        </div>
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
  handleCommentSubmit: function(comment,editindex,editid) {
    var comments = this.state.data;
    if (editindex == -1){
        comments.unshift(comment);
    } else {
        comments[editindex] = comment;
    }
    this.setState({data: comments}, function() {
      $.ajax({
        url: this.props.urlpost + ((editindex == -1)? '' : '/' + editid),
        contentType: 'text/json',
        type: (editindex == -1) ? 'POST' : 'PUT',
        data: JSON.stringify(comment),
        success: function(data) {
          this.setState({data: comments});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.urlpost, status, err.toString());
        }.bind(this)
      });
    });
  },
  handleCommentEdit: function(index,id) {
      this.refs.form.handleCommentEdit(index, id, this.state.data[index].name, this.state.data[index].content );
  },
  handleCommentDelete: function(index,id) {
      var comments = this.state.data;
      comments.splice(index,1);
      this.setState({data: comments}, function() {
         $.ajax({
          url: this.props.urlpost + '/' + id,
          type: 'DELETE',
            success: function(data) {
            this.setState({data: comments});
         }.bind(this),
         error: function(xhr, status, err) {
          console.error(this.props.urlpost+ '/' + id, status, err.toString());
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
        <CommentForm onCommentSubmit={this.handleCommentSubmit} ref="form"  />
        <CommentList data={this.state.data} onCommentDelete={this.handleCommentDelete} onCommentEdit={this.handleCommentEdit}/>
        
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var onCommentDelete = this.props.onCommentDelete;
    var onCommentEdit = this.props.onCommentEdit;
    var commentNodes = this.props.data.map(function(comment, index) {
        var id = (comment._id === undefined) ? "" : comment._id.$oid;
      return (
        <Comment onCommentDelete={onCommentDelete} onCommentEdit={onCommentEdit} name={comment.name} content={comment.content} key={index} index={index} id={id} url="/comment">
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
  getInitialState: function() {
    return {editid: "", editindex:-1};
  },
  handleCommentEdit: function(index,id,oldName,oldContent) {
      this.refs.name.getDOMNode().value = oldName;
      this.refs.content.getDOMNode().value = oldContent;
      this.setState({editid: id,editindex:index});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.getDOMNode().value.trim();
    var content = this.refs.content.getDOMNode().value.trim();
    if (!content || !name) {
      return;
    }
    this.props.onCommentSubmit({name: name, content: content}, this.state.editindex, this.state.editid);
    this.refs.name.getDOMNode().value = '';
    this.refs.content.getDOMNode().value = '';
  },
  handleClickClear: function(event) {
      if (this.state.editid != ""){
          this.setState({editid: "",editindex:-1});
      }
    this.refs.name.getDOMNode().value = '';
    this.refs.content.getDOMNode().value = '';
  },
  render: function() {
      var clearbtn = (this.state.editid == "") ? "Clear" : "Cancel";

    return (
      <form className="commentForm form-inline" onSubmit={this.handleSubmit}>
        <input type="text" className="form-control" placeholder="Your name" ref="name" />
        <input type="text" className="form-control" placeholder="Say something..." ref="content" />
        <button type="submit" className="btn btn-primary" value="Post" >Submit</button>
        <button className="btn btn-warning" onClick={this.handleClickClear} >{clearbtn}</button>
      </form>
    );
  }
});

React.render(
  <CommentBox url="/comments" urlpost="/comment"  pollInterval={5000} />,
  document.getElementById('content')
);