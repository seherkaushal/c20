
let song;

function setup() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
 // createCanvas(720, 200);
 var canvas = createCanvas(1200,400);
  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
