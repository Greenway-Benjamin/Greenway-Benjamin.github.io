var frowneys = document.getElementsByClassName('frowneysmiley');

for (var i = 0; i < frowneys.length; i++) {
  frowneys[i].addEventListener("mouseover", changeToSmiley);
//  frowneys[i].addEventListener("mouseout", changeBack);
}
  function changeToSmiley() {
    var anum = Math.floor(Math.random() * 3) + 1  
    var newclass = 'smiley' + anum;
    this.innerHTML = ':)';
    this.classList.add(newclass);
  }

//  function changeBack() {
 //   setTimeOut(function(){
 //     this.innerHTML = ':(';
   //   this.classList.remove('smiley1');
     // this.classList.remove('smiley2');
   //   this.classList.remove('smiley3'); }, 5000);
 // }
