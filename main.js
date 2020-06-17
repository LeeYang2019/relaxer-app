const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
  //breathe in
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  //then hold
  setTimeout(() => {
    text.innerText = 'Hold';

    // then breathe out
    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(() => {
  breathAnimation();
}, totalTime);
