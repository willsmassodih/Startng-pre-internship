function validateForm() {
    var name = document.forms["contactForm"] ["Fullname"];
    var email = document.forms["contactForm"] ["Email"];
    var message = document.forms["ContactForm"] ["Message"];
    if(name.length<4){
        alert("name must be up to 4 characters");
        name. focus();
        return false;
    }
    if(email.value.indexof("@", 0) < 0)
    {
        alert("please enter a valid e-mail address");
        email. focus();
        return false;
    }
    if (email.value.indexof(".", 0) < 0)
    {
        alert("please enter a valid e-mail address");
        email. focus();
        return false;
    }
    if(Message.length<20){
        alert("enter at least 20 characters");
        message. focus();
        return false;
    }else {
    return true;
    }
}