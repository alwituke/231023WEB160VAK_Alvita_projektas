new Splide( '.splide').mount();

new Splide( '.splide', {
  type   : 'loop',
  perPage : 6,
   breakpoints: {
    1600:{perPage:4,},
    1200:{perPage:3,},
    800:{perPage:2,},
    600:{perPage:1,},},
  drag   : 'free',
  focus  : 'center',
  arrows: undefined,
  pagination: false,
  autoScroll: {
         speed: 6,
           },
} ).mount( window.splide.Extensions );






