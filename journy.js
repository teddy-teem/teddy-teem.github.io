// Journey
var educationView = document.getElementById("education");
educationView.style.display = "block";
var trainingView = document.getElementById("training");
var projectsView = document.getElementById("projects");
var skillsView = document.getElementById("skills");
var awardsView = document.getElementById("awards");

// radiobutn for Journy
var eduBtn = document.getElementById("myRadio1");
eduBtn.checked = true
var trainBtn = document.getElementById("myRadio2");
var projectsBtn = document.getElementById("myRadio5");
var skillsBtn = document.getElementById("myRadio3");
var awardsBtn = document.getElementById("myRadio4");




eduBtn.addEventListener("click", ()=>{
    trainingView.style.display = "none";
    skillsView.style.display = "none";
    projectsView.style.display = "none";
    educationView.style.display = "block";
    awardsView.style.display = "none";
});
trainBtn.addEventListener("click",  ()=>{
    educationView.style.display = "none";
    trainingView.style.display = "block"
    projectsView.style.display = "none";
    skillsView.style.display = "none";
    awardsView.style.display = "none";
});
skillsBtn.addEventListener("click", ()=>{
    educationView.style.display = "none";
    trainingView.style.display = "none";
    projectsView.style.display = "none";
    skillsView.style.display = "flex";
    awardsView.style.display = "none";
});
awardsBtn.addEventListener("click", ()=>{
    educationView.style.display = "none";
    trainingView.style.display = "none"
    projectsView.style.display = "none";
    skillsView.style.display = "none";
    awardsView.style.display = "block"
});
projectsBtn.addEventListener("click", ()=>{
    educationView.style.display = "none";
    trainingView.style.display = "none"
    skillsView.style.display = "none";
    awardsView.style.display = "none";
    projectsView.style.display = "block";
});
