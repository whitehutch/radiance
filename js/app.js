document.addEventListener("DOMContentLoaded", function () {
    console.log(window.scrollY);

    const noticeWrap = document.querySelector(".notice_wrap");
    const noticeNews = document.querySelector(".notice_news");
    const moreBtn = document.querySelector(".notice_news .more_btn");
    const moreWrap = document.querySelector(".more_btn .more_wrap");
    const listWrap = document.querySelector(".notice_news .list_wrap");
    const noticeList = document.querySelector(".notice_news .list_wrap .notice_list");
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
        noticeList.classList.toggle("active");
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

                noticeList.scrollTop = start - (distance * easedProgress);

                if (progress < 1) {
                    linearTop.style.opacity = "0";
                    linearBottom.style.opacity = "0";
                    requestAnimationFrame(smoothScroll);
                }
            }
            requestAnimationFrame(smoothScroll);
        }
    });

    noticeList.addEventListener("scroll", function () {
        if (noticeList.classList.contains("active")) {
            const tolerance = 1;
            const isAtTop = noticeList.scrollTop === 0;
            const isAtBottom = (noticeList.scrollHeight - noticeList.scrollTop - noticeList.clientHeight) <= tolerance;

            let topOpacity, bottomOpacity;

            if (isAtTop) {
                topOpacity = "0";
                bottomOpacity = "1";
            } else if (isAtBottom) {
                topOpacity = "1";
                bottomOpacity = "0";
            } else {
                topOpacity = "1";
                bottomOpacity = "1";
            }

            linearTop.style.opacity = topOpacity;
            linearBottom.style.opacity = bottomOpacity;
        }
    });

    document.querySelector('.agree_wrap').addEventListener('click', function() {
        document.querySelector('label[for="agree"]').click();
    });

});