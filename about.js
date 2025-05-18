
    const video = document.getElementById('myVideo');
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });
