function encodeInput(text) {
  return encodeURIComponent(input);
 }

 function decodeOutput(probabilities) {
  return encodeURIComponent(output);
 }

 // Async function to run model
 async function runModel() {
   const model = await tf.loadLayersModel('model.json');
   const inputText = document.getElementById('user-input').value;
   const inputData = tf.tensor2d([encodeInput(inputText)]);
   const predictions = await model.predict(inputData).data();
   return decodeOutput(predictions);
 }

 // Function to get and display model response
 async function getResponse() {
   const response = await runModel(); // Get response from model asynchronously
   document.getElementById("model-response").innerHTML = "<p>" + response + "</p>";
 }
