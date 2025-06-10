// const get = (target) => document.querySelector(target);
// const getAll = (target) => document.querySelectorAll(target);

const filter = get('#main .inner .container .topTitle .form .filter');
const filtericon = get('#main .inner .container .topTitle .form .filter i');

filter.addEventListener('click', () => {
    filter.classList.toggle('on');
    if (filter.classList.contains('on')) {
        filtericon.classList.replace('xi-angle-down-min', 'xi-angle-up-min');
    } else {
        filtericon.classList.replace('xi-angle-up-min', 'xi-angle-down-min');
    }
});
