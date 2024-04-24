var numProjects = 0;

function CreateProject(name, techStack, images) {
  var wholeProject = document.createElement("div");
  wholeProject.id = "fixborder2";

  var projectParent = document.createElement("div");
  projectParent.id = "projectParent";
  projectParent.className = "bordergradient";
  wholeProject.appendChild(projectParent);

  var borderfix = document.createElement("div");
  borderfix.id = "borderfix";
  projectParent.appendChild(borderfix);

  var project = document.createElement("div");
  project.id = "project";
  borderfix.appendChild(project);

  var slideshow = document.createElement("div");
  slideshow.classList = "slideshow-container";

  var mySlide = document.createElement("div");
  mySlide.classList = "mySlides fade photo";

  images.forEach((pic) => {
    var mySlide = document.createElement("div");
    mySlide.classList = "mySlides fade photo";

    var img = document.createElement("img");
    img.src = pic;
    img.style.width = "100%";
    img.style.display = "block";
    mySlide.appendChild(img);

    slideshow.appendChild(mySlide);
  });

  var leftArrow = "\u276E";
  var rightArrow = "\u276F";

  var prev = document.createElement("a");
  prev.classList = "prev";
  prev.name = numProjects;
  prev.addEventListener("click", function () {
    console.log("clicked prev");
    plusSlides(-1, prev.name);
  });
  prev.innerText = leftArrow;
  slideshow.appendChild(prev);

  var next = document.createElement("a");
  next.classList = "next";
  next.name = numProjects;
  next.addEventListener("click", function () {
    console.log("clicked next");
    plusSlides(1, next.name);
  });
  next.innerText = rightArrow;
  slideshow.appendChild(next);

  project.appendChild(slideshow);

  var textbox = document.createElement("div");
  textbox.id = "textbox";
  project.appendChild(textbox);

  var nameText = document.createElement("h3");
  nameText.id = "name";
  nameText.innerText = name;
  textbox.appendChild(nameText);

  var techStackText = document.createElement("h5");
  techStackText.id = "techStack";
  techStackText.innerText = "Tech Stack: ";
  techStack.forEach((tech, ind) => {
    if (ind === techStack.length - 1) {
      techStackText.innerText += tech;
    } else {
      techStackText.innerText += tech + ", ";
    }
  });
  textbox.appendChild(techStackText);

  document.body.appendChild(wholeProject);
  numProjects++;
}

CreateProject(
  "In Color",
  ["XCode", "Swift"],
  ["../images/InColor/InColor.png", "images/InColor/inColorSavedImages.png", "images/InColor/InColorSettings.png"]
);
CreateProject(
  "Memphis Grizzlies Fan Website",
  ["HTML", "CSS"],
  [
    "images/MemphisGrizzliesWeb/Home.png",
    "images/MemphisGrizzliesWeb/Roster.png",
    "images/MemphisGrizzliesWeb/Stats.png",
    "images/MemphisGrizzliesWeb/Schedule.png",
    "images/MemphisGrizzliesWeb/Footer.png",
    "images/MemphisGrizzliesWeb/ImageCarousel.png",
    "images/MemphisGrizzliesWeb/SocialMedia.png",
  ]
);

CreateProject(
  "Sleep, Rest, Diet, and Exercise",
  ["Unity2D", "C#"],
  [
    "images/SleepRestDietExercise/MainMenu.png",
    "images/SleepRestDietExercise/Apartment.png",
    "images/SleepRestDietExercise/Gym.png",
    "images/SleepRestDietExercise/Map.png",
    "images/SleepRestDietExercise/Restaurant.png",
  ]
);

// Image slideshow from https://www.w3schools.com/howto/howto_js_slideshow.asp as starter code
var slideIndexContainer = {};
for (let i = 0; i < document.getElementsByClassName("slideshow-container").length; i++) {
  slideIndexContainer[i] = [document.getElementsByClassName("slideshow-container")[i], i];
}

console.log(slideIndexContainer[numProjects - 1]);

for (let i = 0; i < Object.keys(slideIndexContainer).length; i++) {
  showSlides(1, i);
}

function plusSlides(n, ind) {
  slideIndexContainer[ind][1] += n;
  showSlides(slideIndexContainer[ind][1], ind);
}

// function currentSlide(n, ind) {
//   showSlides((slideIndexContainer[ind][1] = n), ind);
// }

function showSlides(n, ind) {
  console.log("n = " + n + " ind = " + ind);
  let i;
  let slides = slideIndexContainer[ind][0].getElementsByClassName("mySlides");

  // console.log("slides.length = " + slides.length);

  if (n > slides.length - 1) {
    slideIndexContainer[ind][1] = 0;
  }

  if (n < 1) {
    slideIndexContainer[ind][1] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexContainer[ind][1]].style.display = "block";
}

function LargestImage(images) {
  let largest = images[0];
  images.forEach((image) => {
    if (image.width > largest.width) {
      largest = image;
    }
  });
  return largest;
}
