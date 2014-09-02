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

  appendComments: function(filteredAuthorAndCommentsArray)




}