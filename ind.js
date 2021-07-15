var randomnumber1=Math.floor((Math.random()*6)+1);
var imgdice="dice"+randomnumber1+".png";
var source="images/"+imgdice;

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",source);



var randomnumber2=Math.floor((Math.random()*6)+1);
var imgdice2="dice"+randomnumber2+".png";
var source2="images/"+imgdice2;

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",source2);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player1 wins :)";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="player2 wins :)";
}
else{
    document.querySelector("h1").innerHTML="Draw:)";
}


