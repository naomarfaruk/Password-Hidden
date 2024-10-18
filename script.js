let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let showPass = document.querySelector(".show-pass");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "eye-open.png";
    showPass.style.visibility='visible'
    showPass.innerText = password.value;
    showPass.appendChild(pass);

  } else {
    password.type = "password";
    eyeicon.src = "eye-close.png";
    showPass.style.visibility='hidden'
  }
};
