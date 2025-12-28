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

document.addEventListener('DOMContentLoaded', () => {
    const mapRoot = document.getElementById('map');
    if (!mapRoot) return;

    // body를 포커스 받을 수 있게 만들어서, 지도 포커스를 여기로 "빼는" 용도
    if (!document.body.hasAttribute('tabindex')) {
        document.body.setAttribute('tabindex', '-1');
    }

    const forceDefocusIfInsideMap = () => {
        const ae = document.activeElement;
        if (ae && mapRoot.contains(ae)) {
            // 지도 내부 요소에 포커스가 잡히면 즉시 해제하고 body로 이동
            ae.blur?.();
            document.body.focus({ preventScroll: true });
        }
    };

    // 1) 포커스가 지도 안으로 들어오는 순간 즉시 빼기 (가장 중요)
    document.addEventListener(
        'focusin',
        (e) => {
            if (mapRoot.contains(e.target)) {
                // 구글맵이 focusin 직후 다시 포커스를 넣는 경우가 있어 RAF로 한 번 더
                e.target.blur?.();
                requestAnimationFrame(forceDefocusIfInsideMap);
            }
        },
        true
    );

    // 2) 구글맵이 만드는 "tabindex=0" 요소를 -1로 계속 바꿔치기
    const stripFocusable = () => {
        // 실험토끼가 보여준 그 요소(aria-label="지도")와, 새로 생기는 tabindex=0 전부 처리
        mapRoot.querySelectorAll('[tabindex="0"]').forEach((el) => {
            el.setAttribute('tabindex', '-1');
            // inline로도 한 번 더(구글맵 UI가 outline/box-shadow를 주는 경우 대비)
            el.style.setProperty('outline', 'none', 'important');
            el.style.setProperty('box-shadow', 'none', 'important');
        });
    };

    stripFocusable();
    const mo = new MutationObserver(() => {
        stripFocusable();
        // DOM 바뀌면서 다시 포커스 잡는 경우가 있어 한번 더 빼기
        requestAnimationFrame(forceDefocusIfInsideMap);
    });
    mo.observe(mapRoot, { childList: true, subtree: true });

    // 3) 포인터 조작 시작/휠 시도 때도 포커스를 빼버리기 (드래그/줌 중 재포커스 방지)
    mapRoot.addEventListener('pointerdown', () => {
        requestAnimationFrame(forceDefocusIfInsideMap);
    }, true);

    mapRoot.addEventListener('wheel', () => {
        requestAnimationFrame(forceDefocusIfInsideMap);
    }, { capture: true, passive: true });


    const guide = document.querySelector('#store .map_guide');
    if (!guide) return;

    const setFade = (on) => guide.classList.toggle('is-fade', on);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Control' || e.metaKey) setFade(true);
    });

    window.addEventListener('keyup', (e) => {
        // Ctrl을 떼거나, (맥) 메타 키가 풀리면 다시 표시
        if (e.key === 'Control' || (!e.metaKey && !e.ctrlKey)) setFade(false);
    });

    window.addEventListener('blur', () => setFade(false));

});
