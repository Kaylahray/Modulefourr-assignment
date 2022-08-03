(function(){

var byeSpeaker= {};
 byeSpeaker.speak= function speak(name) {
  console.log(speakWord + " " + name);
};
var speakWord="GoodBye";

window.byeSpeaker=byeSpeaker;
})(window);




