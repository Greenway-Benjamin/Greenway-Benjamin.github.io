var frowneys = document.getElementsByClassName('frowneysmiley');

for (var i = 0; i < frowneys.length; i++) {
  frowneys[i].addEventListener("mouseover", changeToSmiley);
}
  function changeToSmiley() {
    this.innerHTML = ':)';
    this.classList.add('smiley');
  }
