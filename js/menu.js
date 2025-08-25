document.addEventListener("DOMContentLoaded", function () {

    //    menu tab

    const menuLists = document.querySelectorAll(".drink_tab .menu_tab li");
    const menuBtn = document.querySelector(".drink_tab .menu_button");
    const drinkContents = document.querySelectorAll(".menu_list .drink_list");

    const bkLists = document.querySelectorAll(".bakery_tab .menu_tab li");
    const bakeryBtn = document.querySelector(".bakery_tab .menu_button");
    const bakeryContents = document.querySelectorAll(".bakery_list .bakery_li_wrap"); // 누락된 변수 추가

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

    updateButtonStyle();

    menuLists.forEach((menuList, index) => {
        menuList.addEventListener("click", () => {
            menuLists.forEach((ml) => ml.classList.remove("on"));
            drinkContents.forEach((dc) => dc.classList.remove("active"));

            menuList.classList.add("on");

            drinkContents[index].classList.add("active");

            updateButtonStyle();
        });
    });

    bkLists.forEach((bkList, index) => {
        bkList.addEventListener("click", () => {
            bkLists.forEach((bl) => bl.classList.remove("on"));
            bakeryContents.forEach((bc) => bc.classList.remove("active"));

            bkList.classList.add("on");

            bakeryContents[index].classList.add("active");

            updateButtonStyle();
        });
    });


    const menuListTop = document.querySelector(".menuList_top");
    const linearTop = document.querySelector(".ctt_top");
    const linearBottom = document.querySelector(".ctt_bottom");

    if (menuListTop && linearTop && linearBottom) {
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


    const drinkListTop = document.querySelector(".drinkList_top");
    const drinkLiTop = document.querySelector(".drinkLi_top");
    const drinkLiBottom = document.querySelector(".drinkLi_bottom");

    if (drinkListTop && drinkLiTop && drinkLiBottom) {
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

    const newScroll = document.querySelector(".new_scroll");
    const newSbTop = document.querySelector(".newSb_top");
    const newSbBottom = document.querySelector(".newSb_bottom");

    if (newScroll && newSbTop && newSbBottom) {
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


    const bakeryScroll = document.querySelector(".bakery_scroll");
    const bakerySbTop = document.querySelector(".bakerySb_top");
    const bakerySbEn = document.querySelector(".bakerySb_en");

    if (bakeryScroll && bakerySbTop && bakerySbEn) {
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

    window.addEventListener('scroll', () => {
        const section = document.querySelector('#drink_list'); // #drink_list 섹션의 위치에 따라 best_scroll이 활성화되는 로직
        const target = document.querySelector('#drink_list .best_scroll');
        const scrollY = window.scrollY;

        if (target) {
            if (scrollY >= 7687) {
                target.classList.add('active');
            } else {
                target.classList.remove('active');
            }
        }
    });

    const drinkLists = document.querySelectorAll(".drink_list");

    const bakeryTabs = document.querySelectorAll(".bakery_tab>.menu_tab>li");
    const bakeryLists = document.querySelectorAll(".bakery_list"); // 실제 베이커리 콘텐츠 목록


    // ===================================================================
    // 베이커리 Swiper 관련 코드
    // ===================================================================

    if (window.bakerySwiperInstance) {
        const bakerySwiper = window.bakerySwiperInstance;

        bakerySwiper.params.speed = 800;
        bakerySwiper.params.loop = true;
        bakerySwiper.update();

        bakerySwiper.on('init', function () {
            if (this.slides.length > 0) {
                const activeSlide = this.slides[this.activeIndex];
                const activeBakeryItem = activeSlide.querySelector('.bakery_item');
                if (activeBakeryItem) {
                    activeBakeryItem.classList.add('on');
                }
            }
        });

        bakerySwiper.on('slideChange', function () {
            if (this.previousIndex !== undefined && this.slides[this.previousIndex]) {
                const prevSlide = this.slides[this.previousIndex];
                const prevBakeryItem = prevSlide.querySelector('.bakery_item');
                if (prevBakeryItem) {
                    prevBakeryItem.classList.remove('on');
                }
            }
        });

        bakerySwiper.on('slideChangeTransitionEnd', function () {
            if (this.slides.length > 0) {
                const activeSlide = this.slides[this.activeIndex];
                const activeBakeryItem = activeSlide.querySelector('.bakery_item');
                if (activeBakeryItem) {
                    activeBakeryItem.classList.add('on');
                }
            }
        });

        bakeryTabs.forEach((bakeryTab) => {
            bakeryTab.addEventListener("click", () => {
                bakeryTabs.forEach((bt) => bt.classList.remove("on"));
                bakeryTab.classList.add("on");
                updateButtonStyle();

                const bakeryTabClass = bakeryTab.classList[0].replace("_bakeryTab", "");

                bakeryLists.forEach((bakeryList) => {
                    if (bakeryList.classList.contains(bakeryTabClass)) {
                        bakeryList.classList.add("on");
                        bakerySwiper.update();

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
                        bakerySwiper.slideTo(0);
                    } else {
                        bakeryList.classList.remove("on");
                    }
                });
            });
        });
    }

});