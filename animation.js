var box = document.getElementById('box1');

document.getElementById('box1button').onclick = function() {
  if(this.innerHTML == 'Play') {
    this.innerHTML = 'Pause';
    box.style.animationPlayState = 'running';
  } else {
    this.innerHTML = 'Play';
    box.style.animationPlayState = 'paused';
    box.classList.remove('boxanimation');
  }
}
