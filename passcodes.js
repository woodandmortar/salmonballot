
function checkPasscode() {
  const code = document.getElementById("passcode").value;

  if(code === "587112349") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = 'book.html';
  }
  if(code === "PeeLonHusk") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = 'success.html';
    bookFrame.src = 'success.html';
    alert('Critical notice! Population decrease resolved. Chapter 1 Anomaly complete. Chapter 2 Pending....');
    decreaseAmount = 53710;
  }

}

function checkPasscode2() {
  const code2 = document.getElementById("passcode2").value;
  if(code2 === "Ventura" || code2 === "ventura") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = 'Ventura.html';
    bookFrame.src = 'Ventura.html';
  }
  if(code2 === "Trantum" || code2 === "trantum") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = 'Trantum.html';
    bookFrame.src = 'Trantum.html';
  }
  if(code2 === "Collective" || code2 === "collective") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = 'Collective.html';
    bookFrame.src = 'Collective.html';
  }
  if(code2 === "Mercado" || code2 === "mercado") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = 'Mercado.html';
    bookFrame.src = 'Mercado.html';
  }
  if(code2 === "Faxium" || code2 === "faxium") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = 'Faxium.html';
    bookFrame.src = 'Faxium.html';
  }
  if(code2 === "Iron Coast" || code2 === "iron coast" || code2 === "IronCoast" || code2 === "ironcoast") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = 'IronCoast.html';
    bookFrame.src = 'IronCoast.html';
  }
  if(code2 === "Eventus" || code2 === "eventus") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = 'Eventus.html';
    bookFrame.src = 'Eventus.html';
  }
  if(code2 === "Abzimuth" || code2 === "abzimuth") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = 'Abzimuth.html';
    bookFrame.src = 'Abzimuth.html';
    document.getElementById("abzimuthID").style.display = "block";
  }
  if(code2 === "Commune" || code2 === "commune") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = 'Commune.html';
    bookFrame.src = 'Commune.html';
  }

}

function checkPasscode3() {
  const code3 = document.getElementById("passcode3").value;
  if(code3 === "reset017") {
    document.getElementById("books").style.display = "block";
    document.getElementById("schedule").style.display = "none";
    settingsActive();
    bookFrame2.src = '16122042361017148.html';
    bookFrame.src = '16122042361017148.html';
    alert('Critical notice! Population decrease exponentially increased due to quest logic, expecting new HPXML parameters.');
    decreaseAmount = 2098000;
  }
  else if(true) {
    alert('Critical Error! Population decrease exponentially increased due to bad processing, solve the password.');
    decreaseAmount = 20980000;
  }

}

function abzimuth(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  settingsActive();
  bookFrame2.src = 'Abzimuth.html';
  bookFrame.src = 'Abzimuth.html';
}

function collective(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  settingsActive();
  bookFrame2.src = 'Collective.html';
  bookFrame.src = 'Collective.html';
}

function n002(){
  document.getElementById("books").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  settingsActive();
  bookFrame2.src = 'awakening.html';
  bookFrame.src = 'awakening.html';
}
