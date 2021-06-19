// Extra 
var activitesView = document.getElementById("activites");
activitesView.style.display = "block";
var onlinePlatformView = document.getElementById("onlinePlatform");
var knownLangView = document.getElementById("knownLang");
var whoKnowsmeView = document.getElementById("whoKnowsme");

// RadioBtn for extra
var activitesBtn = document.getElementById("myRadio12");
activitesBtn.checked = true;
var onlinePlatformBtn = document.getElementById("myRadio22");
var knownLangBtn = document.getElementById("myRadio32");
var whoKnowsmeBtn = document.getElementById("myRadio42");

activitesBtn.addEventListener("click", ()=>{
    activitesView.style.display = "block";
    onlinePlatformView.style.display = "none";
    knownLangView.style.display = "none";
    whoKnowsmeView.style.display = "none";
    
})
;
onlinePlatformBtn.addEventListener("click", ()=>{
    activitesView.style.display = "none";
    onlinePlatformView.style.display = "flex";
    knownLangView.style.display = "none";
    whoKnowsmeView.style.display = "none";
    
});
knownLangBtn.addEventListener("click", ()=>{
    activitesView.style.display = "none";
    onlinePlatformView.style.display = "none";
    knownLangView.style.display = "flex";
    whoKnowsmeView.style.display = "none";
    
});
whoKnowsmeBtn.addEventListener("click", ()=>{
    activitesView.style.display = "none";
    onlinePlatformView.style.display = "none";
    knownLangView.style.display = "none";
    whoKnowsmeView.style.display = "block";
    
})