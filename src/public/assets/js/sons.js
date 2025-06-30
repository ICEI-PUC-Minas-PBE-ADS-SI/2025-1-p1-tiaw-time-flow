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

