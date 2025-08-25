document.addEventListener("DOMContentLoaded", function () {
    console.log(window.scrollY);

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

    document.querySelector('.agree_wrap').addEventListener('click', function() {
        document.querySelector('label[for="agree"]').click();
    });

});