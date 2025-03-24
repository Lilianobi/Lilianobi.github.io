function toggleMenu(){
	let mobmenu = document.querySelector(".mobmenu");
	((mobMenu.style.display=
			(mobMenu.style.display ===
				"block") ? "none" : "block";
}

document.getElemmentById("contactForm").addEventListener("submit", 
	function(event){

		event.preventDefault();

		let fullName=
		document.getElemmentById("fullName").value.trim();
		let email=
		document.getElemmentById("email").value.trim();
		let message=
		document.getElemmentById("message").value.trim();

		if(fullName === " " || email === " " 
			|| message === " " ){
			alert("Please fillin all fields before submitting.");
		}
		else {
			alert("Message Submitted.Thank you!");
			this.reset();
		}
	});