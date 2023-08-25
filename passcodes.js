
function checkPasscode() {
  const code = document.getElementById("passcode").value;
  const code3 = document.getElementById("passcode2").value;

  if(code === "587112349") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'book.html';
  }
  if(code === "PeeLonHusk") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'success.html';
    alert('Critical notice! Population decrease resolved.  Crisis Level: 0 - Chapter 1 Anomaly complete. Chapter 2 Pending....');
    status = 0;
  }

  if(code === "reset017") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    document.getElementById("secretDiv").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'https://mozilla.github.io/pdf.js/web/viewer.html?file=https://woodandmortar.com/salmonballot/nations/NAEAbbzi.pdf';
    alert('Critical notice! Population decrease resolved.  Crisis Level: 0 - Quest 1 Anomaly complete.');
    status = 0;
  }

  if(code === "reset9944") {
    scheduleActive();
    bookFrame2.src = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://woodandmortar.com/salmonballot/nations/PEAFaxium.pdf";
    alert('Critical notice! Population decrease resolved.  Crisis Level: 0 - Quest 1 Anomaly complete.');
    status = 0;
  }

}

function checkPasscode2() {
  const code2 = document.getElementById("passcode2").value;
  if(code2 === "Ventura" || code2 === "ventura") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'Ventura.html';
    document.getElementById("venturaID").style.display = "block";
  }
  if(code2 === "Trantum" || code2 === "trantum") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'Trantum.html';
    document.getElementById("trantumID").style.display = "block";
  }
  if(code2 === "Collective" || code2 === "collective") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'Collective.html';
    document.getElementById("Collective.html").style.display = "block";
  }
  if(code2 === "Mercado" || code2 === "mercado") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'Mercado.html';
    document.getElementById("mercadoID").style.display = "block";
  }
  if(code2 === "Faxium" || code2 === "faxium") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'https://mozilla.github.io/pdf.js/web/viewer.html?file=https://woodandmortar.com/salmonballot/nations/PEAFaxium.pdf';
    document.getElementById("faxiumID").style.display = "block";
  }
  if(code2 === "Iron Coast" || code2 === "iron coast" || code2 === "IronCoast" || code2 === "ironcoast") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'IronCoast.html';
    document.getElementById("ironcoastID").style.display = "block";
  }
  if(code2 === "Eventus" || code2 === "eventus") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'Eventus.html';
    document.getElementById("eventusID").style.display = "block";
  }
  if(code2 === "Abzimuth" || code2 === "abzimuth") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'https://mozilla.github.io/pdf.js/web/viewer.html?file=https://woodandmortar.com/salmonballot/nations/NAEAbbzi.pdf';
    document.getElementById("abzimuthID").style.display = "block";
  }
  if(code2 === "Ocidentica" || code2 === "ocidentica") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    scheduleActive();
    bookFrame2.src = 'ocidentica.html';
    document.getElementById("ocidenticaID").style.display = "block";
  }

}


function checkPasscode4() {
  const code4 = document.getElementById("quest2code").value;
  if(code4 === "reset0914") {
    scheduleActive();
    bookFrame2.src = 'vid004.html';
    bookFrame.src = 'vid004.html';
    alert('Critical notice! Anomaly solved, Crisis Level: 0 - exponential population decrease reversed.');
    rotationSpeed2 = 0.000000005;
    status = 0;
  }
  else if(true) {
    alert('Critical Error! Population decrease exponentially increased due to bad processing, Crisis Level: 4 - solve the password.');
    status = 4;
  }

}


function getVideos(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  scheduleActive();
  bookFrame2.src = 'vid004.html';
}


function ventura(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  scheduleActive();
  bookFrame2.src = 'Pending.html';
}
function trantum(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  scheduleActive();
  bookFrame2.src = 'vid004.html';
}
function mercado(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  scheduleActive();
  bookFrame2.src = 'Pending.html';
}
function faxium(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  scheduleActive();
  bookFrame2.src = 'https://mozilla.github.io/pdf.js/web/viewer.html?file=https://woodandmortar.com/salmonballot/nations/PEAFaxium.pdf';
}
function ironcoast(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  scheduleActive();
  bookFrame2.src = 'Pending.html';
}
function eventus(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  scheduleActive();
  bookFrame2.src = 'Pending.html';
}
function abzimuth(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  scheduleActive();
  bookFrame2.src = 'https://mozilla.github.io/pdf.js/web/viewer.html?file=https://woodandmortar.com/salmonballot/nations/NAEAbbzi.pdf';
}
function ocidentica(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  scheduleActive();
  bookFrame2.src = 'Pending.html';
}

function collective(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  scheduleActive();
  bookFrame2.src = 'Collective.html';
}

function n002(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  scheduleActive();
  bookFrame2.src = 'awakening.html';
}
