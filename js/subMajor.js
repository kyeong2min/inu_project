const filter = get('.form .filter');
const filterIcon = get('.form .filter i');

filter.addEventListener('click', () => {
    filter.classList.toggle('on');
    if (filter.classList.contains('on')) {
        filterIcon.classList.replace('xi-angle-down-min', 'xi-angle-up-min');
    } else {
        filterIcon.classList.replace('xi-angle-up-min', 'xi-angle-down-min');
    }
});

const Major = () => {
    const board = get('.board-button');
    const $news = get('.bigNews');
    const contents = getAll('.contents');
    // const background = get('#background');
    const $con = get('.containerMain');

    $news.classList.add('hide');

    board.addEventListener('click', (e) => {
        $con.classList.remove('hide');
        $news.classList.add('hide');
        window.scrollTo(0, 500);
    });

    contents.forEach((content) => {
        content.addEventListener('click', (e) => {
            $con.classList.add('hide');
            $news.classList.remove('hide');
        });
    });
};

(() => {
    Major();
})();
