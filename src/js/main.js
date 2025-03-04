import '../pages/main.html';
// import '../style/scss/main.scss';
import '../style/scss/styles.scss'

document.querySelector('.header__button').addEventListener('click', function() {
    document.querySelector('.header__image').style.display = 'none';
    let video = document.getElementById('video');
    video.style.display = 'block';
    video.play();
});


// const discounts = document.querySelectorAll('.discount');
// let percents = [];
// for (let discount in discounts) {
//     let percent= parseInt(discount.textContent);
//     discount.style.background = percent <= -30 ? '#FF5BC6' : '#18C576';
// }