
function energyAuditActive(){
  document.getElementById("energyAudit").style.display = "block";
  document.getElementById("secretDiv").style.display = "none";
  document.getElementById("splash").style.display = "none";
  document.getElementById("globe").style.display = "none";
  document.getElementById("settingsMain").style.display = "none";
  document.getElementById("schedule").style.display = "none";
  document.getElementById("shopping").style.display = "none";
  document.getElementById("salmon").style.display = "none";
  navGlobe.classList.remove("active");
  navAudit.classList.add("active");
  navHome.classList.remove("active");
  navSchedule.classList.remove("active");
  navSettings.classList.remove("active");
  navShopping.classList.remove("active");
  navSalmon.classList.remove("active");
  books.style.display = 'none';
}

function scheduleActive(){
  document.getElementById("schedule").style.display = "block";
  document.getElementById("energyAudit").style.display = "none";
  document.getElementById("globe").style.display = "none";
  document.getElementById("splash").style.display = "none";
  document.getElementById("settingsMain").style.display = "none";
  document.getElementById("shopping").style.display = "none";
  document.getElementById("salmon").style.display = "none";
  navGlobe.classList.remove("active");
  navHome.classList.remove("active");
  navSchedule.classList.add("active");
  navAudit.classList.remove("active");
  navSettings.classList.remove("active");
  navShopping.classList.remove("active");
  navSalmon.classList.remove("active");
  books.style.display = 'none';
}

function splashActive(){
  document.getElementById("secretDiv").style.display = "none";
  document.getElementById("energyAudit").style.display = "none";
  document.getElementById("globe").style.display = "none";
  document.getElementById("splash").style.display = "block";
  document.getElementById("settingsMain").style.display = "none";
  document.getElementById("schedule").style.display = "none";
  document.getElementById("shopping").style.display = "none";
  document.getElementById("salmon").style.display = "none";
  navGlobe.classList.remove("active");
  navHome.classList.add("active");
  navAudit.classList.remove("active");
  navSchedule.classList.remove("active");
  navSettings.classList.remove("active");
  navShopping.classList.remove("active");
  navSalmon.classList.remove("active");
  books.style.display = 'none';
}

function settingsActive(){
  document.getElementById("secretDiv").style.display = "none";
  document.getElementById("globe").style.display = "none";
  document.getElementById("energyAudit").style.display = "none";
  document.getElementById("splash").style.display = "none";
  document.getElementById("settingsMain").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  document.getElementById("shopping").style.display = "none";
  document.getElementById("salmon").style.display = "none";
  navGlobe.classList.remove("active");
  navSettings.classList.add("active");
  navHome.classList.remove("active");
  navAudit.classList.remove("active");
  navSchedule.classList.remove("active");
  navShopping.classList.remove("active");
  navSalmon.classList.remove("active");
  books.style.display = 'none';
}

function shoppingActive(){
  document.getElementById("shopping").style.display = "block";
  document.getElementById("globe").style.display = "none";
  document.getElementById("secretDiv").style.display = "none";
  document.getElementById("energyAudit").style.display = "none";
  document.getElementById("splash").style.display = "none";
  document.getElementById("settingsMain").style.display = "none";
  document.getElementById("schedule").style.display = "none";
  document.getElementById("salmon").style.display = "none";
  navGlobe.classList.remove("active");
  navShopping.classList.add("active");
  navSettings.classList.remove("active");
  navHome.classList.remove("active");
  navAudit.classList.remove("active");
  navSchedule.classList.remove("active");
  navSalmon.classList.remove("active");
  books.style.display = 'none';
}

function salmonActive(){
  document.getElementById("salmon").style.display = "block";
  document.getElementById("globe").style.display = "none";
  document.getElementById("shopping").style.display = "none";
  document.getElementById("secretDiv").style.display = "none";
  document.getElementById("energyAudit").style.display = "none";
  document.getElementById("splash").style.display = "none";
  document.getElementById("settingsMain").style.display = "none";
  document.getElementById("schedule").style.display = "none";
  navSalmon.classList.add("active");
  navGlobe.classList.remove("active");
  navShopping.classList.remove("active");
  navSettings.classList.remove("active");
  navHome.classList.remove("active");
  navAudit.classList.remove("active");
  navSchedule.classList.remove("active");
  books.style.display = 'none';
}

function globeActive(){
  document.getElementById("globe").style.display = "block";
  document.getElementById("salmon").style.display = "none";
  document.getElementById("shopping").style.display = "none";
  document.getElementById("secretDiv").style.display = "none";
  document.getElementById("energyAudit").style.display = "none";
  document.getElementById("splash").style.display = "none";
  document.getElementById("settingsMain").style.display = "none";
  document.getElementById("schedule").style.display = "none";
  navGlobe.classList.add("active");
  navSalmon.classList.remove("active");
  navShopping.classList.remove("active");
  navSettings.classList.remove("active");
  navHome.classList.remove("active");
  navAudit.classList.remove("active");
  navSchedule.classList.remove("active");
  books.style.display = 'none';
}
