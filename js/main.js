// ------------------ Page loader ------------------
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");
});

// ------------------ Landing section heading animation (ISICOD) ------------------
const animatedHeading = document.querySelector(".name h1");

window.addEventListener("load", () => {
  animatedHeading.classList.add("animate");
});

setInterval(() => {
  animatedHeading.classList.toggle("animate");
}, 2800);

// ------------------ Responsive menu ------------------
const menuBars = document.querySelector("#menu-bars");
const menu = document.querySelector(".links");
const menuLinks = document.querySelectorAll(".links li a");
const xMark = document.querySelector("#x-mark");
const blackOverlay = document.querySelector(".black-overlay");

menuBars.addEventListener("click", () => {
  menu.classList.add("show-menu");
  blackOverlay.classList.add("show-black-overlay");
});

xMark.addEventListener("click", () => {
  menu.classList.remove("show-menu");
  blackOverlay.classList.remove("show-black-overlay");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    blackOverlay.classList.remove("show-black-overlay");
  });
});

// ------------------ Fade effect to element while scrolling ------------------

window.addEventListener("load", () => {
  // Fade top
  const fadersTop = document.querySelectorAll(".fade-top");

  const fadersTopOptions = {
    threshold: 0.3,
  };

  const fadersTopObserver = new IntersectionObserver(
    (entries, fadersTopObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear-top");
        }
      });
    },
    fadersTopOptions
  );

  fadersTop.forEach((fader) => {
    fadersTopObserver.observe(fader);
  });

  // Fade down
  const fadersDown = document.querySelectorAll(".fade-down");

  const fadersDownOptions = {
    threshold: 0.3,
  };

  const fadersDownObserver = new IntersectionObserver(
    (entries, fadersDownObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear-down");
        }
      });
    },
    fadersDownOptions
  );

  fadersDown.forEach((fader) => {
    fadersDownObserver.observe(fader);
  });

  // Fade left
  const fadersLeft = document.querySelectorAll(".fade-left");

  const fadersLeftOptions = {
    threshold: 0.5,
  };

  const fadersLeftObserver = new IntersectionObserver(
    (entries, fadersLeftObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear-left");
        }
      });
    },
    fadersLeftOptions
  );

  fadersLeft.forEach((fader) => {
    fadersLeftObserver.observe(fader);
  });

  // Fade right
  const fadersRight = document.querySelectorAll(".fade-right");

  const fadersRightOptions = {
    threshold: 0.5,
  };

  const fadersRightObserver = new IntersectionObserver(
    (entries, fadersRightObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear-right");
        }
      });
    },
    fadersRightOptions
  );

  fadersRight.forEach((fader) => {
    fadersRightObserver.observe(fader);
  });

  // Special headings line effect
  const Lines = document.querySelectorAll(".line");

  const LinesOptions = {
    threshold: 0.5,
  };

  const LinesObserver = new IntersectionObserver((entries, LinesObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("show-line");
      }
    });
  }, LinesOptions);

  Lines.forEach((Line) => {
    LinesObserver.observe(Line);
  });
});

// ------------------------ Scroll to top button ------------------------
const scrollUpBtn = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollUpBtn.classList.add("show-up-btn");
  } else {
    scrollUpBtn.classList.remove("show-up-btn");
  }
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// ------------------------ Nos Technologies functionalities ------------------------

const techTitles = document.querySelectorAll("#tech-titles li");
const techCards = document.querySelectorAll(".tech");
const firstTechCard = document.querySelectorAll(".tech")[0];
const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".scroll-arrows > div");

let isDragStart = false;
let initialPageX, initialScrollLeft, positionDiff;
let firstTechCardWidth = firstTechCard.clientWidth + 20;

const showHideIcons = () => {
  if (carousel.scrollLeft == 0) {
    arrowIcons[0].classList.remove("show-arrow");
  } else {
    arrowIcons[0].classList.add("show-arrow");
  }
  if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth) {
    arrowIcons[1].classList.remove("show-arrow");
  } else {
    arrowIcons[1].classList.add("show-arrow");
  }
};

window.addEventListener("load", () => {
  showHideIcons();
});

// ------------------Filtring process
techTitles.forEach((title) => {
  title.addEventListener("click", () => {
    carousel.scrollLeft = 0; // turn carousel scroll to default
    // [1] Remove active class from all titles
    techTitles.forEach((title) => {
      title.classList.remove("active");
    });
    // [2] Add active class to clicked target
    title.classList.add("active");
    // [3] Stock class on a varialble
    let className = title.classList.item(0);
    // [4] Filter process and apply flex direction on carousel
    filterItems(className);
    // [5] Show or hide sliding arrows
    showHideIcons();
  });
});

function filterItems(className) {
  let itemsCounter = 0;
  // Filtring
  techCards.forEach((el) => {
    el.classList.remove("show-tech");
    if (el.classList.contains(className)) {
      el.classList.add("show-tech");
      itemsCounter++;
    }
  });
  // Adding flex direction
  if (document.documentElement.scrollWidth < 768) return;
  else {
    if (itemsCounter <= 6) {
      carousel.classList.remove("carousel-column");
      carousel.classList.add("carousel-row");
    } else {
      carousel.classList.remove("carousel-row");
      carousel.classList.add("carousel-column");
    }
  }
}

// ------------------sliding process
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // scroll carousel depending on icon id
    if (icon.id == "left") {
      carousel.scrollLeft -= firstTechCardWidth;
    } else {
      carousel.scrollLeft += firstTechCardWidth;
    }
    setTimeout(() => showHideIcons(), 60);
  });
});

const dragStart = (e) => {
  // Upadating global variables value on mouse down event
  isDragStart = true;
  initialPageX = e.pageX;
  initialScrollLeft = carousel.scrollLeft;
  carousel.classList.add("dragging");
};

const dragging = (e) => {
  // Scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  positionDiff = e.pageX - initialPageX;
  carousel.scrollLeft = initialScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
