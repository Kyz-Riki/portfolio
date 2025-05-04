document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Animasi untuk skill tags
const skillTags = document.querySelectorAll('.soft-skill-tag');
let delay = 0;

function animateSkillTags() {
    skillTags.forEach(tag => {
        const position = tag.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (position < screenPosition) {
            setTimeout(() => {
                tag.style.opacity = "1";
                tag.style.transform = "translateY(0)";
            }, delay);
            delay += 50;
        }
    });
}

// Reset delay and set initial styles
skillTags.forEach(tag => {
    tag.style.opacity = "0";
    tag.style.transform = "translateY(20px)";
    tag.style.transition = "all 0.3s ease";
});

window.addEventListener('scroll', animateSkillTags);
// Trigger once on load
window.addEventListener('load', animateSkillTags);