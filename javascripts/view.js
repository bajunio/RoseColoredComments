RoseColoredComments.View = function() {}

RoseColoredComments.View.prototype = {

  fetchVideoId: function() {
    chrome.tabs.query({
      currentWindow: true, active: true},
      function(tabs) {
        var videoId = tabs[0].url.pop(11)
        return videoId
    })
  },

  buildComment: function(filteredAuthorAndCommentArray) {
    var authorName
    var commentText
    var commentDiv
    for (var i = 0; i < filteredAuthorAndCommentArray.length; i++) {
      commentText = filteredAuthorAndCommentArray[i][1]
      authorName = filteredAuthorAndCommentArray[i][0]
      commentDiv = "<div class='comment'>" + commentText + "</br>" + "-" + authorName + "</div>"
      this.appendComment(commentDiv)

    }
  },

  appendComment: function(commentDiv) {
    $('#commentBox').append(commentDiv)
  }
}