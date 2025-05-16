document.addEventListener("DOMContentLoaded", function () {
  const showIcon = document.getElementById("showIcon");
  const hideIcon = document.getElementById("hideIcon");
  const passwordInput = document.getElementById("password");

  showIcon.addEventListener("click", function () {
    if (passwordInput) {
      passwordInput.setAttribute("type", "text");
      showIcon.classList.add("hide");
      hideIcon.classList.remove("hide");
    }
  });

  hideIcon.addEventListener("click", function () {
    if (passwordInput) {
      passwordInput.setAttribute("type", "password");
      hideIcon.classList.add("hide");
      showIcon.classList.remove("hide");
    }
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length > 0) {
      if (passwordInput.value.length < 6) {
        passwordInput.classList.add("error");
        passwordInput.classList.remove("success");
      } else {
        passwordInput.classList.remove("error");
        passwordInput.classList.add("success");
      }
    } else {
      passwordInput.classList.remove("error", "success");
    }
  });
});