RoseColoredComments.Model = function() {}

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
    var commentArray = data.feed.entry
    for (var i = 0; i < commentArray.length; i++) {
      if( (new RegExp( '\\b' + array.join('\\b|\\b') + '\\b') ).test(comment) ) {
        this.goodComment(comment)
      } else {
        this.badComment(comment)
      }
    }
  },

  goodComment: function(comment) {},
  badComment: function(comment) {}

}