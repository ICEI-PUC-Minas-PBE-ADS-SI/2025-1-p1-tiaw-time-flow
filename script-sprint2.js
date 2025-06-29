let audio = new Audio();
let isLooping = false;

function playSound(src, loop = false) {
  if (!src) return;
  audio.pause();
  audio = new Audio(src);
  audio.loop = loop;
  audio.play();
  isLooping = loop;
  localStorage.setItem('audioSelecionado', src);
  localStorage.setItem('audioLoop', loop);
}

function stopSound() {
  audio.pause();
  audio.currentTime = 0;
  isLooping = false;
  localStorage.removeItem('audioSelecionado');
  localStorage.removeItem('audioLoop');
}

function playUserAudio() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      audio.pause();
      audio = new Audio(e.target.result);
      audio.loop = false; 
      audio.play();
    };
    reader.readAsDataURL(file);
  } else {
    alert("Por favor, selecione um arquivo de áudio.");
  }
}

function salvarConfiguracao() {
  const audioSrc = audio?.src || "Nenhum áudio em uso";
  const loopStatus = isLooping ? "Repetindo" : "Único";
  const conteudo = `Áudio selecionado: ${audioSrc}\nModo: ${loopStatus}`;

  const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'configuracao_audio.txt';
  link.click();

  URL.revokeObjectURL(url);
}

function tocarSpotify() {
  const termo = document.getElementById('spotifySearch').value;
  if (termo) {
    const query = encodeURIComponent(termo);
    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
  } else {
    alert("Digite algo para pesquisar.");
  }
}

window.onload = function () {
  const savedSrc = localStorage.getItem('audioSelecionado');
  const savedLoop = localStorage.getItem('audioLoop') === 'true';
  if (savedSrc) {
    playSound(savedSrc, savedLoop);
  }
};
