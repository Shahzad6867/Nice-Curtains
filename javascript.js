function validate() {
    const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$&]).{8,20}$/;
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const nameReg = /^[A-Za-z\s]+$/;
    const mobileReg = /^[0-9]{10}$/;
  
    var fullname = document.getElementById("fname");
    var fpassword = document.getElementById("password");
    var mobile = document.getElementById("mobile");
    var email = document.getElementById("email");
  
    if (fullname.value.length < 5 || !nameReg.test(fullname.value)) {
      document.getElementById("fname1").innerHTML = "Name should contain at least 5 letters";
      fullname.style.border = "2px solid red";
      return false;
    } else {
      document.getElementById("fname1").innerHTML = "";
      fullname.style.border = "";
    }
  
    if (!passwordReg.test(fpassword.value)) {
      document.getElementById("password1").innerHTML = "Password should contain uppercase, lowercase, digit, special character (@#$&), and be 8-20 characters long.";
      fpassword.style.border = "2px solid red";
      return false;
    } else {
      document.getElementById("password1").innerHTML = "";
      fpassword.style.border = "";
    }
  
    if (!emailReg.test(email.value)) {
      document.getElementById("email1").innerHTML = "Invalid email format";
      email.style.border = "2px solid red";
      return false;
    } else {
      document.getElementById("email1").innerHTML = "";
      email.style.border = "";
    }
  
    if (!mobileReg.test(mobile.value)) {
      document.getElementById("mobile1").innerHTML = "Mobile number must be exactly 10 digits";
      mobile.style.border = "2px solid red";
      return false;
    } else {
      document.getElementById("mobile1").innerHTML = "";
      mobile.style.border = "";
    }
  
    return true;
  }
  