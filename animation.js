var box1 = document.getElementById('box1');

document.getElementById('box1button')
onclick = function() {
  if(this.innerHTML == 'Play') {
    this.innerHTML = 'Pause';
    box1.classList.add('boxanimation');
  } else {
    this.innerHTML = 'Play';
    var computedStyle = window.getComputedStyle(box1);
    var marginLeft = computedStyle.getPropertyValue('margin-left');
    box1.style.marginLeft = marginLeft;
    box1.classList.remove('boxanimation');
  }
}
