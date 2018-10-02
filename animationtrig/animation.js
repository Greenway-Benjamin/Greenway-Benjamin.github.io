function toggleAnimations(box) {
  thebox = document.getElementById(box);
  if(this.innerHTML == 'Play') {
    this.innerHTML = 'Pause';
    thebox.style.animationPlayState = 'running';
  } else {
    this.innerHTML = 'Play';
    thebox.style.animationPlayState = 'paused';
    thebox.classList.remove('boxanimation');
  }
}
