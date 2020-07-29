/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');
});

/**
 * Define Global Variables
 * 
*/

const sectionElement = document.querySelectorAll('section');
const navBarElement = document.querySelector('#navbar__list');
const navAdd = document.createElement('li');
const yOffset = window.pageYOffset;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav

sectionElement.forEach(section => {
    navBarElement.insertAdjacentHTML('beforeend', `<li><a href="${section.id}">${section.dataset.nav}</a></li>`)
});

const listItem  = document.querySelectorAll('li');

listItem.forEach(item => {
    item.setAttribute('class', 'menu__link')
});


// Scroll to section on link click
const links = document.querySelectorAll('a')
links.forEach(a => {
    a.addEventListener('click', function(noRedirect) {
        noRedirect.preventDefault();
        document.getElementById(a.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})


// Set sections as active
window.addEventListener('scroll', function() {
    let yOffset = window.pageYOffset
    let sectionPos = 0;
    //const sectionPos = sectionElement.offsetTop
    const spacing = 250
     sectionElement.forEach ( section => {
        sectionPos = section.offsetTop
         if ((yOffset + spacing >= sectionPos) && yOffset + spacing <=  sectionPos + section.offsetHeight) {
             section.classList.add('your-active-class')
         } else {
             section.classList.remove('your-active-class')
         }
        })
        // hide or show top button
        if(yOffset >= 200){
            topbutton.style.display = 'inline-block';
        } else {
            topbutton.style.display = 'none'
        }
    
    }
)

// Scroll to top
const topbutton = document.querySelector('#top')
topbutton.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'})
})
