prediction1="";
prediction2="";
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
Webcam.snap(function(a){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+a+'"/>';
});
}
console.log("hy i am ml5 enloaded",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bIhIT6pak/model.json',modelloaded);
function modelloaded(){
console.log("i have loaded");
}
function speak(){
var y=window.speechSynthesis;
firstprediction1="the first prediction is"+prediction1;
secondprediction2="and the second prediction is"+prediction2;
var z=new SpeechSynthesisUtterance(firstprediction1+secondprediction2);
y.speak(z);
}
