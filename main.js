x = 0;
y = 0;
var screen_wdith = 0;
var screen_height = 0;
var apple = ""
draw_apple = "";
var speak_data = ""
var to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();


 function preload () {
  loadimage()
  apple = "set";
  }

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has not recognized a number: " + content; 

}

function setup() {
screen_width = window.innerWidth;
screen_height = 100 ;
}
 createCanvas()
 {
 screen_width, screen_height-150;
 }

 canvas.position() 
 {
   (75,105);
 }


to_number = Number(content);
if(Number.isInteger(to_number))

function draw() {
  if(draw_apple == "set")
  forloop
for(var i=0; i<to_number; i++)
{
x = Math.floor(Math.random() * 700);
y = Math.floor(Math.random() * 400);
Image(apple, x, y, 50,50);
}

}


  {
    document.getElementById("status").innerHTML = to_number + " Started Drawing Apple ";
    draw_apple = "set";
  }


function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "Apples Drawn";
}
