document.addEventListener("DOMContentLoaded", function () {
    const slideWrap = document.querySelector(".slide_wrap");
    const slides = document.querySelectorAll(".banner_slide");
    const prevBtn = document.querySelector(".banner_nav .left");
    const nextBtn = document.querySelector(".banner_nav .right");
    const progressBar = document.querySelector(".progressbar");

    let currentIndex = 0;
    let totalSlides = slides.length;
    let startX = 0;
    let isDragging = false;
    let autoSlide;

    function updateSlidePosition() {
        slideWrap.style.transform = `translateX(-${currentIndex * 100}%)`;
        progressBar.style.width = `${((currentIndex + 1) / totalSlides) * 100}%`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    //   button click event
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    //   drag event ( mouse + touch )
    slideWrap.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
    });

    slideWrap.addEventListener("mouseup", (e) => {
        isDragging = false;
        let diff = startX - e.clientX;
        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();
    });

    slideWrap.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
    });

    slideWrap.addEventListener("touchend", (e) => {
        isDragging = false;
        let diff = startX - e.changedTouches[0].clientX;
        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();
    });

    //   autoplay ( + stop when mose over or slide )
    startAutoSlide();
    slideWrap.addEventListener("mouseenter", stopAutoSlide);
    slideWrap.addEventListener("mouseleave", startAutoSlide);

    updateSlidePosition();
});
