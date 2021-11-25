//Creating Wave Surfer Context ==>
var audioTrack = WaveSurfer.create({
  container: ".audio",
  waveColor: "blueviolet",
  progressColor: "red",
  barWidth: 2,
});
audioTrack.load("../audio/faded.mp3");

//Taking Referece of All Buttons Scope(Global) ==>
const playBtn = document.querySelector(".playbutton");
const stopBtn = document.querySelector(".stopButton");
const muteBtn = document.querySelector(".muteBtn");
const volSlider = document.querySelector(".volumeCont");

//Adding Event to Play and pause Button ==>
playBtn.addEventListener("click", () => {
  audioTrack.playPause();
  if (audioTrack.isPlaying()) {
    playBtn.classList.add("playing");
  } else {
    playBtn.classList.remove("playing");
  }
});

//Adding Event to Stop Button ==>
stopBtn.addEventListener("click", () => {
  audioTrack.stop();
  playBtn.classList.remove("playing");
});

//Adding Event to volume Slider ==>
volSlider.addEventListener("mouseup", () => {
  changeVol(volSlider.value);
  //console.log(volSlider.value);
});

// function Controlling Volume Change ==>
const changeVol = (vol) => {
  if (Number(vol) === 0) {
    muteBtn.classList.add("muted");
  } else {
    muteBtn.classList.remove("muted");
  }
  audioTrack.setVolume(vol);
};

//listener to mute button ==>
muteBtn.addEventListener("click", () => {
  if (muteBtn.classList.contains("muted")) {
    muteBtn.classList.remove("muted");
    audioTrack.setVolume(0.3);
    volSlider.value = 0.3;
  } else {
    muteBtn.classList.add("muted");
    audioTrack.setVolume(0);
    volSlider.value = 0;
  }
});
