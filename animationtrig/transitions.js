var frowneys = document.getElementsByClassName('frowneysmiley');

for (var i = 0; i < frowneys.length; i++) {
  frowneys[i].addEventListener("mouseover", changeToSmiley);
}
  function changeToSmiley() {
    var anum = Math.floor(Math.random() * 3) + 1  
    var newclass = 'smiley' + anum;
    this.innerHTML = ':)';
    this.classList.add(newclass);
  }
