RoseColoredComments.Model = function() {}

RoseColoredComments.Model.prototype = {

  fetchComments: function(url) {
    $.ajax({
      type: 'GET',
      dataType:"json",
      url: url,
      success: this.filterComments(data) {}
    })
  }
}