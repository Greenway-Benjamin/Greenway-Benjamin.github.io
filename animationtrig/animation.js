function toggleAnimations(box) {

  if(this.innerHTML == 'Play') {
    this.innerHTML = 'Pause';
    box.style.animationPlayState = 'running';
  } else {
    this.innerHTML = 'Play';
    box.style.animationPlayState = 'paused';
    box.classList.remove('boxanimation');
  }
}
