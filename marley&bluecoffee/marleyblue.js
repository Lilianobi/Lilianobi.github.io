
	let navmenu = 
	document.getElemmentById("navmenu")

	navmenu.style.maxheight = "0px";
    
    function toggleMenu(){
    	if(navmenu.style.maxheight = "0px")
    	{
    		navmenu.style.maxheight = "400px";
    	}
    	else{
    		navmenu.style.maxheight = "0px";
    	}
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