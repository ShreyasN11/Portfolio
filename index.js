let moon = document.getElementById('moon');
let Car = document.getElementById('Car');
let welcome = document.getElementById('welcome')

window.addEventListener('scroll' , function(){
    let value = window.scrollY;
    Car.style.top = value*0.05 + 'px';
    moon.style.left = value*-0.25 + 'px';
    welcome.style.left = value*2.75 + 'px';

})

AOS.init();

AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});