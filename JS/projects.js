var numProjects = 0;

var projectsButton = document.getElementById("projtctBtn");
var addProjectMenu = document.getElementById("bigAddProject");

addProjectMenu.style.display = "none";

function CreateProject(name, techStack, images, description, link) {
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
    plusSlides(-1, prev.name);
  });
  prev.innerText = leftArrow;
  slideshow.appendChild(prev);

  var next = document.createElement("a");
  next.classList = "next";
  next.name = numProjects;
  next.addEventListener("click", function () {
    plusSlides(1, next.name);
  });
  next.innerText = rightArrow;
  slideshow.appendChild(next);

  project.appendChild(slideshow);

  var textbox = document.createElement("div");
  textbox.id = "textbox";
  textbox.classList = "newproject";
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

  // description
  var descriptionBlock = document.createElement("div");
  descriptionBlock.id = "descriptionFlex";

  var descriptionInner = document.createElement("div");
  descriptionInner.id = "mainDescription";
  descriptionBlock.appendChild(descriptionInner);

  var descriptionP = document.createElement("p");
  descriptionP.innerHTML = description;
  descriptionInner.appendChild(descriptionP);

  var projectLink = document.createElement("a");
  projectLink.href = link;
  projectLink.id = "projectLink";
  projectLink.innerText = "Link to the Project";
  descriptionInner.appendChild(projectLink);

  textbox.addEventListener("click", function () {
    if (descriptionBlock.style.display == "flex") {
      descriptionBlock.style.display = "none";
    } else {
      descriptionBlock.style.display = "flex";
    }
  });

  descriptionBlock.style.display = "none";

  wholeProject.appendChild(descriptionBlock);

  document.body.appendChild(wholeProject);
  numProjects++;
}

CreateProject(
  "In Color",
  ["XCode", "Swift"],
  ["images/InColor/InColor.png", "images/InColor/InColorSavedImages.png", "images/InColor/InColorSettings.png"],
  "In Color is a drawing app that lets the user draw on a canvas. It has setting that let the user chnage the color of the background, the color of the pen, and the thickness of the pen. It also allows for the user to trace images that can be uploaded. Finally, the user can save their drawing to be viewed later. I implemented this part using persistent storage.",
  "https://github.com/ecohen1125/In-Color"
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
  ],
  "Memphis Grizzlies Fan Website is a website that I made to display information about the Memphis Grizzlies. It shows the roster, stats, and schedule of the team. It also has a footer with links to my social media. The website is responsive and has a carousel of images of the team. The stats page is also interactive and allows the user to filter the stats by player and sort each stats by highest and lowest.",
  "https://github.com/ecohen1125/MemphisGrizzliesFanWebsite"
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
  ],
  "This game is designed for educators to use to teach students about sleep, rest, diet, and exercise. The game has a map that allows you to go between the Apartment, Gym, and the Restaurant. The goal of the game is to keep your energy bar full and go through a day as a person living alone in an apartment. The game is designed to be a fun way to learn about the importance of sleep, rest, diet, and exercise.",
  "https://resilience-inc.itch.io/eat"
);

CreateProject(
  "IU Hillel App",
  ["React Native", "Firebase", "CSS"],
  ["images/zipline.jpg"],
  "The IU Hillel App is an app that I made for the IU Hillel. The app has a calendar that shows all the events that are happening at the Hillel. They are in chronological order. This uses the Google Calendar API. I had to manually sort them using an algorithm that I made. It also has a page that lets you check into events. This only works if you are in the building because I added a geo locator in a range around the building. The check in data is then stored in Firebase and can be sent to IU Hillel for their own use.",
  "https://github.com/ecohen1125/IUHillelApp/tree/main"
);

CreateProject(
  "Crystal Assault: Veiled Conquest",
  ["Unity3D", "C#"],
  ["images/CrystalAssaultVeiledConquest/MainMenu.png", "images/CrystalAssaultVeiledConquest/game.png", "images/CrystalAssaultVeiledConquest/Credits.png", "images/CrystalAssaultVeiledConquest/Settings.png", "images/CrystalAssaultVeiledConquest/SeedMenu.png"],
  "This project wa part of a game jam that I did for a class with 2 other people. We had 48 hours to make a game with the theme being 'reverse.' We interpreted this theme as the reversal of a core game mechanic. Most tower defense games have the player root their towers down, while mobile enemies are able to move through a path with the goal of destroying the player's towers. We applied our interpretation by creating a reverse tower defense, where the player is essentially the antagonist, spawning the evil units to defeat the towers. The game has a full menu system with settings, a way to choose random maps using seeds, and detailed art/graphics.",
  "https://github.com/KYANI7E/TheStoats"
);

// Starter code for Image slideshow from https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndexContainer = {};
for (let i = 0; i < document.getElementsByClassName("slideshow-container").length; i++) {
  slideIndexContainer[i] = [document.getElementsByClassName("slideshow-container")[i], 0];
}

for (let i = 0; i < Object.keys(slideIndexContainer).length; i++) {
  showSlides(1, i);
}

function plusSlides(n, ind) {
  slideIndexContainer[ind][1] += n;
  showSlides(slideIndexContainer[ind][1], ind);
}

function showSlides(n, ind) {
  let i;
  let slides = slideIndexContainer[ind][0].getElementsByClassName("mySlides");

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

projectsButton.addEventListener("click", function () {
  if (addProjectMenu.style.display == "none") {
    addProjectMenu.style.display = "flex";
  } else {
    addProjectMenu.style.display = "none";
  }
});

var submitBtn = document.getElementById("submitProject");

submitBtn.addEventListener("click", function () {
  var name = document.getElementById("projectName").value;
  var techStack = document.getElementById("techStack").value.split(", ");
  var files = document.getElementById("images").files;
  var description = document.getElementById("projectDesc").value;
  var link = document.getElementById("projectLink").value;

  console.log("Project Name: " + name);
  console.log("Tech Stack: " + techStack);
  console.log("Description: " + description);
  console.log("Link: " + link);

  // CreateProject(name, techStack, images, description, link);

  addProjectMenu.style.display = "none";
});
