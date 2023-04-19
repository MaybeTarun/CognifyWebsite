let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let download = document.getElementById('download');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value < window.innerHeight) {
        text.style.marginTop = value * 2.5 + 'px';
        download.style.marginTop = value * 1.5 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 1 + 'px';
    }
});

const scrollToTopButton = document.getElementById('totop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollToTopButton.style.display = 'inline-block';
      download.style.display = 'none';
    } else {
      scrollToTopButton.style.display = 'none';
      download.style.display = 'inline-block';
    }
  });