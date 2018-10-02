var box = document.getElementById('box1');

document.getElementById('box1button').onclick = function() {
  if(this.innerHTML == 'Play') {
    this.innerHTML = 'Pause';
    box.style.animationplaystate = 'running';
  } else {
    this.innerHTML = 'Play';
    box.style.animationplaystate = 'paused';
    box.classList.remove('boxanimation');
  }
}
