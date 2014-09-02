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
        this.sortData(data)
      },
      error: function() {
        alert("Sorry, Joyce...")
      }
    })
  },

  sortData: function(data) {
    var rawDataArray = data.feed.entry
    var authorAndCommentArray = []
    var author
    var comment
    for (var i = 0; i < rawDataArray.length; i++) {
      author = rawDataArray[i].author[0].name.$t
      comment = rawDataArray[i].content.$t
      authorAndCommentArray.push([author, comment])
    }
    this.filterData(authorAndCommentArray)
  },

  filterData: function(authorAndCommentArray) {
    var filteredAuthorAndCommentArray = authorAndCommentArray
    var comment
    for (var i = 0; i < filteredAuthorAndCommentArray.length; i++) {
      comment = filteredAuthorAndCommentArray[i][1]
      if( this.checkForRestrictedWords(comment) ) {
        filteredAuthorAndCommentArray.splice(i, 1)
      }
    }
   return filteredAuthorAndCommentArray
  },

  checkForRestrictedWords: function(restrictedWordsArray, comment) {
    return new RegExp( '\\b' + restrictedWordsArray.join('\\b|\\b') + '\\b').test(comment)
  }
}