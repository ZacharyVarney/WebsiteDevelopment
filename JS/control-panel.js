window.onload = function() {
   if (location.pathname == "/index.html") {
       HomePage();
   }
   else {
       
   }
}

function HomePage() {
     // Getting all the classes
    const spotlightHeader = document.querySelector(".spotlight-header");
    const spotlightText = document.querySelector(".spotlight-text");
    const spotlightButton = document.querySelector(".spotlight-button");
    const wwaHeader = document.querySelector(".wwa-header");
    const wwaText = document.querySelector(".wwa-text");
    const wwdHeader = document.querySelector(".wwd-header");
    const wwdText = document.querySelector(".wwd-text");
    const wwdiHeader = document.querySelector(".wwdi-header");
    const wwdiText = document.querySelector(".wwdi-text");


    // Variables to change
    var spotlight_header = "p00p";
    var spotlight_text = "This is the new thing that you should buy, so give me your money. Test test Test test test test test test test test.";
    var spotlight_button_text = "PRODUCT PAGE";
    var who_we_are_header = "Who we are";
    var who_we_are_text = "We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this.";
    var what_we_do_header = "What we do";
    var what_we_do_text = "We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this.";
    var why_we_do_it_header = "Why we do it";
    var why_we_do_it_text = "We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this. We are this we are this we are this.";

    // Setting the classes to variable values
    spotlightHeader.innerHTML = spotlight_header;
    spotlightText.innerHTML = spotlight_text;
    spotlightButton.innerHTML = spotlight_button_text;
    wwaHeader.innerHTML = who_we_are_header;
    wwaText.innerHTML = who_we_are_text;
    wwdHeader.innerHTML = what_we_do_header;
    wwdText.innerHTML = what_we_do_text;
    wwdiHeader.innerHTML = why_we_do_it_header;
    wwdiText.innerHTML = why_we_do_it_text;
}

function GalleryPage() {
    
}