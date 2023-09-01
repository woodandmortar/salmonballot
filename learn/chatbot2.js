

// Define responses for 'faxium'
const faxiumResponses = {
  "Hello": "Hey, it's Faxium here!",
  "How are you": "I'm always in the hacking mood. What about you?",
  // ... add more questions and answers as needed for faxium
};

// List of questions 'faxium' will ask
const faxiumQuestions = [
  'How are you?',
  'What is the capital of France?',
  'Tell me a joke.',
  'How does the sun rise?',
  'Who are you?',
  'What is the pulse network?'
];

let currentQuestionIndex = 0;

function handleUserInput() {
    const userInputField = document.getElementById('userInput');
    const message = userInputField.value;
    if (message) {
        sendFaxiumMessage(message, 'User');
        userInputField.value = '';  // Clear the input field
    }
}

// Function to get response from faxium
function getFaxiumResponse(question) {
  return faxiumResponses[question] || "Faxium doesn't know that.";
}

function sendFaxiumMessage(message, sender) {
    const chatWindow = document.getElementById('chatWindow');
    let response;

    // Convert the message to lowercase for case-insensitive checks
    const lowerCaseMessage = message.toLowerCase();

    // Check if the message starts with '@faxium' (case-insensitive and ignoring spaces)
    if (lowerCaseMessage.match(/^@\s*faxium\s+/)) {
        // Remove '@faxium' from the message (case-insensitive and ignoring spaces)
        const faxiumMessage = message.replace(/^@\s*faxium\s+/i, '').trim();
        response = "Faxium: " + (faxiumResponses[faxiumMessage] || "doesn't know that.");
    } else {
        if (sender === 'Faxium') {
            response = "Bot: " + getResponse(message);
        } else {
            const mainChatbotResponse = getResponse(message);
            response = mainChatbotResponse ? "Bot: " + mainChatbotResponse : "Faxium: I don't have an answer for that.";
        }
    }
 if (sender === 'Faxium') {
    chatWindow.innerHTML += '<p>' + (sender || 'User') + ': ' + message + '</p>';  // Display the sender's name and message
}
    chatWindow.innerHTML += '<p>' + response + '</p>';
    chatWindow.scrollTop = chatWindow.scrollHeight;
}






// Function for 'faxium' to ask questions
function askChatbot() {
  if (currentQuestionIndex < faxiumQuestions.length) {
    // Send the current question to the chatbot as 'faxium'
    sendFaxiumMessage(faxiumQuestions[currentQuestionIndex], 'Faxium');

    // Move to the next question
    currentQuestionIndex++;

    // If we've gone through all the questions, start over
    if (currentQuestionIndex === faxiumQuestions.length) {
      currentQuestionIndex = 0;
    }
  }
}

// Set an interval for 'faxium' to ask a question every 2 seconds
setInterval(askChatbot, 14000);
