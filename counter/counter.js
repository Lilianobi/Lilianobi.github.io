let countText = document.querySelector(".count");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");

let count = 0;

function counter(){
    countText.textContent = count;

    if(count < 0){
        countText.style.color = "red";
    }
      
    else if (count > 0){
        countText.style.color = "green";
    }
    else {
        countText.style.color = "blue";
    }
 
}

increment.addEventListener('click', () => {
    count++;
    counter();
});


decrement.addEventListener('click', () => {
    count--;
    counter();
});

reset.addEventListener('click', () => {
    count = 0;
    counter();
});
