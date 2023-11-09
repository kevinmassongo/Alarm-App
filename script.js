const days = document.getElementById('days');
const hours = document.getElementById('hours');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const hoursInput = document.getElementById('hoursInput');
const minInput = document.getElementById('minInput');
const enregistrer = document.querySelector('.btn');

let hoursText;
let minText;


function run(){
    const date = new Date();
    const aujourdHui = new Date('Jan 01 2024')
    const diff = (aujourdHui - date)/1000
    const daysText = Math.floor(diff/3600/24);
    const hoursText = Math.floor(diff/3600)%24;
    const minText = Math.floor(diff/60)%60;
    const secText = Math.floor(diff)%60;
    days.textContent = daysText
    hours.textContent = hoursText
    min.textContent = minText
    sec.textContent = secText
}
setInterval(run)
const date = new Date();
console.log(date);
date.setHours(20);
console.log(date);

hoursInput.addEventListener('input', hoursFunction)

function hoursFunction(e){
    hoursText = e.target.value
}

minInput.addEventListener('input', minFunction)

function minFunction(e){
    minText = e.target.value
}

enregistrer.addEventListener('click', btnFunction)

function btnFunction(e){
    e.preventDefault()
    run()
}