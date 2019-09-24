'use strict';
  /* <input id="font-size-slider" type="range" />
<br />
<span id="text">Абракадабра!</span> */


const input = document.getElementById("font-size-slider");
const span = document.getElementById("text");
input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}