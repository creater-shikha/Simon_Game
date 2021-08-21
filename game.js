var buttonColors=["red","blue","green","yellow"];
var gamePatten=[];
var userClickedPattern=[];

var start=false;
var level1=0;

$(document).keypress(function() {
   if(!start) {   
    $("h1").text("level "+level1);
    nextSequence();
    start=true;
   }
  });


  $(".btn").click(function (){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
 
   
});

function checkAnswer(currentLevel){
  if(gamePatten[currentLevel] === userClickedPattern[currentLevel]){
    console.log("sucess");
  
  if(userClickedPattern.length === gamePatten.length){
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
}
  else{
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
      //....and whatever else you need to do
  }, 200);
  $("h1").text("Game Over, Press Any Key to Restart");
  startOver();
  }
  }

function nextSequence(){
  userClickedPattern=[];
     level1++;
      $("h1").text("level "+level1);
    var nums=Math.floor( Math.random()*4);
    randomChosenColor=buttonColors[nums];
    gamePatten.push(randomChosenColor);
    var color=randomChosenColor;
    $("#"+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(color);
   
    
}
function playsound(color){
  var audio = new Audio("\sounds"+"\\"+color+".mp3");
  audio.play();
}

function animatePress(CurrentColor){
$("."+CurrentColor).addClass('pressed');
setTimeout(function(){
    $("."+CurrentColor).removeClass('pressed');
    //....and whatever else you need to do
}, 100);
}
function startOver(){
level1=0;
gamePatten=[];
start=false;
}


