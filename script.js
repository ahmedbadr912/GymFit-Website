// Navbar Toggle
function my_tooggle(){
    const navLinks =document.getElementById ( "nav-links")
    navLinks.classList.toggle("active");
}




function showMessage() {
    alert("Service successfully registered.");
}






function validateForm() {

    var name = document.getElementById("name").value;
    if (name === "") {
        alert("Please enter your name");
        return false;
    }
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    var email = document.getElementById("email").value;
   
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    
    var message = document.getElementById("message").value;
    if (message === "") {
        alert("Please enter your message");
        return false;
    }

   
    alert("Your message has been sent successfully!");
    return true; 
}






