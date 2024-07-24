var stars = document.getElementsByClassName("star");

function gfg(n) {
  console.log("click ", n);
  remove();
  for (var i = 0; i < n; i++) {
    if (n == 1 || n == 2 || n == 3 || n == 4 || n == 5) cls = "mark";
    stars[i].className = "star " + cls;
  }
  console.log(stars[n - 1].className);
}

function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
}
