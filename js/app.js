document.addEventListener("DOMContentLoaded", function () {

    //      main banner

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
        slideWrap.style.left = `-${currentIndex * 100}%`;
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

    //      button click event
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    //       drag event ( mouse + touch )
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

    //      autoplay ( + stop when mose over or slide )
    startAutoSlide();
    slideWrap.addEventListener("mouseenter", stopAutoSlide);
    slideWrap.addEventListener("mouseleave", startAutoSlide);

    updateSlidePosition();
});

document.addEventListener("DOMContentLoaded", function () {

    //      notice banner

    const ntbWrap = document.querySelector(".ntb_slide_wrap");
    const ntbSlides = document.querySelectorAll(".ntb_slide");
    const ntbProgressBar = document.querySelector(".notice_progressbar .progressbar");

    let currentNtbIndex = 0;
    let totalNtbSlides = ntbSlides.length;
    let startNtbX = 0;
    let isNtbDragging = false;
    let ntbAutoSlide;

    function updateSlidePosition() {
        ntbWrap.style.left = `-${currentNtbIndex * 100}%`;
        ntbProgressBar.style.width = `${((currentNtbIndex + 1) / totalNtbSlides) * 100}%`;
    }

    function nextSlide() {
        currentNtbIndex = (currentNtbIndex + 1) % totalNtbSlides;
        updateSlidePosition();
    }

    function prevSlide() {
        currentNtbIndex = (currentNtbIndex - 1 + totalNtbSlides) % totalNtbSlides;
        updateSlidePosition();
    }

    function startAutoSlide() {
        ntbAutoSlide = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(ntbAutoSlide);
    }

    //       drag event ( mouse + touch )
    ntbWrap.addEventListener("mousedown", (e) => {
        isNtbDragging = true;
        startNtbX = e.clientX;
    });

    ntbWrap.addEventListener("mouseup", (e) => {
        isNtbDragging = false;
        let diff = startNtbX - e.clientX;
        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();
    });

    ntbWrap.addEventListener("touchstart", (e) => {
        isNtbDragging = true;
        startNtbX = e.touches[0].clientX;
    });

    ntbWrap.addEventListener("touchend", (e) => {
        isNtbDragging = false;
        let diff = startNtbX - e.changedTouches[0].clientX;
        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();
    });

    //      autoplay ( + stop when mose over or slide )
    startAutoSlide();
    ntbWrap.addEventListener("mouseenter", stopAutoSlide);
    ntbWrap.addEventListener("mouseleave", startAutoSlide);

    updateSlidePosition();






    //      notice more active
    const noticeNews = document.querySelector(".notice_news");
    const newsList = document.querySelector(".news_list");
    const moreBtn = document.querySelector(".notice_news .more_btn");
    const moreWrap = document.querySelector(".more_btn .more_wrap")

    moreBtn.addEventListener("click", function () {
        noticeNews.classList.toggle("active");
        moreBtn.classList.toggle("active")
        moreWrap.classList.toggle("active");
        newsList.classList.toggle("active");
    });

});