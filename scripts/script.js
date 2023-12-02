
new Splide( '.splide').mount();

new Splide( '.splide', {
  type   : 'loop',
  perPage : 6,
  drag   : 'free',
  focus  : 'center',
  autoScroll: {
         speed: 10,
           },
} ).mount( window.splide.Extensions );