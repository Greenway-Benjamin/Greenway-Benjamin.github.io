function toggleAnimations(box) {
  var boxx = document.getElementById(box);
  if(this.innerHTML == 'Play') {
    this.innerHTML = 'Pause';
    boxx.style.animationPlayState = 'running';
  } else {
    this.innerHTML = 'Play';
    boxx.style.animationPlayState = 'paused';
    boxx.classList.remove('boxanimation');
  }
}
