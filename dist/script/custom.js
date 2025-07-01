 // Mobile menu toggle
 document.getElementById('menu-toggle').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');

    mobileMenu.classList.toggle('-translate-x-full');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Close mobile menu
document.getElementById('close-menu').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');

    mobileMenu.classList.add('-translate-x-full');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        var mobileMenu = document.getElementById('mobile-menu');
        var menuIcon = document.getElementById('menu-icon');
        var closeIcon = document.getElementById('close-icon');

        mobileMenu.classList.add('-translate-x-full');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});



 
 
document.addEventListener('DOMContentLoaded', function () {
  var swiperPlane = new Swiper('.fraction-slide-carousel-plane', {
      loop: false,
      navigation: {
          nextEl: '#slider-button-right-plane',
          prevEl: '#slider-button-left-plane',
      },
      pagination: {
          el: '.fraction-slide-carousel-plane .swiper-pagination',
          type: 'fraction',
      },
      on: {
          init: function () {
              updateNavigationButtons(this);
          },
          slideChange: function () {
              updateNavigationButtons(this);
          },
      },
  });

  var swiperEnemy = new Swiper('.fraction-slide-carousel-enemy', {
      loop: false,
      navigation: {
          nextEl: '#slider-button-right-enemy',
          prevEl: '#slider-button-left-enemy',
      },
      pagination: {
          el: '.fraction-slide-carousel-enemy .swiper-pagination',
          type: 'fraction',
      },
      on: {
          init: function () {
              updateNavigationButtons(this);
          },
          slideChange: function () {
              updateNavigationButtons(this);
          },
      },
  });

  function updateNavigationButtons(swiper) {
      const prevButton = swiper.el.querySelector('.swiper-button-left');
      const nextButton = swiper.el.querySelector('.swiper-button-right');

      if (!prevButton || !nextButton) {
          console.error('Navigation buttons not found');
          return;
      }

      prevButton.classList.toggle('hidden', swiper.isBeginning);
      nextButton.classList.toggle('hidden', swiper.isEnd);
  }
});




 