var sections = document.querySelectorAll('.slide');
var currentSection = 0;

function nextSection() {
    sections[currentSection].classList.remove('visible');
    currentSection = (currentSection + 1) % sections.length;
    sections[currentSection].classList.add('visible');
}