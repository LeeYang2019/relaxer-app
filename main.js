const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
  //breathe in
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  //executes hold after breatheTime expires
  setTimeout(() => {
    text.innerText = 'Hold';

    // executes breathe out after holdtime
    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(() => {
  breathAnimation();
}, totalTime);
