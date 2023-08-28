
let baseData = [];
  let conversationData = [];

  // Function to trigger the download of base.json from the provided URL
  function downloadBaseJSON() {
      // URL of the base.json file
      const fileURL = 'https://woodandmortar.com/salmonballot/learn/models/base.json';

      // Fetch the content of the file
      fetch(fileURL)
          .then(response => response.blob())
          .then(blob => {
              // Create a link element for download
              const a = document.createElement('a');
              a.href = URL.createObjectURL(blob);
              a.download = 'base.json';

              // Append the link to the document and trigger the download
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
          })
          .catch(error => {
              console.error("Error downloading the file:", error);
          });
  }

  // Sample usage: Attach the function to a button's onclick event
  // <button onclick="downloadBaseJSON()">Download base.json</button>


  function levenshtein(a, b) {
      if (a.length === 0) return b.length;
      if (b.length === 0) return a.length;

      let matrix = [];

      for (let i = 0; i <= b.length; i++) {
          matrix[i] = [i];
      }

      for (let j = 0; j <= a.length; j++) {
          matrix[0][j] = j;
      }

      for (let i = 1; i <= b.length; i++) {
          for (let j = 1; j <= a.length; j++) {
              if (b.charAt(i - 1) === a.charAt(j - 1)) {
                  matrix[i][j] = matrix[i - 1][j - 1];
              } else {
                  matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
              }
          }
      }

      return matrix[b.length][a.length];
  }

  function getClosestQuestion(input, data) {
      let closestQuestion = null;
      let minDistance = Infinity;

      for (const entry of data) {
          const distance = levenshtein(input, entry[0]);
          if (distance < minDistance) {
              minDistance = distance;
              closestQuestion = entry[0];
          }
      }

      return closestQuestion;
  }

  function sendMessage() {
    const inputElem = document.getElementById('userInput');
const message = inputElem.value;
inputElem.value = '';

// Check for cmd command before processing the message
if (message.startsWith('cmd')) {
    parseCollectiveCommand(message);
    return; // Exit the function after processing the command
}

    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML += '<p>User: ' + message + '</p>';

    const response = getResponse(message);
    chatWindow.innerHTML += '<p>Bot: ' + response + '</p>';

    // Check for redundancy before updating the conversationData
    if (!isRedundant(message, response)) {
      conversationData.push([message, response, ""]);
    }

    // Update the JSON editor to reflect the changes
    updateJSONDisplay();

    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function isRedundant(question, answer) {
    for (const entry of conversationData) {
      if (entry[0] === question && entry[1] === answer) {
        return true;
      }
    }
    return false;
  }

  function getResponse(message) {
      let response = searchInData(message, baseData);
      if (!response) {
          response = searchInData(message, conversationData);
      }
      if (!response) {
          return 'I can\'t answer that until you provide me with a DataSchool.JSON file.';
      }
      return response;
  }

  function searchInData(message, data) {
      const closestQuestion = getClosestQuestion(message, data);
      for (const entry of data) {
          if (entry[0] === closestQuestion) {
              return entry[1];
          }
      }
      return null;
  }

  function updateJSONDisplay() {
      const jsonEditor = document.getElementById('jsonEditor');
      jsonEditor.value = JSON.stringify(conversationData, null, 2);
  }

  function isValidDataFormat(data) {
      if (!Array.isArray(data)) {
          return false;
      }
      for (const entry of data) {
          if (!Array.isArray(entry) || entry.length !== 3 || typeof entry[0] !== 'string' || typeof entry[1] !== 'string' || typeof entry[2] !== 'string') {
              return false;
          }
      }
      return true;
  }

  function importBaseDataSet(event) {
      const files = event.target.files;
      if (files.length === 0) {
          alert("No file selected. Please select a file and try again.");
          return;
      }
      const file = files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
          try {
              const importedData = JSON.parse(e.target.result);
              if (isValidDataFormat(importedData)) {
                  baseData = importedData;
                  event.target.disabled = true; // Disable the base data set input after uploading
              } else {
                  alert("The imported data does not match the expected format.");
              }
          } catch (error) {
              alert("Error parsing base data set: " + error.message);
          }
      };
      reader.readAsText(file);
  }

  function importConversationDataSet(event) {
      const files = event.target.files;
      if (files.length === 0) {
          alert("No file selected. Please select a file and try again.");
          return;
      }
      const file = files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
          try {
              const importedData = JSON.parse(e.target.result);
              if (isValidDataFormat(importedData)) {
                  conversationData = importedData;
                  updateJSONDisplay();
              } else {
                  alert("The imported data does not match the expected format.");
              }
          } catch (error) {
              alert("Error parsing conversation data set: " + error.message);
          }
      };
      reader.readAsText(file);
  }

  function compileAndExportJSON() {
      const jsonEditor = document.getElementById('jsonEditor');
      const blob = new Blob([jsonEditor.value], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'compiledData.json';
      a.click();
  }

  function updateConversationData() {
      const jsonEditor = document.getElementById('jsonEditor');
      try {
          const newData = JSON.parse(jsonEditor.value);
          if (Array.isArray(newData)) {
              let validEntries = 0;
              for (const entry of newData) {
                  if (Array.isArray(entry) && entry.length === 3) {
                      conversationData.push(entry);
                      validEntries++;
                  }
              }
              if (validEntries > 0) {
                  updateJSONDisplay();
                  alert("Data updated successfully!");
              } else {
                  alert("Invalid data format. Please ensure you have the format [question, answer, liveChange].");
              }
          } else {
              alert("Invalid data format. Please ensure you have the format [question, answer, liveChange].");
          }
      } catch (error) {
          alert("Error updating data: " + error.message);
      }
  }


function parseCollectiveCommand(data) {
  const collectiveRegex = /cmd \[([a-z]+)\] \[(\d+)\] \[([a-z]+)\]/i;
  const match = data.match(collectiveRegex);

  if (match) {
    const action = match[1];
    const value = parseInt(match[2], 10);
    const category = match[3];

    executeCollectiveAction(action, value, category);
  }
}

function executeCollectiveAction(action, value, category) {
  switch (action.toLowerCase()) {
    case 'add':
      postMessageToParent(value, category);
      break;
    case 'subtract':
      postMessageToParent(-value, category);
      break;
    default:
      console.error('Invalid action:', action);
  }
}

function postMessageToParent(value, category) {
  const message = {};
  message[category] = value;
  window.parent.postMessage(message, '*');
}




// Usage:
// parseCollectiveCommand("Some chat data cmd [add] [10000] [nationalist]");
// parseCollectiveCommand("Another example cmd [subtract] [10000][populist]");
