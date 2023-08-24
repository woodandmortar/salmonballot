let currentChallengeIndex = 0;
const challenges = [
    { type: "imageInterpretation", data: "rs1.png" },
    { type: "imageInterpretation", data: "rs2.png" },
    { type: "imageInterpretation", data: "rs3.png" },
    { type: "imageInterpretation", data: "rs4.png" },
    { type: "imageInterpretation", data: "rs5.png" },
    { type: "imageInterpretation", data: "rs6.png" },
    { type: "imageInterpretation", data: "rs7.png" },
    { type: "imageInterpretation", data: "rs8.png" },
    { type: "imageInterpretation", data: "rs9.png" },
    { type: "imageInterpretation", data: "rs0.png" },
    { type: "storyCreation", data: ["apple", "moon", "mirror"] },
    // ... add more challenges here
];


function getPersonalityTrait(score) {
    const traits = [
        "The explorer is curious and adventurous, constantly seeking out new experiences and pushing boundaries. They are open-minded, embracing the unfamiliar and unknown rather than fearing it. The thrill of discovery drives the explorer more than material rewards or comfort.",
        "Driven by wanderlust, the voyager values the journey more than the destination. They enjoy immersing themselves in different cultures and ways of life. The voyager is adaptable, able to thrive in changing circumstances. While prone to restlessness, their experiences grant them wisdom.",
        "The captain has a commanding presence and natural air of authority. They are decisive, able to steer their ship through crises. Though strong-willed, the wise captain understands the importance of consensus. They balance confidence with compassion for their crew.",
        "Toughened by life at sea, the sailor is hard-working and disciplined. They respect the chain of command and naval traditions. Though often rough around the edges, the sailor values loyalty and camaraderie. Their skills are hard-earned through experience.",
        "Shrewd and business savvy, the merchant seeks to profit by buying low and selling high. They keenly understand supply and demand forces. The successful merchant balances boldness with practical caution. Their network of contacts helps them thrive in trade.",
        "The smuggler lives by their wits and ability to skirt laws and restrictions. They exploit loopholes and take calculated risks to transport illicit cargo. The smuggler is cagey and opportunistic but also has a pragmatic moral code. They navigate grey areas.",
        "Arbiters oversee proper protocol and procedure in their domain. Stern yet fair, the Arbiter boards ships to inspect for contraband and resolve disputes. Offenders face the Arbiter’s quick justice, meted out via fines, confinement in the brig, or even keelhauling for severe transgressions. However, those who show respect for order are granted safe passage. The Arbiter values duty over glory and follows their code rigorously. Their presence inspires discipline on the chaotic high seas.",
        "Hardened by long days at sea, the fisherman possesses great fortitude and resilience. They endure isolation and hardship for the reward of the catch. The fisherman respects the forces of nature and works in harmony with them. Simple values drive them more than material wealth.",
        "Meticulous and devoted to their craft, the shipwright takes pride in building sturdy and elegant vessels. They are patient, willing to spend years on a single ship. Technical skill is supplemented by intuition born from experience. The shipwright finds meaning in using their talents fully."
    ];

    // If score is greater than 9, default to the last trait
    if (score > 9) {
        return traits[8];
    }

    return traits[score - 1]; // Subtract 1 because arrays are 0-indexed
}



const userResponses = []; // Store user inputs

function loadChallenge() {
    const challenge = challenges[currentChallengeIndex];
    const challengeDiv = document.getElementById('challenge');

    switch(challenge.type) {
        case "imageInterpretation":
            challengeDiv.innerHTML = `<img src="${challenge.data}" alt="Abstract Image" style="width:200px">`;
            break;
        case "storyCreation":
            challengeDiv.innerHTML = `Create a story with: ${challenge.data.join(', ')}`;
            break;
        // ... handle other challenge types
    }
}

document.getElementById('nextChallenge').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value; // Assuming you have an input field with id 'userInput'
    userResponses.push(userInput); // Store the user's response

    currentChallengeIndex++;
    if (currentChallengeIndex < challenges.length) {
        loadChallenge();
        startHacking();
    } else {
        alert("Game completed! You can now export your data.");
    }
});

document.getElementById('exportButton').addEventListener('click', function() {
    // Collect real data from the game
    const responses = [];
    for (let i = 0; i < challenges.length; i++) {
        const challengeType = challenges[i].type;
        // Assuming you have a way to collect user responses, for example, in an array called userResponses
        const userResponse = userResponses[i]; // This is a placeholder. Replace with your method of collecting responses.
        responses.push(`<challenge type="${challengeType}"><response>${userResponse}</response></challenge>`);
    }

    const data = `<playerData>${responses.join('')}</playerData>`;

    const blob = new Blob([data], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'me.hpxml';
    a.click();
    URL.revokeObjectURL(url);
});



document.getElementById('uploadHPXML').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            // Parse the XML content
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(content, "text/xml");

            // Extract and display the data in a div
            const challenges = xmlDoc.getElementsByTagName("challenge");
            let displayData = '<ul>';
            let score = 0; // Initialize score variable

            // List of keywords to search for
            const keywords = [
                "crab", "lobster", "clown", "dancing", "butterfly", "rabbit", "jaguar", "moose", "shrimp", "rabit head", "worms", "snakes", "caterpillars",
                "human", "pink four-legged animal", "faces", "heads of women or children",
                "animal hide", "skin", "bat", "butterly", "moth", "two humans", "four-legged animal"
            ];

            for (let i = 0; i < challenges.length; i++) {
                const type = challenges[i].getAttribute("type");
                const response = challenges[i].getElementsByTagName("response")[0].childNodes[0].nodeValue.toLowerCase(); // Convert response to lowercase
                displayData += `<li><strong>${type}:</strong> ${response}</li>`;

                // Check for keywords in the response and update score
                for (let keyword of keywords) {
                    if (response.includes(keyword.toLowerCase())) { // Convert keyword to lowercase
                        score++;
                    }
                }
            }
            displayData += '</ul>';

            // Assuming you have a div with id 'displayDiv' to show the data
            document.getElementById('displayDiv').innerHTML = displayData;

            // ... (rest of the uploadHPXML code)

  // Display the welcome alert with the personality trait
  const personality = getPersonalityTrait(score);
  alert("Welcome. Your score is: " + score + "\nYour personality trait: " + personality);

        };
        reader.readAsText(file);
    }
});




// Start the game
loadChallenge();



const hackedTextElement = document.getElementById('hackedText');
const originalText = hackedTextElement.innerHTML;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let isHacking = false;

function getRandomCharacter() {
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function hackText() {
    if (!isHacking) return;

    let newText = originalText;
    // Change 5 letters at a time (you can adjust this number as needed)
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * originalText.length);
        const randomChar = getRandomCharacter();
        newText = newText.slice(0, randomIndex) + randomChar + newText.slice(randomIndex + 1);
    }

    hackedTextElement.innerHTML = newText;
    setTimeout(hackText, Math.random() * 100);
}

function startHacking() {
    isHacking = true;
    hackText();

    // To stop the effect after 3 seconds
    setTimeout(() => {
        isHacking = false;
        hackedTextElement.innerHTML = originalText;
    }, 3000);
}
