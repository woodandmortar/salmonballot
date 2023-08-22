

function closeTab() {
  document.getElementById("introTab").style.display = "none";
}

function openQuest1(){
    document.getElementById("secretDiv").style.display = "block";
    document.getElementById("quest1complete").style.display = "block";
    startGame();
    startGame2();
    document.getElementById("schedule").style.display = "none";
    document.getElementById("shopping").style.display = "none";
    let intervalId; // To store the interval ID

function checkComplete() {
    if (document.getElementById('finalNumber').innerHTML === "Complete" &&
        document.getElementById('finalNumber2').innerHTML === "Complete" &&
        document.getElementById('finalNumber3').innerHTML === "Complete") {
        alert("You see password: reset017");
        clearInterval(intervalId); // Stop the interval
    }
}

// Start checking every second
intervalId = setInterval(checkComplete, 1000);

// Stop checking after 60 seconds
setTimeout(() => {
    clearInterval(intervalId);
}, 60000);

}

function closeQuest1() {
  document.getElementById("quest1").style.display = "none";
}



let currentStep = 0;

                function startGame(){

                    const progressBar = document.getElementById('tBoxProgress');
                    const progressText = document.getElementById('tPercentInput');

                    function updateProgressBar(progress) {
                        progressBar.style.width = progress + '%';
                        progressText.textContent = Math.round(progress) + '%';
                    }

                    function simulateProgress(duration) {
                        const interval = 20; // Time interval for updating progress in milliseconds
                        const totalSteps = 100;
                        const steps = Math.floor(duration / interval);
                        const stepSize = totalSteps / steps;


                        const progressInterval = setInterval(() => {
                            currentStep += stepSize;
                            updateProgressBar(currentStep);

                            if (currentStep >= 100) {
                                clearInterval(progressInterval);
                                document.getElementById('finalNumber').innerHTML = "Failed";
                            }
                        }, interval);
                    }

                    simulateProgress(20000); // 20 seconds in milliseconds


                                    }


                                    let counter = 1;
                                    const targetCount = 5;

                                    function increaseCounter() {
                                        counter++;
                                        document.getElementById('daysCounter').textContent = counter;

                                        if (counter === targetCount) {
                                            document.getElementById('finalNumber').innerHTML = "Complete";
                                              currentStep -= 50;
                                              updateProgressBar(currentStep);
                                        }
                                    }



                                    let currentStep2 = 0;

                                                  function startGame2(){

                                                      const progressBar2 = document.getElementById('tBoxProgress2');
                                                      const progressText2 = document.getElementById('tPercentInput2');

                                                      function updateProgressBar2(progress2) {
                                                          progressBar2.style.width = progress2 + '%';
                                                          progressText2.textContent = Math.round(progress2) + '%';
                                                      }

                                                      function simulateProgress2(duration2) {
                                                          const interval2 = 20; // Time interval for updating progress in milliseconds
                                                          const totalSteps2 = 100;
                                                          const steps2 = Math.floor(duration2 / interval2);
                                                          const stepSize2 = totalSteps2 / steps2;


                                                          const progressInterval2 = setInterval(() => {
                                                              currentStep2 += stepSize2;
                                                              updateProgressBar2(currentStep2);

                                                              if (currentStep2 >= 100) {
                                                                  clearInterval(progressInterval2);
                                                                  document.getElementById('finalNumber2').innerHTML = "Failed";
                                                              }
                                                          }, interval2);
                                                      }

                                                      simulateProgress2(20000); // 20 seconds in milliseconds


                                                                      }


                                                                      let counter2 = 1;
                                                                      const targetCount2 = 13;

                                                                      function increaseCounter2() {
                                                                          counter2++;
                                                                          document.getElementById('daysCounter2').textContent = counter2;

                                                                          if (counter2 === targetCount2) {
                                                                              document.getElementById('finalNumber2').innerHTML = "Complete";
                                                                                currentStep2 -= 50;
                                                                                updateProgressBar2(currentStep2);
                                                                          }
                                                                      }




                     const minNumber = 1;
                     const maxNumber = 20;
                     let targetNumber = generateRandomNumber(minNumber, maxNumber);
                     let attempts = 0;

                     function generateRandomNumber(min, max) {
                         return Math.floor(Math.random() * (max - min + 1)) + min;
                     }

                     function checkGuess() {
                         const guessInput = document.getElementById('guessInput');
                         const message = document.getElementById('message');
                         const userGuess = parseInt(guessInput.value);

                         if (isNaN(userGuess)) {
                             message.textContent = "Please enter a valid number.";
                             return;
                         }

                         attempts++;

                         if (userGuess === targetNumber) {
                             message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
                             targetNumber = generateRandomNumber(minNumber, maxNumber);
                             attempts = 0;
                             document.getElementById('finalNumber3').innerHTML = "Complete";
                         } else if (userGuess < targetNumber) {
                             message.textContent = "Try a higher number.";
                         } else {
                             message.textContent = "Try a lower number.";
                         }

                         guessInput.value = '';
                         guessInput.focus();
                     }
