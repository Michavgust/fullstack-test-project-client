document.querySelector('.btn-watch-video').addEventListener('click', function() {
    document.querySelector('.image-container').style.display = 'none';
    let video = document.getElementById('video');
    video.style.display = 'block';
    video.play();
});