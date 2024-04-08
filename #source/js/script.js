$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("open");
  $(this).toggleClass("open");
  $("html").toggleClass("lock");
  $(".header .call").toggleClass("open");
});

$(".nav-link").click(function (event) {
  $(".header-nav").removeClass("open");
  $(".header-burger").removeClass("open");
});
$(".nav-link-sub").click(function (event) {
  $(this).closest(".nav-item").find(".sub-menu").toggleClass("open");
});
$(document).click(function (event) {
  if (
    !$(event.target).closest(".nav-link-sub").length &&
    !$(event.target).closest(".sub-menu").length
  ) {
    $(".sub-menu").removeClass("open");
  }
});

$(".faq-item").click(function (event) {
  let parentListItem = $(this).closest("li");
  let isPlusOpen = parentListItem.find(".plus").hasClass("open");
  $(".plus").removeClass("open");
  $(".answer").removeClass("open");
  $(".question").removeClass("open");
  if (isPlusOpen) {
    parentListItem.find(".answer").removeClass("open");
  } else {
    parentListItem.find(".answer").addClass("open");
    parentListItem.find(".plus").addClass("open");
    parentListItem.find(".question").addClass("open");
  }
});
$(".moreText").click(function (event) {
  $(".shadow").toggleClass("open");
  $(this).closest("section").find(".textBlock").toggleClass("open");
  if ($(this).text() == "More") $(this).text("Hide");
  else $(this).text("More");
});
$.getScript(
  "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js",
  function () {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 500,
          },
        },
        color: {
          value: "#b1c900",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 6,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#fff",
          opacity: 0.5,
          width: 1.5,
        },
        move: {
          enable: true,
          speed: 4,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 150,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 100,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#b51924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    });
  }
);
$(".portfolio-filters-item").on("click", function () {
  $(".portfolio-filters-item").removeClass("open");
  $(this).addClass("open");
  const filter = $(this).data("filter");

  $(".project-item").each(function () {
    const category = $(this).data("category");
    if (filter === "all" || category === filter) {
      $(this).removeClass("hidden");
    } else {
      $(this).addClass("hidden");
    }
  });
});
$(".services-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".services").find(".prev"),
  nextArrow: $(".services").find(".next"),
  breakpoint: 768,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
});
$(".slider_filters-item").on("click", function () {
  let filter = $(this).data("filter");
  let slider = $(this).closest("section").find(".slider");
  $(slider).slick("slickUnfilter");
  if (filter) {
    $(slider).slick("slickFilter", "." + filter);
  }
});
$(".project-slider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".homeProjects").find(".prev"),
  nextArrow: $(".homeProjects").find(".next"),
  breakpoint: 768,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".testimonials-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".testimonials").find(".prev"),
  nextArrow: $(".testimonials").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".runSlider").slick({
  speed: 15000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  variableWidth: true,
  arrows: false,
  dots: false,
  pauseOnHover: false,
});
$(".technologies-slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".technologies").find(".prev"),
  nextArrow: $(".technologies").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
$(".process-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
});
$(window).on("load resize", function () {
  if ($(window).width() < 600) {
    $(".ourTeam-list").slick({
      rows: 2,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".ourTeam").find(".prev"),
      nextArrow: $(".ourTeam").find(".next"),
    });
  } else {
    $(".ourTeam-list").slick("unslick");
  }
});

let images = document.querySelectorAll(".arrows img");
let currentIndex = 0;
function addClassToImage() {
  images.forEach(function (img) {
    img.classList.remove("active");
  });
  images[currentIndex].classList.add("active");
  currentIndex = (currentIndex + 1) % images.length;
}

if (window.innerWidth >= 1024) {
  setInterval(addClassToImage, 200);
}

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          // Set the color of the selected item to black
          h.style.color = "white";
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

$(document).ready(function () {
  var $phoneInput = $("#tel");
  $phoneInput.on("input", function (e) {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });
});

const validation = new JustValidate("#main-form");

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 2,
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Phone number is required",
    },
    {
      rule: "minLength",
      value: 14,
      errorMessage: "The field must contain a minimum of 10 characters",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);
