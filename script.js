let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Adjust offset as needed
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Corrected the query selector syntax
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });
    /* ---------------------------------------------------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};