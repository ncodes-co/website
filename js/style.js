/*Switch between X and Bars icon when clicking*/
let xmark = document.getElementById("xmark-icon"),
  bars = document.getElementById("bars-icon");

bars.addEventListener("click", function (e) {
  bars.classList.toggle("hide");
  xmark.classList.toggle("hide");
});

xmark.addEventListener("click", function (e) {
  xmark.classList.toggle("hide");
  bars.classList.toggle("hide");
});
/*End*/

/*Animation to hide and show another image*/
let animationDisabled = false;
function opacityAnimate(
  item1,
  item2,
  item3,
  item4,
  timeout1,
  timeout2,
  timeout3,
  timeout4
) {
  setTimeout(() => {
    item1.style.opacity = 1;
  }, timeout1);

  setTimeout(() => {
    item1.style.opacity = 0;
    item2.style.opacity = 1;
  }, timeout2);

  setTimeout(() => {
    item2.style.opacity = 0;
    item3.style.opacity = 1;
  }, timeout3);

  if (item4 != null || timeout4 != null) {
    setTimeout(() => {
      item3.style.opacity = 0;
      item4.style.opacity = 1;
    }, timeout4);
  }
}
/*ُEnd*/

/*Applying animation to binary system images*/
let binarySystem1 = document.getElementById("binary-system-background1");
let binarySystem2 = document.getElementById("binary-system-background2");
let binarySystem3 = document.getElementById("binary-system-background3");

function animateBinarySystem() {
  if (animationDisabled) {
    return;
  }
  opacityAnimate(
    binarySystem1,
    binarySystem2,
    binarySystem3,
    null,
    0,
    300,
    600,
    null
  );
}
/*End*/

/*Check if the screen is smaller than a certain width*/

function isScreenSmall() {
  return window.innerWidth < 991.98;
}
/*End*/

/*Check if the element is in the viewport*/
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
/*End*/

let firstArrow = document.getElementById("first-arrow-icon");
let secondArrow = document.getElementById("second-arrow-icon");
let thirdArrow = document.getElementById("third-arrow-icon");
let arrowsSection = document.getElementById("arrows");

function animateArrows() {
  if (animationDisabled) {
    return;
  }

  if (isInViewport(arrowsSection)) {
    opacityAnimate(
      firstArrow,
      secondArrow,
      thirdArrow,
      null,
      200,
      400,
      600,
      null
    );

    window.removeEventListener("scroll", animateArrows);
  }
}

let servicesAndIcon = document.getElementById("services-and-icon");
let threelines1 = document.getElementById("three-lines1");
let threelines2 = document.getElementById("three-lines2");
let threelines3 = document.getElementById("three-lines3");

function animateThreeLines() {
  if (animationDisabled) {
    return;
  }

  if (isInViewport(servicesAndIcon)) {
    opacityAnimate(
      threelines1,
      threelines2,
      threelines3,
      null,
      200,
      400,
      600,
      null
    );

    window.removeEventListener("scroll", animateThreeLines);
  }
}

let customersAndIcon = document.getElementById("customers-and-icon");
let curlyLine1 = document.getElementById("curly-line1");
let curlyLine2 = document.getElementById("curly-line2");
let curlyLine3 = document.getElementById("curly-line3");

function animateCurlyLine() {
  if (animationDisabled) {
    return;
  }

  if (isInViewport(customersAndIcon)) {
    opacityAnimate(
      curlyLine1,
      curlyLine2,
      curlyLine3,
      null,
      200,
      400,
      600,
      null
    );

    window.removeEventListener("scroll", animateCurlyLine);
  }
}

let circleLine1 = document.getElementById("circle-line1");
let circleLine2 = document.getElementById("circle-line2");
let circleLine3 = document.getElementById("circle-line3");
let circleLine4 = document.getElementById("circle-line4");
let questionsAndIcon = document.getElementById("questions-and-icon");

function animateCircleLine() {
  if (animationDisabled) {
    return;
  }

  if (isInViewport(questionsAndIcon)) {
    opacityAnimate(
      circleLine1,
      circleLine2,
      circleLine3,
      circleLine4,
      150,
      300,
      450,
      600
    );

    window.removeEventListener("scroll", animateCircleLine);
  }
}

/*Mouse effect*/

let circles = document.querySelectorAll(".circle");
let header = document.getElementById("header");

function removeCircles() {
  circles.forEach(function (circle) {
    circle.remove();
  });
}

function addCircles() {
  return new Promise((resolve) => {
    const body = document.body; // الحصول على عنصر body
    for (let i = 0; i < 33; i++) {
      const newDiv = document.createElement("div"); // إنشاء عنصر div جديد
      newDiv.classList.add("circle"); // إضافة الكلاس circle
      body.insertBefore(newDiv, body.firstChild); // إضافة العنصر الجديد في بداية body
    }
    resolve(); // إشارة بأن الإضافة تمت
  });
}

function circleAnimation() {
  circles = document.querySelectorAll(".circle");
  if (circles.length == 0) {
    addCircles().then(() => {
      const coords = { x: 0, y: 0 };
      const circles = document.querySelectorAll(".circle");

      circles.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
      });

      window.addEventListener("mousemove", function (e) {
        coords.x = e.pageX;
        coords.y = e.pageY;

        circles.forEach(function (circle) {
          circle.style.display = "block";
        });
      });

      window.addEventListener("mouseout", function (e) {
        circles.forEach(function (circle) {
          circle.style.display = "none";
        });
      });

      function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index) {
          circle.style.left = x - 50 + "px";
          circle.style.top = y - 50 + "px";
          circle.style.scale = (circles.length - index) / circles.length;

          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        });
        requestAnimationFrame(animateCircles);
      }

      animateCircles();
    });
  }
}

window.addEventListener("resize", function () {
  if (isScreenSmall()) {
    thirdArrow.style.opacity = 1;
    binarySystem3.style.opacity = 1;
    threelines3.style.opacity = 1;
    curlyLine3.style.opacity = 1;
    circleLine4.style.opacity = 1;
    animationDisabled = true;
    circles = document.querySelectorAll(".circle");
    removeCircles();
  } else {
    circleAnimation();
  }
});

window.addEventListener("DOMContentLoaded", function () {
  if (isScreenSmall()) {
    thirdArrow.style.opacity = 1;
    binarySystem3.style.opacity = 1;
    threelines3.style.opacity = 1;
    curlyLine3.style.opacity = 1;
    circleLine4.style.opacity = 1;
    animationDisabled = true;
    circles = document.querySelectorAll(".circle");
    removeCircles();
  } else {
    circleAnimation();
  }
});

/*End*/

/*Call functions when all page content is loaded*/
window.onload = function () {
  window.addEventListener("scroll", animateArrows);
  window.addEventListener("scroll", animateThreeLines);
  window.addEventListener("scroll", animateCurlyLine);
  window.addEventListener("scroll", animateCircleLine);
  animateBinarySystem();
};
/*ُEnd*/

/*Switch between Plus and Minus icon when clicking*/
let plusMinusBtn = document.querySelectorAll(".plus-minus-btn");

plusMinusBtn.forEach((elem) => {
  elem.addEventListener("click", function () {
    document.querySelectorAll(".plus-icon.hide").forEach((p) => {
      if (this.firstElementChild !== p) p.classList.remove("hide");
    });

    document.querySelectorAll(".minus-icon:not(.hide)").forEach((m) => {
      if (this.lastElementChild !== m) m.classList.add("hide");
    });

    this.firstElementChild.classList.toggle("hide");
    this.lastElementChild.classList.toggle("hide");
  });
});
/*End*/

/*Get current year*/
document.getElementById("current-year").innerHTML = new Date().getFullYear();
/*ُEnd*/
