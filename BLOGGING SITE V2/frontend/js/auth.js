const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const message = document.getElementById("message");

if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
      message.textContent = "Please fill in all fields";
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      message.textContent = "Please use a Gmail address";
      return;
    }

    window.location.href = "dashboard.html";
  });
}

if (registerBtn) {
  registerBtn.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
      message.textContent = "Please fill in all fields";
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      message.textContent = "Please use a Gmail address";
      return;
    }

    window.location.href = "login.html";
  });
}