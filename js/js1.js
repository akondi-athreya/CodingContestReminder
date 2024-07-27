function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateLanguageBoxes() {
    const boxes = document.querySelectorAll('.language-box');
    boxes.forEach(box => {
      if (isElementInViewport(box)) {
        box.style.opacity = '1';
        box.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', animateLanguageBoxes);
  window.addEventListener('load', animateLanguageBoxes);


 