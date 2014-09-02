RoseColoredComments.Model = function() {}

var restrictedWordsArray = [
'boo',
'bad',
'fail',
'pony'
]

RoseColoredComments.Model.prototype = {

  fetchComments: function(url) {
    $.ajax({
      type: 'GET',
      dataType:"json",
      url: url,
      success: function(data) {
        this.filterComments(data)
      },
      error: function() {
        alert("Sorry, Joyce...")
      }
    })
  },

  filterComments: function(data) {
    var rawCommentArray = data.feed.entry
    for (var i = 0; i < rawCommentArray.length; i++) {
      if( (new RegExp( '\\b' + restrictedWordsArray.join('\\b|\\b') + '\\b') ).test(rawCommentArray[i]) ) {
        this.goodComment(rawCommentArray[i])
      } else {
        this.badComment(rawCommentArray[i])
      }
    }
  },

  goodComment: function(comment) {},
  badComment: function(comment) {}

}