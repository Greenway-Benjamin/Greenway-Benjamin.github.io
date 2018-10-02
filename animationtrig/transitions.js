var frowneys = document.getElementsByClassName('frowneysmiley');

for (i in frowneys) {
  frowneys[i].addEventListener("mouseover", changeToSmiley);
}

function changeToSmiley() {
  this.innerHTML(':)');
}
