document.querySelector('.btn-watch-video').addEventListener('click', function() {
    document.querySelector('.image-container').style.display = 'none';
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