const video = document.getElementById("introVideo");

const loopStart = 3;
const loopEnd = 14;

// Loop from loopStart to loopEnd
video.addEventListener("timeupdate", () => {
  if (video.currentTime >= loopEnd) {
    video.currentTime = loopStart;
    video.play(); // Ensure playback resumes instantly
  }
});


video.addEventListener('loadedmetadata', () => {
  video.currentTime = loopStart;
  video.play();
});