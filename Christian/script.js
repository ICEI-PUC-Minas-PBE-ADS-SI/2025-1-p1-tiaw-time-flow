document.getElementById("imagemInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const preview = document.getElementById("preview");
        preview.src = e.target.result;
        preview.style.display = "block";
        preview.style.width = "100%";
        preview.style.height = "100%";
        preview.style.objectFit = "cover";
        preview.style.borderRadius = "10px";
        preview.style.position = "absolute";
        preview.style.top = "0";
        preview.style.left = "0";
        preview.style.zIndex = "1";
  
        const icone = document.querySelector(".icone");
        if (icone) {
          icone.style.display = "none";
        }
  
        const uploadArea = document.querySelector(".upload-area");
        if (uploadArea) {
          uploadArea.style.border = "none";
        }
      };
      reader.readAsDataURL(file);
    }
  });
  
  document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const mensagemErro = document.getElementById("mensagemErro");
  
    if (senha !== confirmarSenha) {
      mensagemErro.textContent = "AS SENHAS NÃO SÃO COMPATÍVEIS.";
      return;
    } else {
      mensagemErro.textContent = "";
    }
  
    window.location.href = "pagbran.html";
  });
  
  function togglePasswordVisibility(id, iconId) {
    const input = document.getElementById(id);
    const icon = document.getElementById(iconId);
    if (input.type === "password") {
      input.type = "text";
      icon.textContent = "👁";
    } else {
      input.type = "password";
      icon.textContent = "👁";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const senhaInput = document.getElementById("senha");
    const senhaWrapper = document.createElement("div");
    senhaWrapper.style.position = "relative";
    senhaWrapper.style.display = "flex";
    senhaWrapper.style.alignItems = "center";
  
    senhaInput.parentNode.insertBefore(senhaWrapper, senhaInput);
    senhaWrapper.appendChild(senhaInput);
  
    const senhaIcon = document.createElement("span");
    senhaIcon.textContent = "👁";
    senhaIcon.id = "toggleSenha";
    senhaIcon.style.cursor = "pointer";
    senhaIcon.style.position = "absolute";
    senhaIcon.style.right = "10px";
    senhaIcon.style.fontSize = "18px";
    senhaIcon.onclick = () => togglePasswordVisibility("senha", "toggleSenha");
    senhaWrapper.appendChild(senhaIcon);
  
    const confirmarInput = document.getElementById("confirmarSenha");
    const confirmarWrapper = document.createElement("div");
    confirmarWrapper.style.position = "relative";
    confirmarWrapper.style.display = "flex";
    confirmarWrapper.style.alignItems = "center";
  
    confirmarInput.parentNode.insertBefore(confirmarWrapper, confirmarInput);
    confirmarWrapper.appendChild(confirmarInput);
  
    const confirmarIcon = document.createElement("span");
    confirmarIcon.textContent = "👁";
    confirmarIcon.id = "toggleConfirmar";
    confirmarIcon.style.cursor = "pointer";
    confirmarIcon.style.position = "absolute";
    confirmarIcon.style.right = "10px";
    confirmarIcon.style.fontSize = "18px";
    confirmarIcon.onclick = () => togglePasswordVisibility("confirmarSenha", "toggleConfirmar");
    confirmarWrapper.appendChild(confirmarIcon);
  });