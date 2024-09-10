var randomrandomNumber1 = Math.floor(Math.random() * 6) + 1;
var addimg = "dice" + randomrandomNumber1 + ".png";

var final = "./images/" + addimg;

document.querySelectorAll("img")[0].setAttribute("src", final);


var randomrandomNumber2 = Math.floor(Math.random() * 6) + 1;
var addimg1 = "dice" + randomrandomNumber2 + ".png";
var final1 = "./images/" + addimg1;
document.querySelectorAll("img")[1].setAttribute("src", final1);