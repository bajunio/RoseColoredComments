RoseColoredComments.View = function() {}

RoseColoredComments.View.prototype = {

  getUrl: function() {
    chrome.tabs.query({currentWindow: true, active: true},function(tabs){
      var url = tabs[0].url
      var apiUrl = urlFetcher.prepareUrl(url)
      commentGenerator.getComments(apiUrl)
    })
  }
}