const stars = document.querySelectorAll('.star');
const buttons = document.getElementById('buttons');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    updateStars(selectedRating);
    buttons.classList.remove('hidden');
  });
});

function updateStars(rating) {
  stars.forEach(star => {
    const value = parseInt(star.getAttribute('data-value'));
    star.classList.toggle('active', value <= rating);
  });
}

document.getElementById('cancel-button').addEventListener('click', () => {
  selectedRating = 0;
  updateStars(selectedRating);
  buttons.classList.add('hidden');
});

document.getElementById('confirm-button').addEventListener('click', () => {
  window.location.href = 'agradecimento.html';
});

document.getElementById('back-button').addEventListener('click', () => {
  window.location.href = 'agradecimento.html';
});
