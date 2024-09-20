document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: targetSection.offsetTop - 60, 
            behavior: 'smooth'
        });
    });
});



document.querySelectorAll('.btn-float a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: targetSection.offsetTop - 60, 
            behavior: 'smooth'
        });
    });
});