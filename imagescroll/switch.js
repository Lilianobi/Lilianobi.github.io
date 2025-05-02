const btna = document.querySelector("#btn1");
const btnb = document.querySelector("#btn2");
const btnc = document.querySelector("#btn3");
const kolors = document.querySelector(".colors");
const festival = document.querySelector(".fest");
const african = document.querySelector(".africa");
const roll = document.querySelector(".switch");
const button = document.querySelectorAll("button");

/*btna.addEventListener('click', () => {
     kolors.classList.add("show");
})

btnb.addEventListener('click', () => {
    festival.classList.add("show");
})

btnc.addEventListener('click', () => {
    african.classList.add("show");
})*/


function hideAll() {
    kolors.style.display = "none";
    festival.style.display = "none";
    african.style.display = "none";
 
}

btna.addEventListener('click', () => {
   hideAll() ;
   kolors.style.display = "block";
})

btnb.addEventListener('click', () => {
    hideAll() ;
    festival.style.display = "block";

})

btnc.addEventListener('click', () => {
   hideAll() ;
   african.style.display = "block";
 
})