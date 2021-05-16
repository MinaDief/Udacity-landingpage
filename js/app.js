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

/* 
I attribute some parts of the code syntax to third party websites
example:
https://stackoverflow.com/
https://www.w3schools.com/
https://developer.mozilla.org/en-US/
and few more..
but most of the logic work is mine, and even the imported code has been tested before using it and updated to match my needs
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
    let i=0;
    for(section of sectionsList)
    {
        let sectionName = section.getAttribute('data-nav');
        let sectionLink = section.getAttribute('id');
        const newSection = document.createElement('li');
        newSection.innerHTML=`<a>${sectionName}</a>`;
        
       //test: ok, this makes an id for each created section to be used to activate the selected section
       const tempIDName= "id__of__"+sectionLink;
        newSection.setAttribute("id",tempIDName);
        navBarMenu.appendChild(newSection);
    }
}

// Add class 'active' to section when near top of viewport
function SectionInViewport(sect) {
    const boundingClient = sect.getBoundingClientRect();
    const sectionStyle = getComputedStyle(sect);  //this puts the css style of the current section into the variable style
    const sectionHeightString = sectionStyle.height.match(/\d+/g); //this line gets the height of the section in pixels "242px" and converts it into number without px "242"
    const sectionHeightNumber = parseInt(sectionHeightString, 10);
    return  boundingClient.top >= 0 && boundingClient.top <sectionHeightNumber ; // check if the section is in the viewport
}


function activateCurrentSection (){
    //loops through all the sections in the sectionsList array
    for(section of sectionsList){
        const sectionId ="#id__of__"+ section.getAttribute('id');
        if(SectionInViewport(section)){
            section.classList.add("your-active-class");
            document.querySelector(sectionId).style.backgroundColor="aqua";
        }
        else { 
         section.classList.remove("your-active-class");
         document.querySelector(sectionId).style.backgroundColor="white";
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
 
id__of__section1.addEventListener('click', function (){
    document.getElementById("section1").scrollIntoView();
});
id__of__section2.addEventListener('click', function (){
    document.getElementById("section2").scrollIntoView();
});
id__of__section3.addEventListener('click', function (){
    document.getElementById("section3").scrollIntoView();
});
id__of__section4.addEventListener('click', function (){
    document.getElementById("section4").scrollIntoView();
});

//document.getElementById(section).scrollIntoView();
/**
 * End Main Functions
 * Begin Events
 * 
*/






// Set sections as active
document.addEventListener('scroll', activateCurrentSection);

