var modal = document.querySelector('.myModal');
var btn = document.querySelector('.modal');
var modalContent = document.querySelector('.modalContent');
var span = document.getElementsByClassName('close')[0];
var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}

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
