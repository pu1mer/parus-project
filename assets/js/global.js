document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 896) {
        const navBtn = document.querySelector('.nav__menu-wrapper')
        const navLinks = document.querySelectorAll('.nav__link')
        const nav = document.querySelector('.nav')
        const header = document.querySelector('.header')

        navBtn.addEventListener('click', () => {
            if (nav.classList.contains('menu-open')) {
                header.classList.remove('header-open')
                nav.classList.remove('menu-open')
                navLinks.forEach(el => {
                    el.classList.remove('link-open')
                })
            } else {
                header.classList.add('header-open')
                nav.classList.add('menu-open')
                navLinks.forEach(el => {
                    el.classList.add('link-open')
                })
            }
        })
    }
    
})
