const imageUpload = document.getElementById("imageUpload");
const profileImage = document.getElementById("profileImage");
const userNameInput = document.getElementById("userName");

// Trocar imagem
profileImage.addEventListener("click", () => {
  imageUpload.click();
});

imageUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
      localStorage.setItem("profileImage", e.target.result); // salvar imagem
    };
    reader.readAsDataURL(file);
  }
});

// Nome editável
userNameInput.addEventListener("click", function () {
  this.focus();
});

userNameInput.addEventListener("blur", function () {
  localStorage.setItem("userName", this.value); // salvar nome
});

// Carregar dados salvos
window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("userName");
  const savedImage = localStorage.getItem("profileImage");

  if (savedName) userNameInput.value = savedName;
  if (savedImage) profileImage.src = savedImage;
});
