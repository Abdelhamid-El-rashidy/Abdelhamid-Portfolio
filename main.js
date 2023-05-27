
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      //index of the the current string being typedout
      this.wordIndex = 0;
      //this.wait must be a base 10 interger
      this.wait = parseInt(wait, 10);
      //method type()
      this.type();
      // Boolean if the word is currently deleting
      this.isDeleting = false;
  }

  
  type() {
      //current index of words
      const current = this.wordIndex % this.words.length;
      //get full text of current word
      const fullTxt = this.words[current];

      // check if deleting
      if (this.isDeleting){
      //remove character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      //add a charaacter
      this.txt = fullTxt.substring(0, this.txt.length + 1);
  }            

  


      // insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      //type speed for when it is typing, deleting and pausing after deletion

      let typeSpeed = 300;

      //select pencil icon for writting animation
      const typingElement = document.querySelector('.fas');

      if (this.isDeleting){
          typeSpeed /= 4;        
      }

      if(this.isDeleting){
          typingElement.className = "fas fa-pencil-alt erasing-animation";
      }else{
          typingElement.className = "fas fa-pencil-alt writing-animation";
      }

      // if word is complete
      if(!this.isDeleting && this.txt === fullTxt){
          // make pause at end
          typeSpeed = this.wait;
          //set delete to true
          this.isDeleting = true;
          //will stop the pencil animation after word completion
          typingElement.className = "fas fa-pencil-alt";


      } else if (this.isDeleting && this.txt === ''){
          this.isDeleting = false;
          //move to the next word in the HTML property
          this.wordIndex++;
          // pause time before the word start typing
          typeSpeed = 1000;

      }

      setTimeout(() => this.type(), typeSpeed)
  }
}


//Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
const txtElement = document.querySelector('.txt-type');
// const words = JSON.parse(txtElement.getAttribute('data-words'));
const words = ["front-end developer", "passionate entrepreneur", "High school student"];


// const wait = txtElement.getAttribute('data-wait');
const wait = 2500;

new TypeWriter(txtElement, words, wait);
}

// end
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});
function myFunction(x) {
    if (x.matches) { // If media query matches
        ScrollReveal().reveal('.navbar', {delay: 150, origin: 'top'});
        ScrollReveal().reveal('.hero-section .hero-content h1', {delay: 200, origin: 'top'});
        ScrollReveal().reveal('.footer-content .down-below', {delay: 100, origin: 'bottom'});
        ScrollReveal().reveal('.footer-content .links, .footer-content .to-top, .footer-content p', {delay: 150, origin: 'bottom'});
        ScrollReveal().reveal('.projects-container .project-card .project-description', {delay: 100, origin: 'left'});
        ScrollReveal().reveal('.projects-container .project-card .project-img', {delay: 100, origin: 'right'});
        ScrollReveal().reveal('.skills__list .skills__item', {delay: 100, origin: 'bottom'});
        
        
        
    } else {
        ScrollReveal().reveal('.hero-section .hero-content h1', {delay: 200, origin: 'left'});
        ScrollReveal().reveal('.hero-section .hero-img', {delay: 300, origin: 'right'});
        ScrollReveal().reveal('.hero-section .hero-content .links .github', {delay: 250, origin: 'bottom'});
        ScrollReveal().reveal('.hero-section .hero-content h2', {delay: 250, origin: 'left'});
        ScrollReveal().reveal('.hero-section .hero-content .links .codeforces', {delay: 350, origin: 'bottom'});
        ScrollReveal().reveal('.hero-section .hero-content .links .Upwork', {delay: 450, origin: 'bottom'});
        ScrollReveal().reveal('.hero-section .hero-content .links .linkedin', {delay: 550, origin: 'bottom'});

        // 
        ScrollReveal().reveal('.footer-content .down-below', {delay: 100, origin: 'bottom'});
        ScrollReveal().reveal('.footer-content .links, .footer-content .to-top, .footer-content p', {delay: 150, origin: 'bottom'});
        // 
        ScrollReveal().reveal('.projects-container .project-card .project-description', {delay: 100, origin: 'left'});
        ScrollReveal().reveal('.projects-container .project-card .project-img', {delay: 100, origin: 'right'});
        ScrollReveal().reveal('.skills__list .skills__item', {delay: 100, origin: 'bottom'});
    }
  }
  
  var x = window.matchMedia("(max-width: 750px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

// Scroll reveal animation


// Target Element
// ScrollReveal().reveal('.nav-bar   .nav-link', {delay: 350, origin: 'top'});
// ScrollReveal().reveal('.nav-bar  a', {delay: 450, origin: 'top'});
// ScrollReveal().reveal('.nav-bar  a', {delay: 550, origin: 'top'});
// ScrollReveal().reveal('.nav-bar  a', {delay: 650, origin: 'left'});


// preloader screen
// var loader = document.getElementById('preloader');

// window.addEventListener("load", function() {
//     loader.style.transitionDelay = "5s";
//     loader.style.o = "none";
// })
window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    const navbar = document.querySelector('.nav-bar');
    preload.classList.add('preload-finish');
    navbar.style.display = 'flex';
    
    
});

// hamburger menu
$('document').ready(function() {

    $('.burger').click(function() {
        $('.nav-menu').toggleClass("open");
        $('.menu-list').toggleClass("list-open");
    });

});
$('document').ready(function() {

    $('.burger-link').click(function() {
        $('.nav-menu').toggleClass("open");
        $('.menu-list').toggleClass("list-open");
    });

});
