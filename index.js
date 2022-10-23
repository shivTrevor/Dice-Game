//so here finding one more random number here

var ran1 = Math.floor(Math.random()*6)+1;
var ran2 = Math.floor(Math.random()*6)+1;

var source1 ="images/dice"+ran1+".png"
var source2 = "images/dice"+ran2+".png"

//image for first player
document.querySelector(".img1").setAttribute("src",source1)

//image for second player
document.querySelector(".img2").setAttribute("src",source2)

var winner ="";
if(ran1>ran2){ winner = "Player"+1+" Win"; }
else if(ran1<ran2){ winner = "Player"+2+" Win"; }
else{ winner = "Match Tied";}
// so here finding one more thing here


//now the heading and text change here ...
document.querySelector("h1").innerHTML= winner;
