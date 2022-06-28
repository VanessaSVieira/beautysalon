window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection(inicio)
    activateMenuAtCurrentSection(sobre)
    activateMenuAtCurrentSection(serviços)
    activateMenuAtCurrentSection(depoimento)
    activateMenuAtCurrentSection(contatos)
}

function activateMenuAtCurrentSection(section) {
    //linha alvo
    const targetLine = scrollY + innerHeight / 2

    //verificar se a seção passou da linha
    //quais dados vou precisar?

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    //o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = 
    targetLine >= sectionTop

    //informações dos dados
    //console.log('O topo da seção chegou ou passou da linha?',
    //sectionTopReachOrPassedTargetline)

//verificar se a base está abaixo da linha alvo
//quais dados vou precisar?

//a seção termina onde ?
const sectionEndsAt = sectionTop + sectionHeight 

//O final da seção passou da linha alvo
const sectionEndPassedTargetline = sectionEndsAt <= targetLine

//console.log('O fundo da seção passou da linha?',
//sectionEndPassedTargetline)


//limites da seção
const sectionBoundaries = sectionTopReachOrPassedTargetline &&
!sectionEndPassedTargetline

const sectionId = section.getAttribute('id')
const menuElement = 
document.querySelector(`.menu a[href*=${sectionId}]`)

menuElement.classList.remove('active')
if (sectionBoundaries) {
    menuElement.classList.add('active')
}

}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
        } else {
            navigation.classList.remove('scroll')
        }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
        } else {
        backToTopButton.classList.remove('show')
        }
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, #home img, #home .stats, #services,
#services header, #services .card, #about, #about header, 
#about .content`)