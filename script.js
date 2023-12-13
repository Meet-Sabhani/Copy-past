function highlight(selector) {
  var elements = document.querySelectorAll(selector);

  elements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      let classLink = element.classList[1];
      document.querySelectorAll("." + classLink).forEach(function (el) {
        el.classList.add("over");
      });
      document.querySelectorAll(".section-" + classLink).forEach(function (el) {
        el.style.display = "block";
        el.style.opacity = 1;
      });
    });

    element.addEventListener("mouseleave", function () {
      let classLink = element.classList[1];
      document.querySelectorAll("." + classLink).forEach(function (el) {
        el.classList.remove("over");
      });
      document.querySelectorAll(".section-" + classLink).forEach(function (el) {
        el.style.display = "none";
        el.style.opacity = 0;
      });
    });
  });
}

highlight(".hover");
highlight("li a");
