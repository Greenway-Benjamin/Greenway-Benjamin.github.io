var frowneys = document.getElementsByClassName('frowneysmiley');
var happyCount = 0;

for (var i = 0; i < frowneys.length; i++) {
  frowneys[i].addEventListener("mouseover", changeToSmiley);
  frowneys[i].addEventListener("mouseout", changeBack);
}
  function changeToSmiley() {
    var smiling = this.innerHTML;
    if (smiling == '(:') {
      return
    }
    var anum = Math.floor(Math.random() * 4) + 1;  
    var newclass = 'smiley' + anum;
    this.innerHTML = '(:';
    this.classList.add(newclass);
    happyCount = happyCount + 1;
    document.getElementById('smilecount').innerHTML = happyCount;    
  }

  function changeBack() {
    var stoprun = this.dataset.running;
    if (stoprun == 'true') {
      return;
    }
    this.dataset.running = 'true';
    var changing = this;
    var timing = (Math.floor(Math.random() * 10) + 1) * 1000;
    setTimeout(function(){
     changing.innerHTML = ':(';
     changing.classList.remove('smiley1');
     changing.classList.remove('smiley2');
     changing.classList.remove('smiley3');
     changing.classList.remove('smiley4'); 
     changing.dataset.running = 'false';
    }, timing);
  }
