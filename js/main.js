$(document).ready(function () {
   $('.owl-carousel').owlCarousel({
      margin: 15,
      nav: true,
      navClass: ['slider-nav-left', 'slider-nav-right'],
      responsive: {
         0: {
            items: 1
         },
         577: {
            items: 2
         },
         830: {
            items: 3
         },
         1250: {
            items: 4
         },
      }
   });
});