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

    const ntbWrap = document.querySelector(".ntb_slide_wrap");
    const ntbSlides = document.querySelectorAll(".ntb_slide");
    const ntbProgressBar = document.querySelector(".notice_progressbar .progressbar");

    const ntbBgWrap = document.querySelector(".ntb_bg_wrap");
    const ntbBgSlides = document.querySelectorAll(".ntb_slide_bg");

    let currentNtbIndex = 0;
    const totalNtbSlides = ntbSlides.length;
    let startNtbX = 0;
    let isNtbDragging = false;
    let ntbAutoSlide;

    ntbBgWrap.style.width = `${totalNtbSlides * 100}%`;
    ntbBgSlides.forEach(slide => {
        slide.style.width = `${100 / totalNtbSlides}%`;
    });

    function updateSlidePosition() {
        ntbWrap.style.left = `-${currentNtbIndex * 100}%`;
        ntbBgWrap.style.left = `-${currentNtbIndex * 100}%`;
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

    //      mouse drag
    ntbWrap.addEventListener("mousedown", (e) => {
        isNtbDragging = true;
        startNtbX = e.clientX;
    });

    ntbWrap.addEventListener("mouseup", (e) => {
        if (!isNtbDragging) return;
        isNtbDragging = false;
        const diff = startNtbX - e.clientX;
        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();
    });

    //      drag event
    ntbWrap.addEventListener("touchstart", (e) => {
        isNtbDragging = true;
        startNtbX = e.touches[0].clientX;
    });

    ntbWrap.addEventListener("touchend", (e) => {
        if (!isNtbDragging) return;
        isNtbDragging = false;
        const diff = startNtbX - e.changedTouches[0].clientX;
        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();
    });

    //      auto slide play & pause
    startAutoSlide();
    ntbWrap.addEventListener("mouseenter", stopAutoSlide);
    ntbWrap.addEventListener("mouseleave", startAutoSlide);

    //      reset
    updateSlidePosition();


    //      notice more active
    const noticeWrap = document.querySelector(".notice_wrap")
    const noticeNews = document.querySelector(".notice_news");
    const moreBtn = document.querySelector(".notice_news .more_btn");
    const moreWrap = document.querySelector(".more_btn .more_wrap")
    const listWrap = document.querySelector(".notice_news .list_wrap");
    const linearTop = document.querySelector(".news_list .linear_top");
    const linearBottom = document.querySelector(".news_list .linear_bottom");
    const newsOutline = document.querySelector(".news_outline")

    moreBtn.addEventListener("click", function () {

        const isActive = noticeNews.classList.contains("active");

        noticeWrap.classList.toggle("active");
        noticeNews.classList.toggle("active");
        moreBtn.classList.toggle("active");
        moreWrap.classList.toggle("active");
        listWrap.classList.toggle("active");
        linearBottom.classList.toggle("active");
        newsOutline.classList.toggle("active");

        if (!isActive) {
            linearBottom.style.opacity = "1";
        }

        if (isActive) {
            let start = listWrap.scrollTop;
            let distance = start;
            let duration = 500;
            let startTime = performance.now();

            function easeInOut(t) {
                return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            }

            function smoothScroll(currentTime) {
                let elapsedTime = currentTime - startTime;
                let progress = Math.min(elapsedTime / duration, 1);

                let easedProgress = easeInOut(progress);

                listWrap.scrollTop = start - (distance * easedProgress);

                if (progress < 1) {
                    linearTop.style.opacity = "0";
                    linearBottom.style.opacity = "0";
                    requestAnimationFrame(smoothScroll);
                }
            }

            requestAnimationFrame(smoothScroll);
        }
    });

    listWrap.addEventListener("scroll", function () {
        if (listWrap.classList.contains("active")) {
            const isAtTop = listWrap.scrollTop === 0;
            const isAtBottom = listWrap.scrollHeight - listWrap.scrollTop === listWrap.clientHeight;

            if (isAtTop) {
                linearTop.style.opacity = "0";
                linearBottom.style.opacity = "1";
            } else if (isAtBottom) {
                linearTop.style.opacity = "1";
                linearBottom.style.opacity = "0";
            } else {
                linearTop.style.opacity = "1";
                linearBottom.style.opacity = "1";
            }
        }
    });


    //    menu tab

    const menuLists = document.querySelectorAll(".menu_tab li");
    const menuBtn = document.querySelector(".menu_button");

    function updateButtonStyle() {

        menuLists.forEach((menuItem, index) => {
            if (menuItem.classList.contains("on")) {

                menuItem.addEventListener("click", () => {
                    menuLists.forEach(item => item.classList.remove("on"));

                    menuItem.classList.add("on");

                });

                switch (index) {
                    case 0:
                        menuBtn.style.left="6px";
                        menuBtn.style.width="108px";
                        break;
                    case 1:
                        menuBtn.style.left="114px";
                        menuBtn.style.width="136px";
                        break;
                    case 2:
                        menuBtn.style.left="251px";
                        menuBtn.style.width="74px";
                        break;
                }
            }

        });



    }

    updateButtonStyle();

    menuLists.forEach((menuItem) => {
        menuItem.addEventListener("click", () => {
            menuLists.forEach(item => item.classList.remove("on"));
            menuItem.classList.add("on");
            updateButtonStyle();
        });
    });

});