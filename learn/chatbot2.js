

// Define responses for 'Hacker'
const hackerResponses = {
  "Hello": "Hey, it's Hacker here!",
  "How are you?": "I'm always in the hacking mood. What about you?",
  // ... add more questions and answers as needed for Hacker
};

// List of questions 'Hacker' will ask
const hackerQuestions = [
  'How are you?',
  'What is the capital of France?',
  'Tell me a joke.',
  'How does the sun rise?',
  'Who are you?',
  'What is the pulse network?'
];

let currentQuestionIndex = 0;


// Function to get response from Hacker
function getHackerResponse(question) {
  return hackerResponses[question] || "Hacker doesn't know that.";
}

function sendHackerMessage(message2, sender) {
    const chatWindow = document.getElementById('chatWindow');

    let response;
    if (sender === 'Hacker') {
        // If the sender is Hacker, get a response from the main chatbot
        response = getResponse(message2);
    } else {
        // If the sender is User, get a response from the hackerResponses object
        response = hackerResponses[message2.replace('@hacker', '').trim()] || "Hacker doesn't know that.";
    }

    chatWindow.innerHTML += '<p>' + (sender || 'User') + ': ' + message2 + '</p>';
    chatWindow.innerHTML += '<p>' + response + '</p>';
    chatWindow.scrollTop = chatWindow.scrollHeight;
}



// Function for 'Hacker' to ask questions
function askChatbot() {
  if (currentQuestionIndex < hackerQuestions.length) {
    // Send the current question to the chatbot as 'Hacker'
    sendHackerMessage(hackerQuestions[currentQuestionIndex], 'Hacker');

    // Move to the next question
    currentQuestionIndex++;

    // If we've gone through all the questions, start over
    if (currentQuestionIndex === hackerQuestions.length) {
      currentQuestionIndex = 0;
    }
  }
}

// Set an interval for 'Hacker' to ask a question every 2 seconds
setInterval(askChatbot, 12000);
