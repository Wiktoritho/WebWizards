export function initializeGallery() {
  const galleryList = document.querySelector('.gallery__list');
  const leftArrow = document.querySelector('.gallery__icon.prev');
  const rightArrow = document.querySelector('.gallery__icon.next');
  const dots = document.querySelectorAll('.gallery__dot');
  const aboutMeLink = document.querySelector('a[href="#about-me"]');
  const galleryLink = document.querySelector('a[href="#gallery"]');

  let currentImageIndex = 0;
  let imageWidth = 1464;

  function updateImageWidth() {
    if (window.innerWidth < 900) {
      imageWidth = 450;
    } else if (window.innerWidth >= 900 && window.innerWidth < 1420) {
      imageWidth = 960;
    } else {
      imageWidth = 1464;
    }
  }

  function updateDotsAndImages() {
    dots.forEach((dot, index) => {
      if (index === currentImageIndex) {
        dot.style.backgroundColor = 'red';
      } else {
        dot.style.backgroundColor = '#AFAFAF';
      }
    });

    const galleryElements = document.querySelectorAll('.gallery__element img');
    galleryElements.forEach((element, index) => {
      if (index === currentImageIndex) {
        setTimeout(() => {
          element.style.opacity = '1';
        }, 500);
      } else {
        setTimeout(() => {
          element.style.opacity = '0.2';
        }, 500);
      }
    });
  }

  function slideToIndex(index) {
    currentImageIndex = index;
    const newPosition = currentImageIndex * imageWidth;
    updateDotsAndImages();
    galleryList.style.transform = `translateX(-${newPosition}px)`;
  }

  function slideLeft() {
    if (currentImageIndex > 0) {
      slideToIndex(currentImageIndex - 1);
    }
  }

  function slideRight() {
    const galleryElements = document.querySelectorAll('.gallery__element');
    if (currentImageIndex < galleryElements.length - 1) {
      slideToIndex(currentImageIndex + 1);
    }
  }

  window.addEventListener('resize', () => {
    updateImageWidth();
    slideToIndex(currentImageIndex);
  });

  updateImageWidth();
  updateDotsAndImages();

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      slideToIndex(index);
    });
  });

  leftArrow.addEventListener('click', slideLeft);
  rightArrow.addEventListener('click', slideRight);

  aboutMeLink.addEventListener('click', e => {
    e.preventDefault();
    const aboutMeSection = document.getElementById('about-me');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
  });
  galleryLink.addEventListener('click', e => {
    e.preventDefault();
    const gallerySection = document.getElementById('gallery');
    gallerySection.scrollIntoView({ behavior: 'smooth' });
  });
}
