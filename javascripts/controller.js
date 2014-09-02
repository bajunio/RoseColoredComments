RoseColoredComments.Controller = function() {}

RoseColoredComments.Controller.prototype = {

  init: function(model, view) {
    this.model = model
    this.view = view
    getComments()
  },

  getComments: function() {

  }
}