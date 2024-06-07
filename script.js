let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');

  if (window.scrollY > 120) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

let swiper = new Swiper('.review-slider', {
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
});

document.getElementById('darkModeToggle')
  .addEventListener('click', function () {
    let isDarkMode = document.body.classList.toggle('dark-mode');

    if (isDarkMode) {
      // Dark mode is active
      let sunIcon = document.createElement('i');
      sunIcon.classList.add('fa-regular', 'fa-sun');

      this.innerHTML = '';
      this.appendChild(sunIcon);
    } else {
      // Dark mode is inactive
      let moonIcon = document.createElement('i');
      moonIcon.classList.add('fa-regular', 'fa-moon');

      this.innerHTML = '';
      this.appendChild(moonIcon);
    }

    // Header logo
    document.getElementById('logoImg').src = isDarkMode
      ? 'images/jhsereno-light.PNG'
      : 'images/jhsereno-dark.png';

    // Services logo
    document.getElementById('envImg').src = isDarkMode
      ? 'images/envelope-dark.png'
      : 'images/envelope-light.png';

    document.getElementById('flagImg').src = isDarkMode
      ? 'images/flag-dark.png'
      : 'images/flag-light.png';

    document.getElementById('tourImg').src = isDarkMode
      ? 'images/tour-dark.png'
      : 'images/tour-light.png';
    document.getElementById('camImg').src = isDarkMode
      ? 'images/photography-dark.png'
      : 'images/photography-light.png';
  });
