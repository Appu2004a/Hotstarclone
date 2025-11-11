let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "loren ipsum dolor sit amet consectetur adipisicing alit. Velit porro et veniam expect",
    image: "images/slider 2.PNG"
  },
  {
    name: "loki",
    des:
      "loren ipsum dolor sit amet consectetur adipisicing alit. Velit porro et veniam expect",
    image: "images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des:
      "loren ipsum dolor sit amet consectetur adipisicing alit. Velit porro et veniam expect",
    image: "images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    des:
      "loren ipsum dolor sit amet consectetur adipisicing alit. Velit porro et veniam expect",
    image: "images/slider 4.PNG"
  },
  {
    name: "luka",
    des:
      "loren ipsum dolor sit amet consectetur adipisicing alit. Velit porro et veniam expect",
    image: "images/slider 5.PNG"
  }
];

const caraousel = document.querySelector(".caraousel");
let sliders = [];
let slideIndex = 0;

const createslide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));

  content.append(h1);
  console.log(content);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  caraousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createslide();
}

setInterval(() => {
  createslide();
}, 3000);

//video cards

const videocards = [...document.querySelectorAll(".video-card")];

videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card slider
let cardcontainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
cardcontainers.forEach((item, i) => {
  let containerdimensions = item.getBoundingClientRect();
  let containerwidth = containerdimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerwidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerwidth + 200;
  });
});
