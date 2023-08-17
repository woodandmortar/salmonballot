var thatDiv;

init();

function init()
{
	thatDiv = document.getElementById('thatDiv');
	setInterval(randomiseBlur, 500);
	threeDJitter();
	setInterval(threeDJitter, 3000);
	randomiseBlur();
}

function threeDJitter()
{
	let randomX = Math.random()*3; //0-5
	let randomY = Math.random()*3; //30-35
	let randomZ = Math.random()*3;
	let randomTime = Math.random()*2000+2000;
		thatDiv.style.transform = 'rotateX('+randomX+'deg) rotateY('+randomY+'deg) rotateZ('+randomZ+'deg)';

	randomX = Math.random()*8; //0-5
	randomZ = Math.random()*8;
	randomY = Math.random()*-5-40; //-45 to -40
	randomTime = Math.random()*2000+2000;
	let allText = document.getElementsByClassName('textGlow');
}

function randomiseBlur()
{
	// let allText = document.getElementsByTagName('h1');
	let allText = document.getElementsByClassName('textGlow');
	let randomBlur = Math.random()*2;
	for(var i = 0; i < allText.length; i++)
  {
		let thisText = allText[i];

		thisText.style.textShadow = '0 0 '+randomBlur+'vw rgba(125,240,250,0.8)';
		let o = 1;
	}

	let allImage = document.getElementsByClassName('imageGlow');
}


// script.js

const modalBg = document.getElementById('modalBg');
const bookFrame = document.getElementById('bookFrame');

thoseDiv1.addEventListener('click', () => {
    // Set the source of the iframe to the book.html file
    bookFrame.src = 'book.html';

    // Show the modal background
    modalBg.style.display = 'block';
});

modalBg.addEventListener('click', () => {
    // Hide the modal background when clicked
    modalBg.style.display = 'none';
    // Clear the iframe source
    bookFrame.src = '';
});


	 thoseDiv2.addEventListener("click", () => {
		 // Close the book and return to the main content
		 modalBg.style.display = 'none';
	 });

	 function createLetterMesh(text, font, size) {
	     const textGeometry = new THREE.TextGeometry(text, {
	         font: font,
	         size: size,
	         height: 5, // Adjust as needed
	         curveSegments: 12,
	         bevelEnabled: true,
	         bevelThickness: 1,
	         bevelSize: 0.5,
	         bevelOffset: 0,
	         bevelSegments: 5,
	     });

	     const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
	     const textMesh = new THREE.Mesh(textGeometry, textMaterial);
	     return textMesh;
	 }
