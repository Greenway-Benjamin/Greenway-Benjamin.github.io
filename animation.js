var box = document.getElementById('box1');

document.getElementById('box1button').onclick = function() {
  if(this.innerHTML == 'Play') {
    this.innerHTML = 'Pause';
    box.classList.add('boxanimation');
  } else {
    this.innerHTML = 'Play';
    var computedStyle = window.getComputedStyle(box);
    var marginLeft = computedStyle.getPropertyValue('margin-left');
    var marginTop = computedStyle.getPropertyValue('margin-top');
    box.style.marginLeft = marginLeft;
    box.style.marginTop = marginTop;
    box.classList.remove('boxanimation');
  }
}
