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

const tokohGroup = document.querySelector('#tokohGroup')

for (let i = 0; i < tokoh.length; i++) {
    const container = document.createElement('div')
    container.classList.add('inline-block', 'm-4', 'cursor-pointer', 'group')
    if (i == 0) {container.classList.add('active')}

    const img = document.createElement('img')
    img.classList.add('w-40', 'h-40', 'object-cover', 'object-center', 'm-4', 'border-4', 'border-primary', 'rounded-full', 'group-hover:-translate-y-6')
    img.src = `/dist/img/${tokoh[i].img}`
    img.alt = `Foto ${tokoh[i].nama}`

    const p = document.createElement('p')
    p.classList.add('text-center', 'text-lg', 'px-4', 'py-2')
    p.innerText = tokoh[i].nama

    container.append(img)
    container.append(p)
    tokohGroup.append(container)
}

const tokohLink = document.querySelectorAll('#tokohGroup div')
const panelBiografi = document.querySelector('#panelBiografi')

for (let i = 0; i < tokohLink.length; i++) {
    tokohLink[i].addEventListener('click', (e) => {
        for (let j = 0; j < tokohLink.length; j++) {
            tokohLink[j].classList.remove('active')
        }
        tokohLink[i].classList.add('active')

        document.querySelector('#tokohPanel img').src = `/dist/img/${tokoh[i].img}`
        document.querySelector('#tokohPanel #nama').innerText = tokoh[i].nama
        document.querySelector('#tokohPanel #lahir').innerText = tokoh[i].lahir
        document.querySelector('#tokohPanel #meninggal').innerText = tokoh[i].meninggal

        document.querySelectorAll('#panelBiografi p').forEach((p) => p.remove());

        for (let j = 0; j < tokoh[i].kisah.length; j++) {
            const p = document.createElement('p')
            p.classList.add('mb-4')
            p.innerText = tokoh[i].kisah[j]
            panelBiografi.append(p)
        }
    })
}

const bgm = document.querySelector('#bgm')
const playBGM = document.querySelector('#playBGM')
const pauseBGM = document.querySelector('#pauseBGM')

playBGM.addEventListener('click', (e) => {
    e.preventDefault()
    
    bgm.play()

    playBGM.classList.remove('block')
    playBGM.classList.add('hidden')
    
    pauseBGM.classList.remove('hidden')
    pauseBGM.classList.add('block')
})

pauseBGM.addEventListener('click', (e) => {
    e.preventDefault()
    
    bgm.pause()
    
    pauseBGM.classList.remove('block')
    pauseBGM.classList.add('hidden')

    playBGM.classList.remove('hidden')
    playBGM.classList.add('block')
})

window.addEventListener('load', () => {
    document.querySelector('#tokohPanel img').src = `/dist/img/${tokoh[0].img}`
    document.querySelector('#tokohPanel #nama').innerText = tokoh[0].nama
    document.querySelector('#tokohPanel #lahir').innerText = tokoh[0].lahir
    document.querySelector('#tokohPanel #meninggal').innerText = tokoh[0].meninggal
    
    for (let j = 0; j < tokoh[0].kisah.length; j++) {
        const p = document.createElement('p')
        p.classList.add('mb-4')
        p.innerText = tokoh[0].kisah[j]
        panelBiografi.append(p)
    }
})
