const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
var seconds
var now
var mins 
var hour

function setDate() {
   now = new Date();

   seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

   mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

   hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  document.getElementById("dclock").innerHTML = now.toLocaleTimeString();
  document.getElementById("dclock1").innerHTML = hour + ':' + mins + ':' + seconds;

}

setInterval(setDate, 1000);
setDate();

var x=1;
function change(){
if(x==1){
  document.getElementById("dclock").style.display = "none";
  document.getElementById("dclock1").style.display = "block";
x++
}
else{
  document.getElementById("dclock1").style.display = "none";
  document.getElementById("dclock").style.display = "block";
  x=1
}
}
