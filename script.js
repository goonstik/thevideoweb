function changeVideo(videoFile) {
    const video = document.getElementById('main-video');
    video.src = videoFile;
    video.play();
}
document.getElementById('uploadButton').onclick = function() {
    const videoInput = document.getElementById('videoInput');
    const file = videoInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost:5000/upload', { // Adjust the URL as needed
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            alert('Video uploaded successfully: ' + data.filePath);
        })
        .catch(error => {
            console.error('Error uploading video:', error);
        });
    } else {
        alert('Please select a video file first.');
    }
};
