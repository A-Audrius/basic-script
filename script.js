let day1 = document.getElementById('validationCustom01');
let day2 = document.getElementById('validationCustom02');
let day3 = document.getElementById('validationCustom03');
let day4 = document.getElementById('validationCustom04');
let day5 = document.getElementById('validationCustom05');

let showHTML = document.querySelector('.text');
let button = document.getElementById('button');

function showResult(e) {
    e.preventDefault();

    let result1 = day1.value*1 + day2.value*1 + day3.value*1 + day4.value*1 + day5.value*1 ;
    let result2 = result1 * 45;
showHTML.innerHTML += `iš viso pamokų: ${result1} <br> iš viso minučių:${result2} `;
document.querySelector(".text").style.background = "yellow";
document.querySelector(".text").style.color = "red";

} 

button.addEventListener('click', showResult);