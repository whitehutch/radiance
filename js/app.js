document.addEventListener("DOMContentLoaded", function () {
    console.log(window.scrollY);

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

    function updateMainSlidePosition() {
        slideWrap.style.left = `-${currentIndex * 100}%`;
        progressBar.style.width = `${((currentIndex + 1) / totalSlides) * 100}%`;
    }

    function nextMainSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateMainSlidePosition();
    }

    function prevMainSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateMainSlidePosition();
    }

    function startMainAutoSlide() {
        autoSlide = setInterval(nextMainSlide, 5000);
    }

    function stopMainAutoSlide() {
        clearInterval(autoSlide);
    }

    // 버튼 클릭 이벤트
    nextBtn.addEventListener("click", nextMainSlide);
    prevBtn.addEventListener("click", prevMainSlide);

    // 드래그 이벤트 (마우스 + 터치)
    slideWrap.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        stopMainAutoSlide(); // 드래그 시작 시 자동 슬라이드 중지
    });

    slideWrap.addEventListener("mouseup", (e) => {
        if (!isDragging) return; // 드래그 중이 아니면 리턴
        isDragging = false;
        let diff = startX - e.clientX;
        if (diff > 50) nextMainSlide();
        else if (diff < -50) prevMainSlide();
        startMainAutoSlide(); // 드래그 종료 시 자동 슬라이드 재시작
    });

    slideWrap.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        stopMainAutoSlide(); // 터치 드래그 시작 시 자동 슬라이드 중지
    });

    slideWrap.addEventListener("touchend", (e) => {
        if (!isDragging) return; // 드래그 중이 아니면 리턴
        isDragging = false;
        let diff = startX - e.changedTouches[0].clientX;
        if (diff > 50) nextMainSlide();
        else if (diff < -50) prevMainSlide();
        startMainAutoSlide(); // 터치 드래그 종료 시 자동 슬라이드 재시작
    });

    // 자동 재생 (마우스 오버 또는 슬라이드 시 중지)
    startMainAutoSlide();
    slideWrap.addEventListener("mouseenter", stopMainAutoSlide);
    slideWrap.addEventListener("mouseleave", startMainAutoSlide);

    updateMainSlidePosition();

    // ================================================================
    // 공지사항 배너 (두 번째 슬라이드 시스템: ntb_slide_wrap)
    // ================================================================
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

    // ntb 슬라이드 위치 업데이트 함수 (이름 변경)
    function updateNtbSlidePosition() {
        ntbWrap.style.left = `-${currentNtbIndex * 100}%`;
        ntbBgWrap.style.left = `-${currentNtbIndex * 100}%`;
        ntbProgressBar.style.width = `${((currentNtbIndex + 1) / totalNtbSlides) * 100}%`;
    }

    // ntb 다음 슬라이드 함수 (이름 변경)
    function nextNtbSlide() {
        currentNtbIndex = (currentNtbIndex + 1) % totalNtbSlides;
        updateNtbSlidePosition();
    }

    // ntb 이전 슬라이드 함수 (이름 변경)
    function prevNtbSlide() {
        currentNtbIndex = (currentNtbIndex - 1 + totalNtbSlides) % totalNtbSlides;
        updateNtbSlidePosition();
    }

    // ntb 자동 슬라이드 시작 함수 (이름 변경)
    function startNtbAutoSlide() {
        ntbAutoSlide = setInterval(nextNtbSlide, 5000);
    }

    // ntb 자동 슬라이드 중지 함수 (이름 변경)
    function stopNtbAutoSlide() {
        clearInterval(ntbAutoSlide);
    }

    // 마우스 드래그
    ntbWrap.addEventListener("mousedown", (e) => {
        isNtbDragging = true;
        startNtbX = e.clientX;
        stopNtbAutoSlide(); // 드래그 시작 시 자동 슬라이드 중지
    });

    ntbWrap.addEventListener("mouseup", (e) => {
        if (!isNtbDragging) return;
        isNtbDragging = false;
        const diff = startNtbX - e.clientX;
        if (diff > 50) nextNtbSlide();
        else if (diff < -50) prevNtbSlide();
        startNtbAutoSlide(); // 드래그 종료 시 자동 슬라이드 재시작
    });

    // 터치 드래그 이벤트
    ntbWrap.addEventListener("touchstart", (e) => {
        isNtbDragging = true;
        startNtbX = e.touches[0].clientX;
        stopNtbAutoSlide(); // 터치 드래그 시작 시 자동 슬라이드 중지
    });

    ntbWrap.addEventListener("touchend", (e) => {
        if (!isNtbDragging) return;
        isNtbDragging = false;
        const diff = startNtbX - e.changedTouches[0].clientX;
        if (diff > 50) nextNtbSlide();
        else if (diff < -50) prevNtbSlide();
        startNtbAutoSlide(); // 터치 드래그 종료 시 자동 슬라이드 재시작
    });

    // 자동 슬라이드 재생 및 일시정지
    startNtbAutoSlide();
    ntbWrap.addEventListener("mouseenter", stopNtbAutoSlide);
    ntbWrap.addEventListener("mouseleave", startNtbAutoSlide);

    // 초기 위치 설정
    updateNtbSlidePosition();

    // ================================================================
    // 공지사항 더보기 (notice_more active)
    // ================================================================
    const noticeWrap = document.querySelector(".notice_wrap");
    const noticeNews = document.querySelector(".notice_news");
    const moreBtn = document.querySelector(".notice_news .more_btn");
    const moreWrap = document.querySelector(".more_btn .more_wrap");
    const listWrap = document.querySelector(".notice_news .list_wrap");
    const linearTop = document.querySelector(".news_list .linear_top");
    const linearBottom = document.querySelector(".news_list .linear_bottom");
    const newsOutline = document.querySelector(".news_outline");

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
});