RoseColoredComments.Controller = function() {}

RoseColoredComments.Controller.prototype = {

  init: function(model, view) {
    this.model = model
    this.view = view
    this.formatUrl()
  },

  formatUrl: function() {
    this.view.fetchVideoId()
    var url = 'https://gdata.youtube.com/feeds/api/videos/' + videoId + '/comments?v=2&alt=json&max-results=50'
    this.model.fetchComments(url)
  }
}