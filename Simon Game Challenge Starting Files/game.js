var userClickedPattern = [];
var level = 0;
var started = false;
//$("#level-title").text("hellow");

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];


$(document).keypress(function (event) {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

    }

})

//function nextSequence() {
//    level++;
//    $("#level-title").text("Level " + level);
//    var randomNumber = Math.floor(Math.random() * 4);
//    var randomChosenColour = buttonColours[nextSequence()];
//    gamePattern.push(randomChosenColour);
//    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//    playSound(randomChosenColour);
//
//
//}


function nextSequence() {

    //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];

    //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;

    //5. Inside nextSequence(), update the h1 with this change in the value of level.
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}


$(".btn").click(function () {

    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);

})

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    var aClass = "pressed";
    $("#" + currentColour).addClass(aClass);
    setTimeout(function () {
        $("#" + currentColour).removeClass(aClass);
    }, 100);

}
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;




}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {

        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart ");
        startOver();


        console.log("wrong");

    }




}


