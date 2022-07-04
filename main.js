const buttonMenu = document.getElementById('button-menu');
const closeMenu = document.getElementById('close-menu');

function toggleMenu() {
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('active');
}

function close() {
    const nav = document.getElementById('navigation');
    nav.classList.remove('active');
}

buttonMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', close);


/*const option1 = documente.querySelector('.option1');
const option2 = documente.querySelector('.option2');
const option3 = documente.querySelector('.option3');
const option4 = documente.querySelector('.option4');
const option5 = documente.querySelector('.option5');

const $buttonMenu = document.querySelector('.button-menu');

option1.addEventListener('click', function() {
    a.classList.remove('in');
}) */

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
}).reveal(`#header, #inicio .img1, #sobre, .about, #serviços,
.box1, .box2, .box3, #depoimento, .clientes, #contatos, #footer` ) 
