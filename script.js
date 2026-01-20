// Toggle Icon Navbar for Mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// Scroll Section Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

const video = document.getElementById("myVideo");
video.playbackRate = 0.8;

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Simple Typing Effect
const textElement = document.getElementById("typing-text");
const texts = ["Software Engineer", "Full-Stack Developer", "Java Developer", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait before typing next word
    } else {
        setTimeout(type, 100);
    }
})();// --- ABOUT TABS FUNCTION ---
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Sabhi tabs se active class hatao (underline hatao)
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    // Sabhi contents ko chupao
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    // Jis par click kiya, usme active class add karo
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}