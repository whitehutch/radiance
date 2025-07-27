document.addEventListener("DOMContentLoaded", function () {

    //    menu tab

    const menuLists = document.querySelectorAll(".drink_tab .menu_tab li");
    const menuBtn = document.querySelector(".drink_tab .menu_button");

    const bkLists = document.querySelectorAll(".bakery_tab .menu_tab > li");
    const bakeryBtn = document.querySelector(".bakery_tab .menu_button");

    // updateButtonStyle 함수는 'on' 클래스를 가진 탭에 따라 버튼 스타일만 업데이트합니다.
    function updateButtonStyle() {
        menuLists.forEach((menuItem, index) => {
            if (menuItem.classList.contains("on")) {
                switch (index) {
                    case 0:
                        menuBtn.style.left = "6px";
                        menuBtn.style.width = "106px";
                        break;
                    case 1:
                        menuBtn.style.left = "112px";
                        menuBtn.style.width = "129px";
                        break;
                    case 2:
                        menuBtn.style.left = "241px";
                        menuBtn.style.width = "75px";
                        break;
                }
            }
        });

        bkLists.forEach((bakeryItem, index) => {
            if (bakeryItem.classList.contains("on")) {
                switch (index) {
                    case 0:
                        bakeryBtn.style.left = "6px";
                        bakeryBtn.style.width = "106px";
                        break;
                    case 1:
                        bakeryBtn.style.left = "112px";
                        bakeryBtn.style.width = "97px";
                        break;
                    case 2:
                        bakeryBtn.style.left = "209px";
                        bakeryBtn.style.width = "116px";
                        break;
                    case 3:
                        bakeryBtn.style.left = "325px";
                        bakeryBtn.style.width = "87px";
                        break;
                }
            }
        });
    }

    // 초기 로드 시 버튼 스타일 업데이트
    updateButtonStyle();

    // menuLists (음료 탭)에 대한 클릭 이벤트 리스너
    menuLists.forEach((menuItem) => {
        menuItem.addEventListener("click", () => {
            menuLists.forEach(item => item.classList.remove("on")); // 해당 탭 그룹 내에서만 'on' 제거
            menuItem.classList.add("on");
            updateButtonStyle(); // 클릭 시 버튼 스타일 업데이트 호출
            // 음료 콘텐츠 목록 활성화 로직 추가 (bakeryTabs와 간섭 방지)
            const tabClass = menuItem.classList[0].replace("_tab", ""); // Assuming _tab is part of the class name
            drinkLists.forEach((list) => {
                if (list.classList.contains(tabClass)) {
                    list.classList.add("active");
                } else {
                    list.classList.remove("active");
                }
            });
        });
    });

    const coffeeItems = document.querySelectorAll('.coffee_item');

    coffeeItems.forEach(item => {
        const hoverEl = item.querySelector('.menu_hover');

        item.addEventListener('mouseenter', () => {
            hoverEl.style.opacity = '1';
        });

        item.addEventListener('mouseleave', () => {
            hoverEl.style.opacity = '0';
        });
    });

    // swiper-slide hover 효과
    const swiperSlides = document.querySelectorAll('.swiper-slide');

    swiperSlides.forEach(slide => {
        // bakery_tt 안의 요소들
        const bakeryTtKo = slide.querySelector('.bakery_tt .bakery_ko');
        const bakeryTtEn = slide.querySelector('.bakery_tt .bakery_en');

        // bakery_sb 안의 요소들 (추가된 부분)
        const bakerySbKo = slide.querySelector('.bakery_sb .bakery_ko');
        const bakerySbEn = slide.querySelector('.bakery_sb .bakery_en');

        slide.addEventListener('mouseenter', () => {
            // bakery_tt 요소들
            if (bakeryTtKo) {
                bakeryTtKo.style.opacity = '1';
            }
            if (bakeryTtEn) {
                bakeryTtEn.style.opacity = '0';
            }
            // bakery_sb 요소들
            if (bakerySbKo) {
                bakerySbKo.style.opacity = '1';
            }
            if (bakerySbEn) {
                bakerySbEn.style.opacity = '0';
            }
        });

        slide.addEventListener('mouseleave', () => {
            // bakery_tt 요소들
            if (bakeryTtKo) {
                bakeryTtKo.style.opacity = '0';
            }
            if (bakeryTtEn) {
                bakeryTtEn.style.opacity = '1';
            }
            // bakery_sb 요소들
            if (bakerySbKo) {
                bakerySbKo.style.opacity = '0';
            }
            if (bakerySbEn) {
                bakerySbEn.style.opacity = '1';
            }
        });
    });

    window.addEventListener('scroll', () => {
        const section = document.querySelector('#drink_list');
        const target = document.querySelector('#drink_list .best_scroll');
        const scrollY = window.scrollY;

        if (scrollY >= 7687) {
            target.classList.add('active');
        } else {
            target.classList.remove('active');
        }
    });

    // drinkLists는 menuLists와 연동됩니다. (변수 정의는 유지)
    const drinkLists = document.querySelectorAll(".drink_list");

    // bakeryTabs (베이커리 탭)에 대한 클릭 이벤트 리스너
    const bakeryTabs = document.querySelectorAll(".bakery_tab>.menu_tab>li");
    const bakeryLists = document.querySelectorAll(".bakery_list"); // 실제 베이커리 콘텐츠 목록

    bakeryTabs.forEach((bakeryTab) => {
        bakeryTab.addEventListener("click", () => {
            bakeryTabs.forEach((bt) => bt.classList.remove("on")); // 해당 탭 그룹 내에서만 'on' 제거
            bakeryTab.classList.add("on");
            updateButtonStyle(); // 클릭 시 버튼 스타일 업데이트 호출

            const bakeryTabClass = bakeryTab.classList[0].replace("_bakeryTab", "");

            bakeryLists.forEach((bakeryList) => {
                if (bakeryList.classList.contains(bakeryTabClass)) {
                    bakeryList.classList.add("active");
                } else {
                    bakeryList.classList.remove("active");
                }
            });
        });
    });
});