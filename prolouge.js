

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


	 function countActive(){
	   document.getElementById("clicksRed").style.display = "block";
	   document.getElementById("clicksBlue").style.display = "block";
	   document.getElementById("clicksBlack").style.display = "block";
	   document.getElementById("clicksGold").style.display = "block";
	 }

	 function checkPasscode() {
	   const code = document.getElementById("passcode").value;

	   if(code === "1234") {
	     document.getElementById("secretDiv").style.display = "block";
	     document.getElementById("schedule").style.display = "none";
	   }

	   if(code === "4321") {
	     document.getElementById("books").style.display = "block";
	     document.getElementById("schedule").style.display = "none";
	   }
	 }


	 const bookFrame = document.getElementById('bookFrame');
	 bookFrame.src = 'globe.html';
	 const bookFrame2 = document.getElementById('bookFrame2');
	 bookFrame2.src = 'awakening.html';
