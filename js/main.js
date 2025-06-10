//visual
const pagings = getAll('#visual .paging li');
const banners = getAll('#visual .main-banner li');

let cnt = 0;
const total = pagings.length;
let timer = null;
const interval = 5000;

const make = () => {
    cnt++;
    if (cnt >= total) cnt = 0;
    updateBanner();
};

timer = setInterval(make, interval);

const updateBanner = () => {
    pagings.forEach((ePaging) => ePaging.classList.remove('on'));
    banners.forEach((eBanner) => {
        eBanner.classList.remove('on');
    });

    pagings[cnt].classList.add('on');
    banners[cnt].classList.add('on');

    const img = banners[cnt].querySelector('img');
    if (img) {
        img.setAttribute('src', `./images/main/visual-${cnt}.png`);
        img.setAttribute('alt', 'visual' + cnt);
    }
};

pagings.forEach((p, idx) => {
    p.addEventListener('click', () => {
        cnt = idx;
        updateBanner();
        clearInterval(timer);
        timer = setInterval(make, interval);
    });
});

updateBanner();
// 비쥬얼배너

const topBtn = get('.main .top-button');
topBtn.addEventListener('click', (e) => {
    //클릭했을 때 위로 가게
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

// 탑버튼

//con4
const box = getAll('.main .con4 .inner .mini-box .box');

box.forEach((eBox) => {
    eBox.addEventListener('mouseenter', () => {
        box.forEach((b) => b.classList.remove('on'));
        eBox.classList.add('on');
    });
});

//con5
const btns = getAll('.main .con5 .inner .banner-wrap .btn');
const ul = get('.main .con5 .inner .banner');
const lis = getAll('.main .con5 .inner .banner li');

btns[0].addEventListener('click', (e) => {
    console.log('hi');
    const last = ul.lastElementChild;
    ul.prepend(last);
});

btns[1].addEventListener('click', (e) => {
    const first = ul.firstElementChild;
    ul.append(first);
});
