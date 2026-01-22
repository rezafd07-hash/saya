// Animasi Fade In saat scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Inisialisasi awal untuk animasi (biar halus)
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
    });
    // Tampilkan hero section langsung
    document.querySelector('.hero').style.opacity = '1';
    document.querySelector('.hero').style.transform = 'translateY(0)';
});