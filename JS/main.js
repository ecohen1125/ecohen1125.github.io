var body = document.body;
var mainFlex = document.getElementById('mainFlex');
var leftDiv = document.getElementById("left");
var rightDiv = document.getElementById("right");

mainFlex.style.width = "100vw";
mainFlex.style.height = "100vh";

leftDiv.style.width = "100vw";
leftDiv.style.height = "100vh";

leftDiv.style.width = "50%";
rightDiv.style.width = "50%";

var aboutBtn = document.getElementById("about");
var projectsBtn = document.getElementById("projects");
var contactBtn = document.getElementById("contact");

aboutBtn.addEventListener("click", function() {
    window.location.replace('../about.html');
});

projectsBtn.addEventListener("click", function() {
    window.location.replace('../projects.html');
});

contactBtn.addEventListener("click", function() {
    window.location.replace('../contact.html');
});