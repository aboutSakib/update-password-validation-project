function myfunction() {
  var pass = document.getElementById("pass");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

function validate() {
  var password = document.getElementById("pass");
  var length = document.getElementById("length");

  if (password.value.length >= 8) {
    alert("Login Succesfull");
    window.location.href =
      "https://aboutsakib.github.io/login-password-validation/";
    return false;
  } else {
    alert("Login Failed");
  }
}
