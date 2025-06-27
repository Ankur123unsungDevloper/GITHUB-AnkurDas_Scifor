document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "") {
      alert("Name cannot be empty.");
      return false;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }

    
    document.getElementById("displayName").value = name;
    document.getElementById("displayEmail").value = email;
    document.getElementById("displayPassword").value = password;
    document.getElementById("dataDisplay").style.display = "block";

    return true;
  });
});
