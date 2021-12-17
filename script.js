const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", function() {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle')
    });   
}

navSlide();

// const sec3 = document.getElementById("section--3");
const loader = document.getElementById("loader");


window.addEventListener("load", function(e) {
    // sec3.style.opacity = "1";
    // sec3.style.transform = "translateY(0)";
    loader.style.display = "flex";
    loader.style.opacity = "1";
    setTimeout(() => {loader.style.opacity = "0";}, 1500);
    setTimeout(() => {loader.style.display = "none";}, 2000);
});   


const home = document.getElementById("home");
const us = document.getElementById("us");
const programs = document.getElementById("programs");
const team = document.getElementById("team");
const contact = document.getElementById("contact");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
const slide5 = document.getElementById("slide5");

home.addEventListener("click", (e)=> {
  slide1.scrollIntoView({
    behavior: 'smooth'
  });
});

us.addEventListener("click", (e)=> {
  slide2.scrollIntoView({
    behavior: 'smooth'
  });
});

programs.addEventListener("click", (e)=> {
  slide3.scrollIntoView({
    behavior: 'smooth'
  });
});

team.addEventListener("click", (e)=> {
  slide4.scrollIntoView({
    behavior: 'smooth'
  });
});

contact.addEventListener("click", (e)=> {
  slide5.scrollIntoView({
    behavior: 'smooth'
  });
});


//Reveal Sections 
const allSections = document.querySelectorAll('.slide');

const revealSection = function(entries, observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})