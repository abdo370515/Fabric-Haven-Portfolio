const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector("#navMenu");

toggler.addEventListener('click', function () {
    navMenu.classList.toggle("active")
});

const scroll = document.getElementById("scroll");

scroll.addEventListener('click', () => {
    document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth' });
})
document.addEventListener('DOMContentLoaded', () => {
    let number = 299;
    let liked = false;  // To track if the link has been clicked
    const numberElement = document.getElementById('number');
    const incrementLink = document.getElementById('increment-link');

    incrementLink.addEventListener('click', (event) => {
        event.preventDefault();
        if (!liked) {
            number++;
            numberElement.textContent = number;
            liked = true;  // Set to true after the first click
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('clickable-image');

    image.addEventListener('click', () => {
        image.classList.toggle('clicked');
    });
});
