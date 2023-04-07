function showerr(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {


    var email = document.contactForm.email.value;

    var password = document.contactForm.Password.value;

    var emailErr =  passwordErr = true;


    if(email==""){
        showerr("emailErr","Please enter your email");
    }else{
        var regex=/^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            showerr("emailErr","Please Enter an appropriate email");
        }else{
            showerr("emailErr","");
            emailErr=false;
        }

    }

    if(password==""){
        showerr("passwordErr","Please enter your password");
    }else{
        var regex=/^.{8,}$/;
        if(regex.test(password)===false){
            showerr("passwordErr","Password must be atleast 8 character long");
        }else{
            showerr("passwordErr","");
            passwordErr=false;
        }
    }

    if(( emailErr || passwordErr)==true){
        return false;

    }else{
        var datapreview ="You have entered the following \n"+

        "your email : "+email+"\n"+

        "your password : "+password+"\n"

        alert(datapreview);
    }







 }