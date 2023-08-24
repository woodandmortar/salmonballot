const questions = [
    // Logic-based questions
    "If a tree falls in a forest and no one is around to hear it, does it make a sound?",
    "Is the statement 'This statement is false' true or false?",

    // Open-ended questions
    "What does 'freedom' mean to you?",
    "How do you define 'intelligence'?",

    // Hypothetical scenarios
    "Imagine you're on a deserted island with a box. What's in the box and why?",
    "If you could go back in time and change one event, what would it be and why?",

    // Ambiguous questions
    "How long is a piece of string?",
    "Why do we do what we do?",

    // Philosophical/Abstract questions
    "Do you believe in fate or free will? Why?",
    "What's the difference between living and existing?"
];


let currentQuestionIndex = 0;
let logicPatterns = [];

function presentQuestion() {
    const chatbox = document.getElementById('chatbox');
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        chatbox.innerHTML += `<p>Bot: ${question}</p>`;
    } else {
        chatbox.innerHTML += `<p>Bot: Thank you for participating.</p>`;
    }
}

function receiveResponse() {
    const userInput = document.getElementById('userInput').value;

    // Display user's response
    const chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += `<p>User: ${userInput}</p>`;

    // Analyze the logical structure of the response
    const logicPattern = analyzeLogic(userInput);
    logicPatterns.push(logicPattern);

    currentQuestionIndex++;
    presentQuestion();

    // Clear the input field
    document.getElementById('userInput').value = '';
}

function analyzeLogic(response) {
    const lowerCaseResponse = response.toLowerCase();

    // If-Then pattern
    if (/if\s.*\sthen\s/.test(lowerCaseResponse)) {
        return "If A, then B";
    }

    // Because pattern
    else if (lowerCaseResponse.includes("because")) {
        return "A because B";
    }

    // Either-Or pattern
    else if (/either\s.*\sor\s/.test(lowerCaseResponse)) {
        return "Either A or B";
    }

    // Not only-But also pattern
    else if (/not\s.*\sonly\s.*\sbut\s.*\salso\s/.test(lowerCaseResponse)) {
        return "Not only A but also B";
    }

    // Cause-Effect pattern (using "leads to")
    else if (lowerCaseResponse.includes("leads to")) {
        return "A leads to B";
    }

    // Comparison pattern (using "compared to")
    else if (lowerCaseResponse.includes("compared to")) {
        return "A compared to B";
    }

    // Default
    else {
        return "Other";
    }
}


function exportLogicPatterns() {
    const data = logicPatterns.join("\n");
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'logicPatterns.txt';
    a.click();
    URL.revokeObjectURL(url);
}

document.getElementById('sendButton').addEventListener('click', receiveResponse);
document.getElementById('exportButton').addEventListener('click', exportLogicPatterns);

// Start the session by presenting the first question
presentQuestion();


function gradeLogic() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const content = event.target.result;
            const patterns = content.split('\n');
            let score = 0;

            patterns.forEach(pattern => {
                switch (pattern) {
                    case "If A, then B":
                        score += 10;
                        break;
                    case "A because B":
                        score += 8;
                        break;
                    case "Either A or B":
                        score += 6;
                        break;
                    case "Not only A but also B":
                        score += 7;
                        break;
                    case "A leads to B":
                        score += 9;
                        break;
                    case "A compared to B":
                        score += 5;
                        break;
                    default: // "Other"
                        score -= 5;
                        break;
                }
            });

            const resultDiv = document.getElementById('result');
            if (score < 20) {
                resultDiv.innerHTML = `Your logic score is ${score}. This indicates illogical reasoning in some areas. Consider refining your thought processes.`;
            } else {
                resultDiv.innerHTML = `Your logic score is ${score}. Keep up the good work!`;
                
            }
        };
        reader.readAsText(file);
    } else {
        alert("Please select a file before submitting.");
    }
}
