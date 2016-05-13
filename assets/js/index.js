function App() {
  var me = this;
  App.prototype.init = function() {
    $("#header").remove();
    $("#banner").remove();
    $("#one").remove();
    $("#two").remove();
    $("#three").remove();
    $("#footer").remove();
  };
}
$(function() {
  window.app = new App();
  window.app.init();
});
