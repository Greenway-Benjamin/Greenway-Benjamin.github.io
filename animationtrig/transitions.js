var frowneys = document.getElementsByClassName('frowneysmiley');

for (var i = 0; i < frowneys.length; i++) {
  frowneys[i].addEventListener("mouseover", changeToSmiley);
  frowneys[i].addEventListener("mouseout", changeBack);
}
  function changeToSmiley() {
    var anum = Math.floor(Math.random() * 3) + 1  
    var newclass = 'smiley' + anum;
    this.innerHTML = ':)';
    this.classList.add(newclass);
  }

  function changeBack() {   
    var changing = this;
    setTimeout(function(){
     changing.innerHTML = ':(';
     changing.classList.remove('smiley1');
     changing.classList.remove('smiley2');
     changing.classList.remove('smiley3');
    }, 5000);
  }
