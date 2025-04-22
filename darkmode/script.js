const box = document.querySelector(".container");
const password = document.querySelector("#pass");
const icon = document.querySelector(".fa-regular");
const indicator = document.querySelector(".fa-solid");
const body = document.querySelector("body");

indicator.addEventListener('click', () => {
     body.classList.toggle("darkmode");
     if(indicator.classList.contains('fa-sun')){
        indicator.classList.replace('fa-sun', 'fa-moon')
     } else {
        indicator.classList.replace('fa-moon', 'fa-sun')
      
     }
});

icon.addEventListener('click', () => {
    password.setAttribute("type", "text");
    if(icon.classList.contains("fa-eye-slash")){
        icon.classList.replace("fa-eye-slash", "fa-eye")
       
    }
   
    else{
        icon.classList.replace("fa-eye", "fa-eye-slash")
        password.setAttribute("type", "password")
    }
});