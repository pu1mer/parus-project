import Swiper from 'swiper';
import {Autoplay} from "swiper/modules";


const swiper = new Swiper('.swiper', {
    modules: [Autoplay],
    loop: true,
    autoplay: {
        delay: 10000,
    },
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
