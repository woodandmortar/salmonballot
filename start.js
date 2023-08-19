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
    bookFrame.src = 'start.html';

    // Show the modal background
    modalBg.style.display = 'block';
		canvas_container.style.opacity = '0.1';
});

modalBg.addEventListener('click', () => {
    // Hide the modal background when clicked
    modalBg.style.display = 'none';
		canvas_container.style.opacity = '1';
    // Clear the iframe source
    bookFrame.src = '';
});


	 thoseDiv2.addEventListener("click", () => {
		 // Close the book and return to the main content
		 modalBg.style.display = 'none';
	 });




	 window.addEventListener('message', event => {
	   if (event.data.progressive !== undefined) {
	     const progressiveSpan = document.getElementById('progressive');
	     if (progressiveSpan) {
	       const currentValue = parseInt(progressiveSpan.textContent);
	       const newValue = currentValue + event.data.progressive;
	       progressiveSpan.textContent = newValue;
	     }
	   }
	 });
	 window.addEventListener('message', event => {
	   if (event.data.socialist !== undefined) {
	     const socialistSpan = document.getElementById('socialist');
	     if (socialistSpan) {
	       const currentValue = parseInt(socialistSpan.textContent);
	       const newValue = currentValue + event.data.socialist;
	       socialistSpan.textContent = newValue;
	     }
	   }
	 });
	 window.addEventListener('message', event => {
	   if (event.data.idealist !== undefined) {
	     const idealistSpan = document.getElementById('idealist');
	     if (idealistSpan) {
	       const currentValue = parseInt(idealistSpan.textContent);
	       const newValue = currentValue + event.data.idealist;
	       idealistSpan.textContent = newValue;
	     }
	   }
	 });
	 window.addEventListener('message', event => {
	   if (event.data.globalist !== undefined) {
	     const globalistSpan = document.getElementById('globalist');
	     if (globalistSpan) {
	       const currentValue = parseInt(globalistSpan.textContent);
	       const newValue = currentValue + event.data.globalist;
	       globalistSpan.textContent = newValue;
	     }
	   }
	 });
	 window.addEventListener('message', event => {
	   if (event.data.conservative !== undefined) {
	     const conservativeSpan = document.getElementById('conservative');
	     if (conservativeSpan) {
	       const currentValue = parseInt(conservativeSpan.textContent);
	       const newValue = currentValue + event.data.conservative;
	       conservativeSpan.textContent = newValue;
	     }
	   }
	 });
	 window.addEventListener('message', event => {
	   if (event.data.economist !== undefined) {
	     const economistSpan = document.getElementById('economist');
	     if (economistSpan) {
	       const currentValue = parseInt(economistSpan.textContent);
	       const newValue = currentValue + event.data.economist;
	       economistSpan.textContent = newValue;
	     }
	   }
	 });
	 window.addEventListener('message', event => {
	   if (event.data.realist !== undefined) {
	     const realistSpan = document.getElementById('realist');
	     if (realistSpan) {
	       const currentValue = parseInt(realistSpan.textContent);
	       const newValue = currentValue + event.data.realist;
	       realistSpan.textContent = newValue;
	     }
	   }
	 });
	 window.addEventListener('message', event => {
	   if (event.data.nationalist !== undefined) {
	     const nationalistSpan = document.getElementById('nationalist');
	     if (nationalistSpan) {
	       const currentValue = parseInt(nationalistSpan.textContent);
	       const newValue = currentValue + event.data.nationalist;
	       nationalistSpan.textContent = newValue;
	     }
	   }
	 });
	 window.addEventListener('message', event => {
	   if (event.data.populist !== undefined) {
	     const populistSpan = document.getElementById('populist');
	     if (populistSpan) {
	       const currentValue = parseInt(populistSpan.textContent);
	       const newValue = currentValue + event.data.populist;
	       populistSpan.textContent = newValue;
	     }
	   }
	 });




	 let populations = {
     progressive: 108655400,
     socialist: 244940004,
     idealist: 37840020,
     globalist: 120000000,
     conservative: 48544100,
     economist: 9014400,
     realist: 30074100,
     nationalist: 202000,
     populist: 244940004
   };

   function updatePopulations() {
     let totalPopulation = 1;

     for (let nation in populations) {
       const nationSpan = document.getElementById(nation);
       const currentValue = parseFloat(nationSpan.textContent);
       const populationChangeFactor = currentValue > 1 ? 0.9999999991 : 1.000000000000001;

       populations[nation] *= populationChangeFactor;
       nationSpan.textContent = Math.round(populations[nation].toFixed(2));

       totalPopulation += populations[nation];
			 const popSpan = document.getElementById('population');
			 popSpan.textContent = Math.round(totalPopulation);
     }

     const avgPopulation = totalPopulation / Object.keys(populations).length;
     const avgSpan = document.getElementById('average');
     avgSpan.textContent = Math.round(avgPopulation.toFixed(2));

     const statusSpan = document.getElementById('status');
     statusSpan.textContent = avgPopulation > 1 ? "Above 1" : "Under 1";
   }

   let interval;

   function startUpdating() {
     interval = setInterval(updatePopulations, 1000); // Update every second
   }
