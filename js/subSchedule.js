let display = document.querySelector('.calendar-layout .panel .calendar-header .month-year'),
    prevBtn = document.querySelector('.top-header .prev'),
    nextBtn = document.querySelector('.top-header .next'),
    days = document.querySelector('.days'),
    selectedD = document.querySelectorAll('.top-header .month-selector .month'),
    schedule = document.querySelectorAll('.schedule-panel');

let dateToday = new Date();
console.log(dateToday);

let year = dateToday.getFullYear();
let month = dateToday.getMonth();

function displayCalendar() {
    const firstDay = new Date(year, month, 1); //첫날
    const firstDayIdx = firstDay.getDay(); //요일 월=1
    const lastDay = new Date(year, month + 1, 0); //현월의 마지막 날
    const numberOfDays = lastDay.getDate();

    let formattedDate = dateToday.toLocaleDateString('en-US', {
        month: 'long',
        timeZone: 'Asia/Seoul',
    });
    let monthNumber = dateToday.toLocaleDateString('en-US', {
        month: 'numeric',
        timeZone: 'Asia/Seoul',
    });
    display.innerHTML = `${monthNumber} ${formattedDate}`;

    //빈칸 생성
    for (let x = 1; x <= firstDayIdx; x++) {
        let div = document.createElement('div');
        div.innerHTML += '';
        days.appendChild(div);
    }
    //날짜 출력
    for (let i = 1; i <= numberOfDays; i++) {
        let div = document.createElement('div');
        let currentDate = new Date(year, month, i);
        div.dataset.date = currentDate.toDateString();
        div.innerHTML += i;
        days.appendChild(div);
        if (
            currentDate.getFullYear() === new Date().getFullYear() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getDate() === new Date().getDate()
        ) {
            div.classList.add('current-date');
        }
    }
}
displayCalendar();

prevBtn.addEventListener('click', (e) => {
    days.innerHTML = '';
    const selectedMonth = parseInt(e.target.getAttribute('data-month'));

    schedule.forEach((item) => {
        item.classList.remove('on');
        if (selectedMonth === 5) {
            item.classList.add('on');
        }
    });
    if (month < 0) {
        month = 1;
        year = year - 1;
    }
    month = month - 1;
    dateToday.setMonth(month);

    selectedD.forEach((e) => e.classList.remove('on'));

    const currentBtn = document.querySelector(`[data-month="${month}"]`);
    if (currentBtn) {
        currentBtn.classList.add('on');
    }

    displayCalendar();
});

nextBtn.addEventListener('click', (e) => {
    days.innerHTML = '';
    const selectedMonth = parseInt(e.target.getAttribute('data-month'));

    schedule.forEach((item) => {
        item.classList.remove('on');
        if (selectedMonth === 5) {
            item.classList.add('on');
        }
    });

    if (month > 11) {
        month = 0;
        year = year + 1;
    }
    month = month + 1;
    dateToday.setMonth(month);

    selectedD.forEach((e) => e.classList.remove('on'));

    const currentBtn = document.querySelector(`[data-month="${month}"]`);
    if (currentBtn) {
        currentBtn.classList.add('on');
    }

    displayCalendar();
});

selectedD.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
        days.innerHTML = '';
        const selectedMonth = parseInt(e.target.getAttribute('data-month'));

        selectedD.forEach((b) => b.classList.remove('on'));
        e.target.classList.add('on');

        schedule.forEach((item) => {
            item.classList.remove('on');
            if (selectedMonth === 5) {
                item.classList.add('on');
            }
        });

        if (!isNaN(selectedMonth)) {
            month = selectedMonth;
            dateToday.setMonth(month);
            displayCalendar();
        }
    });
});
