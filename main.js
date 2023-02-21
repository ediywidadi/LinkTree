let links = document.querySelectorAll(".bounce");
let i = 0;

setInterval(function() {
  links[i].classList.remove("bounce");
  void links[i].offsetWidth;
  i = (i + 1) % links.length;
  links[i].classList.add("bounce");
}, 6000);
