const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const imageCount = slides.length;
let index = 0;


function slideImage(direction) {
    if (direction === 'next') {
        index = (index + 1) % imageCount;
    } else {
        index = (index - 1 + imageCount) % imageCount;
    }


    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}


function autoSlide() {
    slideImage('next');
}


// Set an interval for automatic sliding
const interval = setInterval(autoSlide, 3000); // Change the time (in milliseconds) as desired


// Stop the automatic sliding on user interaction (e.g., hover)
slider.addEventListener('mouseenter', () => {
    clearInterval(interval);
});


// Resume automatic sliding when the user is not interacting
slider.addEventListener('mouseleave', () => {
    interval = setInterval(autoSlide, 3000); // Change the time (in milliseconds) as desired
});


// Handle previous and next button clicks
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


prevBtn.addEventListener('click', () => {
    slideImage('prev');
});


nextBtn.addEventListener('click', () => {
    slideImage('next');
});