const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const now = new Date();
const seconds = now.getSeconds();
const mins = now.getMinutes();
const hour = now.getHours();
function setDate() {

  document.getElementById("dclock").innerHTML = now.toLocaleTimeString();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);

setDate();
var x = 1;
function change() {
  if (x == 1) {
    document.getElementById("dclock").style.display = "none";
  document.getElementById("dclock1").innerHTML = hour + ':' + mins + ':' + seconds;
  document.getElementById("dclock1").style.display = "block";
    x++;
  }
  else {
    document.getElementById("dclock1").style.display = "none";
    document.getElementById("dclock").style.display = "block";
    x = 1
  }
}