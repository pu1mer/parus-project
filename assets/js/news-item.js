import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
    loop: true,
    breakpoints: {
    // desktop >= 991
    991: {
    slidesPerView: 'auto',
    freeMode: false
},
    // mobile + tablet - 320-990
    320: {
    slidesPerView: 'auto',
    freeMode: true
},
}
})
