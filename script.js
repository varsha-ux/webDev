let nav = document.querySelector(".content1");
let left = document.querySelector(".content1 .left");
let right = document.querySelector(".content1 .right");

let idx;

left.addEventListener("mouseenter", function () {
  idx = setInterval(() => (nav.scrollLeft -= 1), 8);
});

left.addEventListener("mouseleave", function () {
  clearInterval(idx);
});

right.addEventListener("mouseenter", function () {
  idx = setInterval(() => (nav.scrollLeft += 1), 4);
});

right.addEventListener("mouseleave", function () {
  clearInterval(idx);
});
