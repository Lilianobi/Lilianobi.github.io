const bars = document.querySelector("#bars");
const drop = document.querySelector(".block");
const close = document.querySelector("#close");

bars.addEventListener("click", () => {
    drop.classList.toggle('active')
});

close.addEventListener("click", () => {
    drop.classList.toggle('hide')
});