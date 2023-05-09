function validation()  {
    var email = document.f1.email.value;
    const email_pattern = /^[^\s@]+\s@]+\.[^\s@]+$/;
    var email_error = document.querySelector("email_error");
    if(email == "")
    {
        email_error.innerHTML = "Email is Required";
        email_error.style.color = "red";
        return false;
    }
    else if(!email_pattern.test(email)) {
        email_error.innerHTML = "Email not Matched";
        email_error.style.color = "red";
        return false;
    }
    else {
        email_error.innerHTML = "";
    }

}