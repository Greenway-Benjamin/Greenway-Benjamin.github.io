var frowneys = document.getElementsByClassName('frowneysmiley');
var tester = document.getElementById('tester');

//for (i in frowneys) {
//  frowneys[i].addEventListener("mouseover", changeToSmiley(this));
//}

test.addEventListener("mouseover", testsmiley);

function testsmiley() {
  document.getElementById('tester').innerHTML = ':)';
}

function changeToSmiley(frowney) {
  frowney.innerHTML= ':)';
}
