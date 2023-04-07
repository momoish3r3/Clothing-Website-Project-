function showerr(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {

    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var number = document.contactForm.number.value;
    var password = document.contactForm.Password.value;

    var nameErr = emailErr = phoneErr = passwordErr = true;

    if(name==""){
        showerr("nameErr","Please enter your name");
    }else{
        var regex=/^[a-zA-Z\s]+$/;
        if(regex.test(name)===false){
            showerr("nameErr","Please Enter an appropriate name");
        }else{
            showerr("nameErr","");
            nameErr=false;
        }

    }
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
    if(number==""){
        showerr("numberErr","Please enter a phone number");
    }else{
        var regex= /^[1-9]\d{9}$/;
        if(regex.test(number)===false){
            showerr("numberErr","Please enter a valid phone number");

        }else{
            showerr("numberErr","");
            numberErr=false;
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

    if((nameErr || emailErr || numberErr ||passwordErr)==true){
        return false;

    }else{
        var datapreview ="You have entered the following \n"+
        "Your name : "+name+"\n"+
        "your email : "+email+"\n"+
        "Your number : "+number+"\n"+
        "your password : "+password+"\n"

        alert(datapreview);
    }







 }
// function showerr(elemId, hintMsg) {
//     document.getElementById(elemId).innerHTML = hintMsg;
// }

// function validateForm() {
//     var name = document.contactForm.name.value;
//     var email = document.contactForm.email.value;
//     var number = document.contactForm.phone.value;
//     var password = document.contactForm.password.value;

//     var nameErr = false;
//     var emailErr = false;
//     var phoneErr = false;
//     var passwordErr = false;

//     if (name == "") {
//         showerr("nameErr", "Please enter your name");
//         nameErr = true;
//     } else {
//         var regex = /^[a-zA-Z\s]+$/;
//         if (regex.test(name) === false) {
//             showerr("nameErr", "Please enter an appropriate name");
//             nameErr = true;
//         } else {
//             showerr("nameErr", "");
//         }
//     }

//     if (email == "") {
//         showerr("emailErr", "Please enter your email");
//         emailErr = true;
//     } else {
//         var regex = /^\S+@\S+\.\S+$/;
//         if (regex.test(email) === false) {
//             showerr("emailErr", "Please enter a valid email");
//             emailErr = true;
//         } else {
//             showerr("emailErr", "");
//         }
//     }

//     if (number == "") {
//         showerr("numberErr", "Please enter a phone number");
//         phoneErr = true;
//     } else {
//         var regex = /^[1-9]\d{9}$/;
//         if (regex.test(number) === false) {
//             showerr("numberErr", "Please enter a valid phone number");
//             phoneErr = true;
//         } else {
//             showerr("numberErr", "");
//         }
//     }

//     if (password == "") {
//         showerr("passwordErr", "Please enter a password");
//         passwordErr = true;
//     } else {
//         var regex = /^.{8,}$/;
//         if (regex.test(password) === false) {
//             showerr("passwordErr", "Password must be at least 8 characters long");
//             passwordErr = true;
//         } else {
//             showerr("passwordErr", "");
//         }
//     }

//     if (nameErr || emailErr || phoneErr || passwordErr) {
//         return false;
//     } else {
//         var datapreview = "You have entered the following:\n" +
//             "Your name: " + name + "\n" +
//             "Your email: " + email + "\n" +
//             "Your phone number: " + number;

//         alert(datapreview);
//         return true;
//     }
// }
