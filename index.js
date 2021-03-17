// TOGGLE open/close menu

const nav = document.getElementById('menu-open'),
    nav_mobile = document.getElementById('nav-mobile'),
    menu_close = document.getElementById('menu-close'),
    nav_desktop = document.getElementById('nav-desktop'); 

nav.addEventListener('click', () => {
    nav_mobile.style.display = 'flex';
    nav_desktop.style.display = 'none'
});

menu_close.addEventListener('click', () => {
    nav_mobile.style.display = 'none';
    nav_desktop.style.display = 'flex';
});

//Show slides

var slideIndex = 1;
showSlides(slideIndex);

function incrementSlides(i) {
    
    showSlides(slideIndex += i);
}


function showSlides(index) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (index > slides.length) {
        slideIndex = 1
    }

    if (index < 1) {
        slideIndex = slides.length 
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "flex";
   
}