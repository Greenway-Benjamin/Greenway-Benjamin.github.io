var frowneys = document.getElementsByClassName('frowneysmiley');
var happyCount;

for (var i = 0; i < frowneys.length; i++) {
  frowneys[i].addEventListener("mouseover", changeToSmiley);
  frowneys[i].addEventListener("mouseout", changeBack);
}
  function changeToSmiley() {
    var anum = Math.floor(Math.random() * 3) + 1;  
    var newclass = 'smiley' + anum;
    this.innerHTML = ':)';
    this.classList.add(newclass);
    happyCount++;
    document.getElementById('smilecount').innerHTML = happyCount;
  }

  function changeBack() {   
    var changing = this;
    var timing = (Math.floor(Math.random() * 10) + 1) * 1000;
    setTimeout(function(){
     changing.innerHTML = ':(';
     changing.classList.remove('smiley1');
     changing.classList.remove('smiley2');
     changing.classList.remove('smiley3');
    }, timing);
  }
