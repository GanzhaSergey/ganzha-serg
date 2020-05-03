document.querySelector("#but").onclick = function () {
let len = document.querySelector("#length").value;
let min = document.querySelector("#min").value;
let max = document.querySelector("#max").value;
let result = [];

for (let i = 0; i < len; i++) {
result.push(randomInteger(min,max));
    }
document.querySelector('#out').innerHTML = "Generate array: " + result;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }