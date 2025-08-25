document.addEventListener('DOMContentLoaded', function() {

    const bgList = [
        "./images/bg_01.png",
        "./images/bg_02.png",
        "./images/bg_03.png",
    ];

    const bannerSlides = document.querySelectorAll(".main_banner .swiper-slide.banner_slide");
    bannerSlides.forEach((slide, idx) => {
        const url = bgList[idx % bgList.length];
        slide.style.backgroundImage =
            `linear-gradient( to top, rgba( 0 , 0 , 0 , 0.7 ), rgba( 0 , 0 , 0 , 0 ) 60% ), url("${url}")`;
        slide.style.backgroundSize = "cover";
        slide.style.backgroundPosition = "center center";
    });

    const ntBgList = [
        "./images/ntb_01.png",
        "./images/ntb_02.png",
        "./images/ntb_03.png",
    ];

    const ntbBannerSlides = document.querySelectorAll(".ntb_bg .swiper-slide.ntb_bg_item");
    ntbBannerSlides.forEach((slide, idx) => {
        const url = ntBgList[idx % ntBgList.length];
        slide.style.backgroundImage =
            `linear-gradient( to top, rgba( 19, 19, 19, 1 ) 0%, rgba( 19, 19, 19, 0.85 ) 21%, rgba( 19, 19, 19, 0 ) 41% ), url("${url}")`;
        slide.style.backgroundSize = "cover";
        slide.style.backgroundPosition = "center center";
    });

    function setNoticeOpacity() {
        noticeBanner.slides.forEach((slide) => {
            slide.style.opacity = 0;
        });
        noticeBanner.slides[noticeBanner.activeIndex].style.opacity = 1;
    }
    setNoticeOpacity();

    noticeBanner.on('slideChangeTransitionStart', function () {
        setNoticeOpacity();
    });

});