{"filter":false,"title":"playbbs.js","tooltip":"/playbbs/public/javascripts/playbbs.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":80,"column":60},"end":{"row":80,"column":87},"action":"insert","lines":["{this.handleCommentSubmit} "]}]}],[{"group":"doc","deltas":[{"start":{"row":80,"column":79},"end":{"row":80,"column":85},"action":"remove","lines":["Submit"]},{"start":{"row":80,"column":79},"end":{"row":80,"column":85},"action":"insert","lines":["Delete"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":17},"end":{"row":91,"column":59},"action":"insert","lines":["onCommentDelete={this.handleCommentDelete}"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":59},"end":{"row":91,"column":60},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":39},"end":{"row":91,"column":44},"action":"insert","lines":["props"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":44},"end":{"row":91,"column":45},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":57},"end":{"row":28,"column":74},"action":"remove","lines":["handleClickDelete"]},{"start":{"row":28,"column":57},"end":{"row":28,"column":62},"action":"insert","lines":["props"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":62},"end":{"row":28,"column":63},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":63},"end":{"row":28,"column":64},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":64},"end":{"row":28,"column":65},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":65},"end":{"row":28,"column":66},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":63},"end":{"row":28,"column":66},"action":"remove","lines":["han"]},{"start":{"row":28,"column":63},"end":{"row":28,"column":82},"action":"insert","lines":["handleCommentDelete"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":2},"end":{"row":17,"column":4},"action":"remove","lines":["handleClickDelete: function(event) {","    $.ajax({","      url: this.props.url + '/' + this.props.id,","      dataType: 'json',","      type: 'DELETE',","      success: function(data) {","          ","        //this.setState({data: data});","      }.bind(this),","      error: function(xhr, status, err) {","        console.error(this.props.url+ '/' + this.props.id, status, err.toString());","      }.bind(this)","    });","  },"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":4},"end":{"row":55,"column":0},"action":"insert","lines":["",""]},{"start":{"row":55,"column":0},"end":{"row":55,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":2},"end":{"row":68,"column":4},"action":"insert","lines":["handleClickDelete: function(event) {","    $.ajax({","      url: this.props.url + '/' + this.props.id,","      dataType: 'json',","      type: 'DELETE',","      success: function(data) {","          ","        //this.setState({data: data});","      }.bind(this),","      error: function(xhr, status, err) {","        console.error(this.props.url+ '/' + this.props.id, status, err.toString());","      }.bind(this)","    });","  },"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":2},"end":{"row":55,"column":19},"action":"remove","lines":["handleClickDelete"]},{"start":{"row":55,"column":2},"end":{"row":55,"column":21},"action":"insert","lines":["handleCommentDelete"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":64},"end":{"row":92,"column":65},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":65},"end":{"row":92,"column":66},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":66},"end":{"row":92,"column":67},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":67},"end":{"row":92,"column":68},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":68},"end":{"row":92,"column":69},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":69},"end":{"row":92,"column":71},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":70},"end":{"row":92,"column":71},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":71},"end":{"row":92,"column":72},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":72},"end":{"row":92,"column":73},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":73},"end":{"row":92,"column":74},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":74},"end":{"row":92,"column":75},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":75},"end":{"row":92,"column":80},"action":"insert","lines":["index"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":45},"end":{"row":92,"column":64},"action":"remove","lines":["handleCommentDelete"]},{"start":{"row":92,"column":45},"end":{"row":92,"column":60},"action":"insert","lines":["onCommentDelete"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":63},"end":{"row":15,"column":82},"action":"remove","lines":["handleCommentDelete"]},{"start":{"row":15,"column":63},"end":{"row":15,"column":78},"action":"insert","lines":["onCommentDelete"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":78},"end":{"row":15,"column":79},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":79},"end":{"row":15,"column":80},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":80},"end":{"row":15,"column":81},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":81},"end":{"row":15,"column":82},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":82},"end":{"row":15,"column":83},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":82},"end":{"row":15,"column":83},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":82},"end":{"row":15,"column":83},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":83},"end":{"row":15,"column":85},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":84},"end":{"row":15,"column":85},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":85},"end":{"row":15,"column":86},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":86},"end":{"row":15,"column":87},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":87},"end":{"row":15,"column":88},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":88},"end":{"row":15,"column":89},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":89},"end":{"row":15,"column":102},"action":"insert","lines":["this.props.id"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":22},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":6},"action":"insert","lines":["      "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":6},"end":{"row":6,"column":10},"action":"remove","lines":["cons"]},{"start":{"row":6,"column":6},"end":{"row":6,"column":13},"action":"insert","lines":["console"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":17},"end":{"row":6,"column":19},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":18},"end":{"row":6,"column":31},"action":"insert","lines":["this.props.id"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":37},"end":{"row":56,"column":38},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":38},"end":{"row":56,"column":39},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":39},"end":{"row":56,"column":40},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":40},"end":{"row":56,"column":41},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":41},"end":{"row":56,"column":42},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":42},"end":{"row":56,"column":43},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":43},"end":{"row":56,"column":44},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":44},"end":{"row":56,"column":45},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":45},"end":{"row":56,"column":46},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":34},"end":{"row":58,"column":45},"action":"remove","lines":["this.props."]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":31},"end":{"row":62,"column":10},"action":"remove","lines":["","          "]}]}],[{"group":"doc","deltas":[{"start":{"row":89,"column":22},"end":{"row":90,"column":0},"action":"insert","lines":["",""]},{"start":{"row":90,"column":0},"end":{"row":90,"column":6},"action":"insert","lines":["      "]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":6},"end":{"row":90,"column":7},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":7},"end":{"row":90,"column":8},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":8},"end":{"row":90,"column":9},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":9},"end":{"row":90,"column":10},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":10},"end":{"row":90,"column":25},"action":"insert","lines":["onCommentDelete"]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":25},"end":{"row":90,"column":26},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":26},"end":{"row":90,"column":27},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":27},"end":{"row":90,"column":28},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":28},"end":{"row":90,"column":54},"action":"insert","lines":["this.props.onCommentDelete"]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":54},"end":{"row":90,"column":55},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":5},"end":{"row":90,"column":6},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":4},"end":{"row":90,"column":5},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":93,"column":35},"end":{"row":93,"column":45},"action":"remove","lines":["his.props."]}]}],[{"group":"doc","deltas":[{"start":{"row":93,"column":34},"end":{"row":93,"column":35},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":102},"end":{"row":16,"column":103},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":103},"end":{"row":16,"column":104},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":104},"end":{"row":16,"column":105},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":105},"end":{"row":16,"column":106},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":106},"end":{"row":16,"column":107},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":106},"end":{"row":16,"column":107},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":105},"end":{"row":16,"column":106},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":104},"end":{"row":16,"column":105},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":103},"end":{"row":16,"column":104},"action":"remove","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":103},"end":{"row":16,"column":104},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":104},"end":{"row":16,"column":105},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":105},"end":{"row":16,"column":106},"action":"insert","lines":["r"]}]}]]},"ace":{"folds":[],"scrolltop":90,"scrollleft":17,"selection":{"start":{"row":13,"column":28},"end":{"row":13,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1425917710504,"hash":"4b809a4ce6727cf3e5e33e31d083acdef809f17e"}