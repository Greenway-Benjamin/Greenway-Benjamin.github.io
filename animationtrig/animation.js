function toggleAnimations(boxbutton, box) {

  if(this.innerHTML == 'Play') {
    boxbutton.innerHTML = 'Pause';
    box.style.animationPlayState = 'running';
  } else {
    boxbutton.innerHTML = 'Play';
    box.style.animationPlayState = 'paused';
    box.classList.remove('boxanimation');
  }
}
