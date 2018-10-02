function toggleAnimations(boxbutton, box) {
  var boxx = document.getElementById(box);
  var boxxbutton = document.getElementById(boxbutton);
  if(boxxbutton.innerHTML == 'Play') {
    boxxbutton.innerHTML = 'Pause';
    boxx.style.animationPlayState = 'running';
  } else {
    boxxbutton.innerHTML = 'Play';
    boxx.style.animationPlayState = 'paused';
    boxx.classList.remove('boxanimation');
  }
}
