// let Splide = document.querySelector (".auto-scroll");

  
  function logos() {
    let splide = document.querySelector (".splide");
    for ( let i = 0, splideLength = splide.length; i < splideLength; i++ ) {
        new Splides(splide[ i ], {
            perPage: 6,
            autoScroll: {
                autoStart: true,
                speed: 0.8,
            },
        } ).mount( window.splide.Extensions);
    }
}
logos();

// console.log(logos);



// import { Splide } from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// new Splide( '.splide', {
//     autoScroll: {
//       speed: 2,
//     }, 
//   } ).mount( window.splide.Extensions );

//   AutoScroll();


