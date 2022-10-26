var modal = document.querySelector('.myModal');
var btn = document.querySelector('.modal');
var modalContent = document.querySelector('.modalContent');
var span = document.getElementsByClassName('close')[0];

loadEvents();

function loadEvents() {
  btn.addEventListener('click', showModal);
  span.addEventListener('click', closeModal);
}

function showModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
