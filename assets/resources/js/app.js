// Add an event listener to the window that listens for the "scroll" event
window.addEventListener("scroll", (event) => {
  // Get the current vertical scroll position using window.scrollY
  const scroll = window.scrollY;

  // Select the header element using its "header" tag name
  const header = document.querySelector("header");

  // Check if the scroll position is greater than 20 pixels
  if (scroll > 20) {
    // If the condition is true, add the "backDrop & animate__fadeInDownBig" class to the header element
    header.classList.add("backDrop", "animate__fadeInDownBig");
  } else {
    // If the condition is false, remove the "backDrop & animate__fadeInDownBig" class from the header element
    header.classList.remove("backDrop", "animate__fadeInDownBig");
  }
});

// Get the DOM element with the class "push__bar"
const push__bar = document.querySelector(".push__bar");

// Function to add animation classes to the push__bar element
function addAnimation() {
  // Add the "animate__backInRight" class for entry animation
  push__bar.classList.add("animate__backInRight");

  // Remove the "animate__backOutRight" class to ensure it's not active
  push__bar.classList.remove("animate__backOutRight");
}

// Function to remove animation classes from the push__bar element
function removeAnimation() {
  // Add the "animate__backOutRight" class for exit animation
  push__bar.classList.add("animate__backOutRight");

  // Remove the "animate__backInRight" class to ensure it's not active
  push__bar.classList.remove("animate__backInRight");
}
/* testimonials slider */
$(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 1],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: false,
  });
  const owl_buttons_container = document.querySelector(".owl-buttons");
  owl_buttons_container.classList.add("d-flex", "justify-content-center");
  const prev = document.querySelectorAll(
    "#testimonial-slider .owl-buttons .owl-prev"
  );

  const next = document.querySelectorAll(
    "#testimonial-slider .owl-buttons .owl-next"
  );
  testimonialController(prev, next);
});

// testimonial controller
function testimonialController(prev, next) {
  for (let i = 0; i < prev.length; i++) {
    const prevStyle = window.getComputedStyle(prev[i], "::before");
    const prevContent = prevStyle.content;
    prev[i].style.setProperty("--prev-before-content", prevContent);
    prev[i].classList.add("common-button", "btn-prev", "d-flex");
    prev[i].innerHTML = `<img src="./assets/img/left.svg" alt="left">`;
  }

  for (let i = 0; i < next.length; i++) {
    const nextStyle = window.getComputedStyle(next[i], "::before");
    const nextContent = nextStyle.content;
    next[i].style.setProperty("--next-before-content", nextContent);
    next[i].classList.add("common-button", "btn-next", "d-flex");
    next[i].innerHTML = `<img src="./assets/img/right.svg" alt="right">`;
  }
}
