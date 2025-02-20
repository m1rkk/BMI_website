const form = document.querySelector('form');
const btn = document.getElementById("btnCalc");
const text = document.getElementById("yourBmi");

function roundNumber(number, digits) {
    var multiple = Math.pow(10, digits);
    var rndedNum = Math.round(number * multiple) / multiple;
    return rndedNum;
}




function calculate(event){
    event.preventDefault();
    age = parseInt(document.getElementById("age").value);
    bodyWeight = parseFloat(document.getElementById("bodyWeight").value);
    bodyHeight = parseFloat(document.getElementById("bodyHeight").value);
    console.log(Math.floor(bodyWeight / (bodyHeight*bodyHeight)));
    text.innerHTML = roundNumber(bodyWeight / (bodyHeight*bodyHeight),1);
    text.classList.replace('hide', 'notHidden');
}
btn.addEventListener("click", calculate);

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenEllements = document.querySelectorAll('.hidden');
hiddenEllements.forEach((el) => observer.observe(el));