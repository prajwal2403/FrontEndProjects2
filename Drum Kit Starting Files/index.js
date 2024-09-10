for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var button = this.innerHTML;
        switch (button) {
            case "w": var audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
            case "a": var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s": var audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case "d": var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
            case "j": var audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
            case "k": var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
            case "i": var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
        }
    })
}

//var audio = new Audio("./sounds/crash.mp3");
//audio.play();
//

document.addEventListener("keypress", function (event) {
    console.log(event);
    switch (event.key) {
        case "w": var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a": var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s": var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d": var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j": var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k": var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "i": var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

    }
});

