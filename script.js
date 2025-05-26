// Improved Typewriter
const text = "Rhythm of India";
const el = document.getElementById("typewriter");
let idx = 0, dir = 1;

function tick() {
  el.textContent = text.substring(0, idx);
  if (dir === 1) {
    if (idx < text.length) {
      idx++;
    } else {
      dir = -1;
      return setTimeout(tick, 1200);
    }
  } else {
    if (idx > 0) {
      idx--;
    } else {
      dir = 1;
      return setTimeout(tick, 800);
    }
  }
  setTimeout(tick, dir === 1 ? 130 : 65);
}

tick();
