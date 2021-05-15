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
console.log("JS is working properly-ID 0001");


/**
 * Define Global Variables
 * 
*/

const sectionsList = document.querySelectorAll("section");
const navBarMenu= document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavBarSections(){
    for(section of sectionsList)
    {
        let sectionName = section.getAttribute('data-nav');
        let sectionLink = section.getAttribute('id');
        const newSection = document.createElement('li');
        newSection.innerHTML=`<a href='#${sectionLink}'>${sectionName}</a>`;
        navBarMenu.appendChild(newSection);
    }
}

// Add class 'active' to section when near top of viewport

function SectionInViewport(sect) {
    const rect = sect.getBoundingClientRect();
    return  rect.top >= 0;
}


function activateCurrentSection (){
    for(section of sectionsList){
        if(SectionInViewport(section))
        section.classList.add("your-active-class");
        else { 
         section.classList.remove("your-active-class");
        }
    }

}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// Build menu 
createNavBarSections();




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/




// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', activateCurrentSection);

