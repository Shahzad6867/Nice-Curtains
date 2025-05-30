function validate(){
    const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$&]).{8,20}/;
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const nameReg = /^[A-Za-z\s]+$/;  // Only alphabets and spaces
    const mobileReg = /^[0-9]{10}$/;   // Exactly 10 digits
   
    var fullname=document.getElementById("fname");
    var fpassword=document.getElementById("password");
    var mobile=document.getElementById("mobile");
    var email=document.getElementById("email");
   

    if(fullname.value.length < 5 || !nameReg.test(fullname.value)){
        document.getElementById("fname1").innerHTML="Name should contain atleast 5 letters";
       fullname.style.border="2px solid red"
        return false;
    }else{
        document.getElementById("fname1").innerHTML="";
        fullname.style.border="";
    }
    
    if(!passwordReg.test(fpassword.value)){
       document.getElementById("password1").innerHTML="Password should consist of an Uppercase and lowercase and Special Characters and length to be 8-20"
       fpassword.style.border="2px solid red";
       return false;
    }else {
        document.getElementById("password1").innerHTML="";
        fpassword.style.border="";
    }
    
    if(!emailReg.test(email.value)){
        document.getElementById("email1").innerHTML="Invalid email format"
        email.style.border="2px solid red";
        return false;
     }else {
        document.getElementById("email1").innerHTML="";
        email.style.border="";
     }
     
     if(!mobileReg.test(mobile.value)){
        document.getElementById("mobile1").innerHTML="Should contain at least 10 digits";
        mobile.style.border="2px solid red";
        return false;
    }else{
        document.getElementById("mobile1").innerHTML="";
        mobile.style.border="";
    }
    return true;
}