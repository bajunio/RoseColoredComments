document.addEventListener('DOMContentLoaded', function() {
  var model      = new RoseColoredComments.Model
  var view       = new RoseColoredComments.View
  var controller = new RoseColoredComments.Controller(model, view)
  controller.init()
})