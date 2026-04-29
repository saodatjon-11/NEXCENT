let coruserlInner = document.querySelector(".corusel__inner");
let dots = document.querySelectorAll(".dot");
let current = 0;

function changeSlide() {
  coruserlInner.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  dots[current].classList.add("active");
}

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    current = index;
    changeSlide();
  });
});

setInterval(function () {
  current++;

  if (current === dots.length) {
    current = 0;
  }

  changeSlide();
}, 3000);