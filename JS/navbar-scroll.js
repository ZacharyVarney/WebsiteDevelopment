const nav = document.querySelector('.navbar');
const navButtons = document.querySelector('.nav-button-container');

window.addEventListener("scroll", function(event){
    var scrolling = this.scrollY;

    if (scrolling > 0) {
        nav.style.setProperty('background-color', 'rgba(47, 47, 47, 1)');
    }
    else {
        nav.style.setProperty('background-color', 'rgba(27, 27, 27, 0)');
    }
});