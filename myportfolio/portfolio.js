const icon = document.getElementById('icon');
const menu = document.getElementById('menu');
const navcontact = document.getElementById('navcontact');

icon.addEventListener('click', () => {
    menu.classList.toggle('active');
    navcontact.classList.toggle('active');
});

  document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu').classList.remove('active');
    });
  });

  icon.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
  

  


function validateForm() {
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return false;
    }
  
    alert("Thanks for reaching out! I’ll get back to you soon.");
    return true;
  }
  


/*document.getElementById('icon').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('active');
});*/
