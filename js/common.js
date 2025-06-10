const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

//링크 눌림 방지
const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => {
        link.addEventListener('click', (e) => e.preventDefault());
    });
};
//서브탭 메뉴 나타나게 하기
const navi = () => {
    const $gnbItems = getAll('.nav .gnb > li');
    const $subMenus = getAll('#subNav .subGnbWrap');
    const $subNav = getAll('#subNav');

    if (!$gnbItems.length) return;

    $subMenus.forEach((subMenu) => (subMenu.style.display = 'none'));

    let isPlay = false;

    $gnbItems.forEach((mainMenu, idx) => {
        mainMenu.addEventListener('mouseenter', (e) => {
            isPlay = true;
            $subMenus.forEach((subMenu) => (subMenu.style.display = 'none'));
            $subMenus[idx].style.display = 'flex';
        });
        mainMenu.addEventListener('mouseleave', (e) => {
            isPlay = false;

            setTimeout(() => {
                if (!isPlay) {
                    $subMenus.forEach((subMenu) => (subMenu.style.display = 'none'));
                }
            }, 100);
        });

        mainMenu.addEventListener('click', (e) => {
            isPlay = true;
            $subMenus.forEach((subMenu) => (subMenu.style.display = 'none'));
            $subMenus[idx].style.display = 'flex';
        });
    });
    $subMenus.forEach((subMenu) => {
        subMenu.addEventListener('mouseenter', (e) => {
            isPlay = true;
        });

        subMenu.addEventListener('mouseleave', (e) => {
            isPlay = false;
            setTimeout(() => {
                $subMenus.forEach((subMenu) => {
                    subMenu.style.display = 'none';
                });
            }, 100);
        });
    });
};

//패밀리사이트
const familySite = () => {};

//헤더, 푸터 삽입
const comInit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                const $el = get(tag);
                if (!$el) return; // 요소가 없으면 아무 것도 하지 않음
                $el.innerHTML = res;

                if (tag === '#header') {
                    get(tag).innerHTML = res;
                    navi();
                }
                if (tag === '#subHeader') {
                    get(tag).innerHTML = res;
                    navi();
                }
                if (tag === '#subNav') {
                    get(tag).innerHTML = res;
                }
                if (tag === '#footer') {
                    get(tag).innerHTML = res;
                    familySite();
                }
            });
    };
    getPage('./page/header.html', '#header');
    getPage('./page/subHeader.html', '#subHeader');
    getPage('./page/footer.html', '#footer');
    getPage('./page/footer.html', '#footer');
};

// 즉시실행
(() => {
    preventDefaultAnchor();
    comInit();
})();
