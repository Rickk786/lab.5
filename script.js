const audio = document.getElementById("beachAudio");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function replayAudio() {
  audio.currentTime = 0;
  audio.play();
}
