const nav = document.querySelector('nav')
const btnMenu = document.querySelector('#btnMenu')
const btnTop = document.querySelector('#btnTop')

const accordion = document.querySelectorAll('.accordion')
const accordionClose = document.querySelectorAll('.accordion p')
const accordionPanel = document.querySelectorAll('.accordion-panel')

btnMenu.addEventListener('click', () => {
    if (!btnMenu.classList.contains('change')) {
        nav.style.top = '0%'
    } else {
        nav.style.top = '-100%'
    }

    btnMenu.classList.toggle('change')
})

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
        accordionPanel[i].classList.toggle('active')
        accordionClose[i].classList.toggle('rotate-45')
    })
}

window.onscroll = function () {
    const top = document.querySelector('#top')

    if (window.pageYOffset > top.offsetTop) {
        btnTop.classList.remove('hidden')
        btnTop.classList.add('flex')
    } else {
        btnTop.classList.add('hidden')
        btnTop.classList.remove('flex')
    }
}
