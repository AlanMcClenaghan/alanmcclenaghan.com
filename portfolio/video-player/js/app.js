/***************************
global variables
***************************/

const video = document.getElementById("video1");
const line = document.getElementsByClassName("transcript-line");

/***************************
text-to-black function
***************************/

function black() {
  for (let i = 0; i < line.length; i++) {
    line[i].style.color = "black";
  }
}

/***************************
Highlight text function
***************************/

function getCurTime() {
  let time = video.currentTime
  for (let i = 0; i < line.length; i++) {
    let orange = Math.floor(line[i].id);
      if (time > orange) {
        black();
        line[i].style.color = "orange";
      } if (time > 59.86133) {
        black();
      }
  }
}

/***************************
Click-to-hightlight function
***************************/

for (let i = 0; i < line.length; i++) {
  line[i].addEventListener("click", (event) => {
    video.currentTime = event.target.id;
    video.play();
  });
}