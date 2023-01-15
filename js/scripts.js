//  Carousel

$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    arrows: false,
  });
});

// Burger

let burger = document.querySelector("#burger_icon");
let header = document.querySelector("#header");

burger.onclick = function () {
  header.classList.toggle("menu_open");
};


// Counter 

const counters = document.querySelectorAll(".value");
const speed = 500;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("akhi");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }
  };

  animate();
});
