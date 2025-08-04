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
                        bakeryBtn.style.width = "129px";
                        break;
                    case 2:
                        bakeryBtn.style.left = "241px";
                        bakeryBtn.style.width = "75px";
                        break;
                    case 3: // 탭이 4개일 경우를 대비하여 추가했습니다.
                        bakeryBtn.style.left = "262px"; // 예시 위치
                        bakeryBtn.style.width = "75px"; // 예시 너비
                        break;
                }
            }
        });
    }

    // 초기 로드 시 버튼 스타일 업데이트
    updateButtonStyle();

    menuLists.forEach((menuList) => {
        menuList.addEventListener("click", () => {
            menuLists.forEach((ml) => ml.classList.remove("on"));
            menuList.classList.add("on");
            updateButtonStyle();
        });
    });

    // menuList_top 스크롤 효과
    const menuListTop = document.querySelector(".menuList_top");
    const linearTop = document.querySelector(".ctt_top");
    const linearBottom = document.querySelector(".ctt_bottom");

    if (menuListTop && linearTop && linearBottom) { // null 체크 추가
        menuListTop.addEventListener("scroll", function () {
            const isAtTop = menuListTop.scrollTop === 0;
            const isAtBottom = menuListTop.scrollHeight - menuListTop.scrollTop === menuListTop.clientHeight;

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
        });

        // 초기 로드 시 스크롤바 상태에 따른 투명도 조절
        const isInitialAtTop = menuListTop.scrollTop === 0;
        const isInitialAtBottom = menuListTop.scrollHeight - menuListTop.scrollTop === menuListTop.clientHeight;

        if (isInitialAtTop) {
            linearTop.style.opacity = "0";
            linearBottom.style.opacity = "1";
        } else if (isInitialAtBottom) {
            linearTop.style.opacity = "1";
            linearBottom.style.opacity = "0";
        } else {
            linearTop.style.opacity = "1";
            linearBottom.style.opacity = "1";
        }
    }


    // drinkList_top 스크롤 효과
    const drinkListTop = document.querySelector(".drinkList_top");
    const drinkLiTop = document.querySelector(".drinkLi_top");
    const drinkLiBottom = document.querySelector(".drinkLi_bottom");

    if (drinkListTop && drinkLiTop && drinkLiBottom) { // null 체크 추가
        drinkListTop.addEventListener("scroll", function () {
            const isAtTop = drinkListTop.scrollTop === 0;
            const isAtBottom = drinkListTop.scrollHeight - drinkListTop.scrollTop === drinkListTop.clientHeight;

            if (isAtTop) {
                drinkLiTop.style.opacity = "0";
                drinkLiBottom.style.opacity = "1";
            } else if (isAtBottom) {
                drinkLiTop.style.opacity = "1";
                drinkLiBottom.style.opacity = "0";
            } else {
                drinkLiTop.style.opacity = "1";
                drinkLiBottom.style.opacity = "1";
            }
        });

        // 초기 로드 시 스크롤바 상태에 따른 투명도 조절
        const isInitialDrinkAtTop = drinkListTop.scrollTop === 0;
        const isInitialDrinkAtBottom = drinkListTop.scrollHeight - drinkListTop.scrollTop === drinkListTop.clientHeight;

        if (isInitialDrinkAtTop) {
            drinkLiTop.style.opacity = "0";
            drinkLiBottom.style.opacity = "1";
        } else if (isInitialDrinkAtBottom) {
            drinkLiTop.style.opacity = "1";
            drinkLiBottom.style.opacity = "0";
        } else {
            drinkLiTop.style.opacity = "1";
            drinkLiBottom.style.opacity = "1";
        }
    }


    // category tab
    const categoryTabs = document.querySelectorAll(".category_tab > li");
    const categoryLists = document.querySelectorAll(".category_list");

    categoryTabs.forEach((categoryTab) => {
        categoryTab.addEventListener("click", () => {
            categoryTabs.forEach((ct) => ct.classList.remove("on"));
            categoryTab.classList.add("on");

            const categoryTabClass = categoryTab.classList[0].replace("_categoryTab", "");

            categoryLists.forEach((categoryList) => {
                if (categoryList.classList.contains(categoryTabClass)) {
                    categoryList.classList.add("on");
                } else {
                    categoryList.classList.remove("on");
                }
            });
        });
    });

    // categoryList_top 스크롤 효과
    const categoryListTop = document.querySelector(".categoryList_top");
    const categoryLiTop = document.querySelector(".categoryLi_top");
    const categoryLiBottom = document.querySelector(".categoryLi_bottom");

    if (categoryListTop && categoryLiTop && categoryLiBottom) { // null 체크 추가
        categoryListTop.addEventListener("scroll", function () {
            const isAtTop = categoryListTop.scrollTop === 0;
            const isAtBottom = categoryListTop.scrollHeight - categoryListTop.scrollTop === categoryListTop.clientHeight;

            if (isAtTop) {
                categoryLiTop.style.opacity = "0";
                categoryLiBottom.style.opacity = "1";
            } else if (isAtBottom) {
                categoryLiTop.style.opacity = "1";
                categoryLiBottom.style.opacity = "0";
            } else {
                categoryLiTop.style.opacity = "1";
                categoryLiBottom.style.opacity = "1";
            }
        });

        // 초기 로드 시 스크롤바 상태에 따른 투명도 조절
        const isInitialCategoryAtTop = categoryListTop.scrollTop === 0;
        const isInitialCategoryAtBottom = categoryListTop.scrollHeight - categoryListTop.scrollTop === categoryListTop.clientHeight;

        if (isInitialCategoryAtTop) {
            categoryLiTop.style.opacity = "0";
            categoryLiBottom.style.opacity = "1";
        } else if (isInitialCategoryAtBottom) {
            categoryLiTop.style.opacity = "1";
            categoryLiBottom.style.opacity = "0";
        } else {
            categoryLiTop.style.opacity = "1";
            categoryLiBottom.style.opacity = "1";
        }
    }


    // best_scroll 스크롤 효과
    const bestScroll = document.querySelector(".best_scroll");
    const bestSbTop = document.querySelector(".bestSb_top");
    const bestSbBottom = document.querySelector(".bestSb_bottom");

    if (bestScroll && bestSbTop && bestSbBottom) { // null 체크 추가
        bestScroll.addEventListener("scroll", function () {
            const isAtTop = bestScroll.scrollTop === 0;
            const isAtBottom = bestScroll.scrollHeight - bestScroll.scrollTop === bestScroll.clientHeight;

            if (isAtTop) {
                bestSbTop.style.opacity = "0";
                bestSbBottom.style.opacity = "1";
            } else if (isAtBottom) {
                bestSbTop.style.opacity = "1";
                bestSbBottom.style.opacity = "0";
            } else {
                bestSbTop.style.opacity = "1";
                bestSbBottom.style.opacity = "1";
            }
        });

        // 초기 로드 시 스크롤바 상태에 따른 투명도 조절
        const isInitialBestAtTop = bestScroll.scrollTop === 0;
        const isInitialBestAtBottom = bestScroll.scrollHeight - bestScroll.scrollTop === bestScroll.clientHeight;

        if (isInitialBestAtTop) {
            bestSbTop.style.opacity = "0";
            bestSbBottom.style.opacity = "1";
        } else if (isInitialBestAtBottom) {
            bestSbTop.style.opacity = "1";
            bestSbBottom.style.opacity = "0";
        } else {
            bestSbTop.style.opacity = "1";
            bestSbBottom.style.opacity = "1";
        }
    }

    // new_scroll 스크롤 효과
    const newScroll = document.querySelector(".new_scroll");
    const newSbTop = document.querySelector(".newSb_top");
    const newSbBottom = document.querySelector(".newSb_bottom");

    if (newScroll && newSbTop && newSbBottom) { // null 체크 추가
        newScroll.addEventListener("scroll", function () {
            const isAtTop = newScroll.scrollTop === 0;
            const isAtBottom = newScroll.scrollHeight - newScroll.scrollTop === newScroll.clientHeight;

            if (isAtTop) {
                newSbTop.style.opacity = "0";
                newSbBottom.style.opacity = "1";
            } else if (isAtBottom) {
                newSbTop.style.opacity = "1";
                newSbBottom.style.opacity = "0";
            } else {
                newSbTop.style.opacity = "1";
                newSbBottom.style.opacity = "1";
            }
        });

        // 초기 로드 시 스크롤바 상태에 따른 투명도 조절
        const isInitialNewAtTop = newScroll.scrollTop === 0;
        const isInitialNewAtBottom = newScroll.scrollHeight - newScroll.scrollTop === newScroll.clientHeight;

        if (isInitialNewAtTop) {
            newSbTop.style.opacity = "0";
            newSbBottom.style.opacity = "1";
        } else if (isInitialNewAtBottom) {
            newSbTop.style.opacity = "1";
            newSbBottom.style.opacity = "0";
        } else {
            newSbTop.style.opacity = "1";
            newSbBottom.style.opacity = "1";
        }
    }


    // bakery_scroll 스크롤 효과 (현재는 CSS에서 스크롤바를 숨기고 있으므로, 이 효과는 보이지 않을 수 있습니다.)
    const bakeryScroll = document.querySelector(".bakery_scroll");
    const bakerySbTop = document.querySelector(".bakerySb_top");
    const bakerySbEn = document.querySelector(".bakerySb_en"); // 이 변수명은 아마 bakerySbBottom을 의도한 것 같습니다.

    if (bakeryScroll && bakerySbTop && bakerySbEn) { // null 체크 추가
        bakeryScroll.addEventListener("scroll", function () {
            const isAtTop = bakeryScroll.scrollTop === 0;
            const isAtBottom = bakeryScroll.scrollHeight - bakeryScroll.scrollTop === bakeryScroll.clientHeight;

            if (isAtTop) {
                bakerySbTop.style.opacity = "0";
                bakerySbEn.style.opacity = "1";
            } else if (isAtBottom) {
                bakerySbTop.style.opacity = "1";
                bakerySbEn.style.opacity = "0";
            } else {
                bakerySbTop.style.opacity = "1";
                bakerySbEn.style.opacity = "1";
            }
        });

        // 초기 로드 시 스크롤바 상태에 따른 투명도 조절
        const isInitialBakeryAtTop = bakeryScroll.scrollTop === 0;
        const isInitialBakeryAtBottom = bakeryScroll.scrollHeight - bakeryScroll.scrollTop === bakeryScroll.clientHeight;

        if (isInitialBakeryAtTop) {
            bakerySbTop.style.opacity = "0";
            bakerySbEn.style.opacity = "1";
        } else if (isInitialBakeryAtBottom) {
            bakerySbTop.style.opacity = "1";
            bakerySbEn.style.opacity = "0";
        } else {
            bakerySbTop.style.opacity = "1";
            bakerySbEn.style.opacity = "1";
        }
    }

    // 전역 스크롤 이벤트 (best_scroll 활성화)
    window.addEventListener('scroll', () => {
        const section = document.querySelector('#drink_list'); // #drink_list 섹션의 위치에 따라 best_scroll이 활성화되는 로직
        const target = document.querySelector('#drink_list .best_scroll');
        const scrollY = window.scrollY;

        // target 요소가 존재하는지 확인
        if (target) {
            // 스크롤 위치 (7687)는 페이지 레이아웃에 따라 조정해야 할 수 있습니다.
            if (scrollY >= 7687) {
                target.classList.add('active');
            } else {
                target.classList.remove('active');
            }
        }
    });

    // drinkLists는 menuLists와 연동됩니다. (변수 정의는 유지)
    const drinkLists = document.querySelectorAll(".drink_list");

    // bakeryTabs (베이커리 탭)에 대한 클릭 이벤트 리스너
    const bakeryTabs = document.querySelectorAll(".bakery_tab>.menu_tab>li");
    const bakeryLists = document.querySelectorAll(".bakery_list"); // 실제 베이커리 콘텐츠 목록


    // ===================================================================
    // 베이커리 Swiper 관련 코드
    // ===================================================================

    // window.bakerySwiperInstance가 이미 index.html에서 초기화되었다고 가정합니다.
    // 해당 인스턴스에 필요한 이벤트 리스너를 추가합니다.
    if (window.bakerySwiperInstance) {
        const bakerySwiper = window.bakerySwiperInstance;

        // Swiper 속도 및 loop 설정 (index.html에서 설정한 것을 덮어쓸 수 있습니다)
        // CSS transition이 0.8s 이므로 Swiper speed도 800ms로 맞춥니다.
        bakerySwiper.params.speed = 800;
        bakerySwiper.params.loop = true; // 필요하다면 loop 설정 추가
        bakerySwiper.update(); // 변경된 파라미터 적용

        // .on 클래스 추가/제거를 위한 Swiper 이벤트 핸들러 추가
        bakerySwiper.on('init', function () {
            // 초기화 시 활성 슬라이드의 .bakery_item에 .on 클래스 추가
            if (this.slides.length > 0) {
                const activeSlide = this.slides[this.activeIndex];
                const activeBakeryItem = activeSlide.querySelector('.bakery_item');
                if (activeBakeryItem) {
                    activeBakeryItem.classList.add('on');
                }
            }
        });

        bakerySwiper.on('slideChange', function () {
            // 슬라이드 전환 시작 시: 이전 활성 슬라이드의 bakery_item에서 'on' 클래스 제거
            // 이렇게 하면 현재 보이던 슬라이드가 투명해지기 시작합니다.
            if (this.previousIndex !== undefined && this.slides[this.previousIndex]) {
                const prevSlide = this.slides[this.previousIndex];
                const prevBakeryItem = prevSlide.querySelector('.bakery_item');
                if (prevBakeryItem) {
                    prevBakeryItem.classList.remove('on');
                }
            }
        });

        bakerySwiper.on('slideChangeTransitionEnd', function () {
            // 슬라이드 전환 완료 시: 새로운 활성 슬라이드의 bakery_item에 'on' 클래스 추가
            // 이렇게 하면 새로 보이는 슬라이드가 불투명해지기 시작합니다.
            if (this.slides.length > 0) {
                const activeSlide = this.slides[this.activeIndex];
                const activeBakeryItem = activeSlide.querySelector('.bakery_item');
                if (activeBakeryItem) {
                    activeBakeryItem.classList.add('on');
                }
            }
        });

        // bakeryTabs (베이커리 탭)에 대한 클릭 이벤트 리스너
        bakeryTabs.forEach((bakeryTab) => {
            bakeryTab.addEventListener("click", () => {
                bakeryTabs.forEach((bt) => bt.classList.remove("on"));
                bakeryTab.classList.add("on");
                updateButtonStyle();

                const bakeryTabClass = bakeryTab.classList[0].replace("_bakeryTab", "");

                bakeryLists.forEach((bakeryList) => {
                    if (bakeryList.classList.contains(bakeryTabClass)) {
                        bakeryList.classList.add("on");
                        bakerySwiper.update(); // 탭 활성화 시 Swiper 레이아웃 업데이트

                        // 탭 변경 시 모든 bakery_item에서 'on' 클래스 제거 후,
                        // 현재 활성화된 슬라이드에만 다시 'on' 추가 (초기화 로직과 유사)
                        bakerySwiper.slides.forEach((slide) => {
                            const item = slide.querySelector('.bakery_item');
                            if (item) {
                                item.classList.remove('on');
                            }
                        });
                        if (bakerySwiper.slides.length > 0) {
                            const activeSlide = bakerySwiper.slides[bakerySwiper.activeIndex];
                            const activeBakeryItem = activeSlide.querySelector('.bakery_item');
                            if (activeBakeryItem) {
                                activeBakeryItem.classList.add('on');
                            }
                        }
                        // (선택 사항) 탭 변경 시 첫 번째 슬라이드로 이동
                        bakerySwiper.slideTo(0);
                    } else {
                        bakeryList.classList.remove("on");
                    }
                });
            });
        });
    } else {
        console.warn("bakerySwiperInstance가 전역에서 초기화되지 않았습니다. index.html에서 window.bakerySwiperInstance = new Swiper(...) 와 같이 초기화되었는지 확인하세요.");
        // 전역 인스턴스가 없을 경우, 이 부분에서 bakerySwiper를 초기화하는 폴백 로직을 추가할 수도 있지만,
        // index.html과 중복 초기화가 될 수 있으므로 주의해야 합니다.
    }

    // ===================================================================
    // 베이커리 Swiper 관련 코드 끝
    // ===================================================================

});