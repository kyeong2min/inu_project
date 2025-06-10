// const get = (target) => document.querySelector(target);
// const getAll = (target) => document.querySelectorAll(target);

const selects = getAll('.custom-select');
// const after = get('.custom-select-wrap .custom-select::after');

selects.forEach((select) => {
    const selected = select.querySelector('.selected');
    const options = select.querySelectorAll('.options li');

    selected.addEventListener('click', () => {
        //다른 거 닫기
        selects.forEach((e) => {
            if (e !== select) e.classList.remove('open');
        });
        //하나만 토글
        select.classList.toggle('open');
    });
    options.forEach((option) => {
        option.addEventListener('click', (e) => {
            selected.textContent = option.textContent;
            selected.setAttribute('data-value', option.dataset.value);
            select.classList.remove('open');
        });
    });
    document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    });
});
