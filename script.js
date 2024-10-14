function changeVideo(videoFile) {
    const video = document.getElementById('main-video');
    video.src = videoFile;
    video.play();
}