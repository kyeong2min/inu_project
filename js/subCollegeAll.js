// const get = (target) => document.querySelector(target);
// const getAll = (target) => document.querySelectorAll(target);

const $pic = getAll('#main .inner .container .contents-list .contents .pic img');
console.log($pic);

let url = '../images/subCollegeAll/li_IMG/C_li_IMG-0.jpg';

$pic.forEach((picUrl, idx) => {
    picUrl.src = `./images/subCollegeAll/li_IMG/C_li_IMG-${idx}.jpg`;
});
