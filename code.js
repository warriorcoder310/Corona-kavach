onEvent("button1", "click", function( ) {
  setScreen("screen2");
});
onEvent("button2", "click", function( ) {
  setScreen("screen1");
});
onEvent("button3", "click", function( ) {
  setScreen("screen3");
});
onEvent("button4", "click", function( ) {
  setScreen("screen4");
  setText("text_area12", "Thank you  " + getText("text_input3"));
});
onEvent("button5", "click", function( ) {
  setScreen("screen5");
});
onEvent("radio_button4", "click", function( ) {
  setScreen("screen7");
});
onEvent("radio_button8", "click", function( ) {
  setScreen("screen8");
});
