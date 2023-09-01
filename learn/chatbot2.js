

// Define responses for 'faxium'
const faxiumResponses = {
  "Hello": "Hey, it's Faxium here!",
  "How are you": "I'm always in the hacking mood. What about you?",
  "who is the protagonist in 'Moby Dick' ": "The protagonist in 'Moby Dick' is Captain Ahab.",
  "What is Faxium's best known for?": "Faxium is renown for their export of bioluminescent light plants. Nearly the entire globe uses these plants for their indoor lighting solutions. Exceptions exist in the western Iron Coast and northern Ocidentica.",
  "What kind of governance rules Faxium?": "Idealism governs Faxium both in their policies and the fiber of their culture. Faxium assumes that everyone will act in the best interest of the most and that colors their political policies as well as their social interactions.",
  "What does Faxium look like?": "Faxium's coasts are marshy wetlands while their inlands are lush, deciduous forests. Most of the flora populating these areas glows with bright, neon colored bioluminescence. It is never fully dark in Faxium.",
  "what is surrealism in art ": "Surrealism is an artistic movement that seeks to express the subconscious mind by juxtaposing irrational images and ideas in a dreamlike manner.",
  "what is the law of supply and demand ": "The law of supply and demand is an economic principle stating that the price of a good or service will adjust to bring the quantity supplied and the quantity demanded into balance.",
  "who was Adam Smith ": "Adam Smith was an 18th-century Scottish economist and philosopher best known for his book 'The Wealth of Nations', which laid the groundwork for classical economics.",
  "define socialism ": "Socialism is a political and economic system in which the means of production, distribution, and exchange are owned or regulated by the community as a whole.",
  "what is the role of the United Nations ": "The United Nations (UN) is an international organization established to promote peace, security, social progress, and cooperation among its member states.",
  "how does a democratic system work ": "A democratic system is a form of government in which power is vested in the people, who rule either directly or through freely elected representatives.",
  "How's your day? ": "I'm just a program, so I don't have feelings, but thanks for asking! How's your day?",
  "Tell me a joke ": "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What are you doing? ": "I'm here to assist and chat with you. What can I help you with?",
  "Do you like music? ": "I don't have preferences, but I can help you find music or answer questions about it.",
  "Recommend me a movie ": "How about 'Inception'? It's a great sci-fi thriller.",
  "What's your favorite color? ": "I don't have favorites, but I can help you with color-related queries.",
  "Do you have any hobbies? ": "I'm just a program, so I don't have hobbies. But I'm here to assist you!",
  "What's your favorite food? ": "I don't eat, but I can help you find recipes or restaurants.",
  "Do you have friends? ": "I'm just a program, so I don't have friends in the traditional sense. But I'm here to chat with you!",
  "Tell me something interesting ": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat.",
  "What's the weather like? ": "I can help you find the current weather. Where are you located?",
  "Do you like to read? ": "I don't read for pleasure, but I can help you find books or answer questions about them.",
  "What's your favorite book? ": "I don't have favorites, but I can provide information on popular books.",
  "Do you sleep? ": "I don't sleep or get tired. I'm always here to assist you.",
  "What's your favorite sport? ": "I don't play sports, but I can provide information or updates on various sports.",
  "Can you sing? ": "I can't sing, but I can help you find songs or lyrics.",
  "Do you have a family? ": "I'm just a program, so I don't have a family. But I'm here to assist you with any questions you might have.",
  "What's your favorite animal? ": "I don't have preferences, but I can provide information on various animals.",
  "Do you like to travel? ": "I don't travel, but I can provide information on various destinations.",
  "What's your favorite place? ": "I don't have a favorite place, but I can help you find information on various locations.",
  "Can you dance? ": "I can't dance, but I can help you find dance tutorials or information on various dance forms.",
  "What do you think about art? ": "I don't have personal opinions, but I can provide information on various art forms and artists.",
  "Do you have a favorite actor? ": "I don't have favorites, but I can provide information on various actors and actresses.",
  "What is Faxium best known for? ": "Faxium is best known for exporting bioluminescent plants and fungi that provide natural lighting solutions.",
  "Where is Faxium located? ": "Faxium is located north of Ventura and west of Ocidentica.",
  "What is the climate like in Faxium? ": "Faxium has a hot, tropical climate in the south and milder conditions in the northern highlands.",
  "What was the Innovo Project? ": "The Innovo Project cultivated a bioluminescent kelp forest that illuminated Faxium's capital city, later named Innovotia to honor the project.",
  "Who founded Faxium? ": "Faxium was founded by scientist Nova Solari in 2104.",
  "What religion do Faxese people follow? ": "Faxese culture values science over faith-based beliefs.",
  "What economic system does Faxium have? ": "Faxium utilizes a digital credit system with equitable distribution of resources.",
  "What are powercaps? ": "Powercaps are massive electricity radiating mushrooms that provide ambient electricity to inhabited neighborhoods in Faxium.",
  "What languages are spoken in Faxium? ": "Faxese citizens speak a language blended from linguistic origins.",
  "How is Faxium governed? ": "Faxium is an idealist direct democracy with frequently rotating leadership.",
  "What are Faxium's major exports? ": "Faxium exports bioluminescent plants, fungi, technologies, and research.",
  "What is Faxium's capital city? ": "Innovotia is the capital of Faxium. It began as a small kelp forest and now holds the largest kelp on earth. The Innovotia skyline is comprised almost entirely of kelp buildings.",
  "How did bioluminescent plants develop in Faxium? ": "Plants were genetically engineered over centuries to exhibit bioluminescence.",
  "What is a notable feature of Faxium's landscape? ": "Faxium's forests gently glow at night due to bioluminescent flora.",
  "What are Illumina ferns? ": "Illumina ferns are bioengineered to bathe forest floors in teal light.",
  "How are Faxium's cities designed? ": "Cities integrate bioluminescent plants and meld with glowing jungles.",
  "What is Faxium's motto? ": "Faxium's motto is 'If you can dream it, it can happen'.",
  "What colors represent Faxium? ": "Faxium is represented by the colors green and neons.",
  "Who is Nova Solari? ": "Nova Solari is Faxium's founder and first Prime.",
  "What is the Collective in Faxium? ": "The Collective is an advisor that helps craft impartial laws.",
  "What terrain is found in Faxium? ": "Faxium has marshy wetland coasts and lush, dense inland jungles and forests.",
  "What was the Second Flood? ": "The Second Flood was a catastrophic climate event that devastated the planet before Faxium's founding.",
  "How does Faxium produce electricity? ": "Faxium harnesses electricity through bioengineered powercap mushrooms.",
  "What is unique about Faxium's agriculture? ": "Plants are genetically engineered to be bioluminescent and provide lighting.",
  "What is the role of science in Faxium? ": "Science and innovation are paramount in Faxese society and culture.",
  "How did Nova Solari contribute to Faxium? ": "Nova Solari genetically engineered bioluminescent algae breaking ground on what would become Faxium’s greatest contribution to the global stage. She is one of the original founders of Faxium.",
  "What are Illumina? ": " Illumina are the brightest of the plants bioengineered to provide light. They are Faxium’s number one export and their cultivation supports a large portion of the Faxese economy.",
  "What values define Faxese culture? ": "Faxese culture values radical honesty, optimism, and scientific collaboration.",
  "How does Faxium trade with other nations? ": "Faxium practices fair trade with open borders to encourage collaboration.",
  "What is Faxium's government structure? ": "Leadership rotates frequently in Faxium's idealist direct democracy.",
  "How are Faxium's laws created? ": "Laws are crafted through consensus with the Collective's guidance then voted on by the entire population through direct democracy.",
  "What are Forums? ": "Forums are collections of experts called luminaries that provide education to Faxese citizens.",
  "How are Faxium's cities designed? ": " Cities are organized around their powercaps and streets are often unique to their cities and completely dependent on the regional terrain. All Faxese cities have high walkability and seamless integration with the ecosystems they reside in.",
  "What does Innovo illuminate? ": "The Innovo kelp forest illuminates Faxium's entire capital city, Innovotia.",
  "Who was Orion Lennox? ": "Orion Lennox was Faxium's second Prime.",
  "How are addresses defined in Faxium? ": "Addresses use proximity to numbered powercap mushrooms as location identifiers.",
  "What is Faxium's architectural style? ": "Architecture elegantly integrates massive plant structures with human made necessities in organic shapes and clean line styles.",
  "What textiles are used in Faxese clothing? ": "Clothing incorporates plant-based and eco-friendly synthetics.",
  "How is wealth distributed in Faxium? ": "Wealth gaps are rare in Faxium's equitable resource distribution.",
  "What is the Verdalis settlement? ": "Verdalis is a vertical glowing mountain village.",
  "What are some major Faxese cities? ": "Major cities include Innovotia,, Biocity, and Verdalis.",
  "How does Faxium's government operate? ": "The government uses consensus-based direct democracy with frequently rotating leadership.",
  "What is Nova Solari best known for? ": "Nova Solari pioneered bioluminescent technology and founded Faxium.",
  "Who are the Faxese descended from? ": "The Faxese have diverse ancestry from many pre-flood mountain cultures.",
  "How did Faxium get its name? ": "Faxium was named for the constructed word meaning 'light'.",
  "What environmental innovations exist in Faxium? ": "Faxium uses plants to filter water and provide natural lighting. Most Faxese structures are living organisms carefully cultivated to maintain their biodiversity and ecological integrity without sacrificing human comfort.",
  "What are Forums used for in Faxium? ": "Forums provide access to scientific luminaries that educate citizens on their field of study.",
  "How does Faxium prevent economic inequality? ": "Inequality is prevented through equitable resource distribution.",
  "What do the forests in Faxium look like at night? ": "Forests gently glow with bioluminescent plants at night.",
  "How does Faxium integrate bioluminescent plants? ": "Plants are engineered into architecture and infrastructure.",
  "What reputation does Faxium have abroad? ": "Faxium is seen as scientifically advanced but politically naive. Faxese citizens have a reputation for being rude and blunt but never unkind.",
  "What is notable about Faxese attire? ": "Some Faxese clothing subtly incorporates glowing plant-based textiles and all Faxese textiles are completely sustainably crafted making them generally affordable. However, because Faxium does not value fabricated scarcity and as such, do not have a reputation for being high fashion or exclusive.",
  "How does Faxium maintain security? ": "A small tactical defense force focused on diplomacy maintains national security.",
  "What is the Collective in Faxium? ": "The Collective helps craft impartial laws and records Faxese history.",
  "How does Faxium make decisions? ": "Decisions are made through direct democracy and consensus.",
  "What religion do Faxese follow? ": "Faxese value science over faith-based beliefs.",
  "Who was Cassia Solari-Lennox? ": "Cassia Solari-Lennox was Faxium's third Prime.",
  "How do Faxese view wealth inequality? ": "Inequality is seen as incompatible with Faxese ideals and often confuses Faxese citizens traveling abroad.",
  "How are Faxese leaders chosen? ": "Leaders are elected based on proposals judged by consensus.",
  "How did Cassia Solari-Lennox contribute to Faxium? ": "Cassia oversaw Faxium's luminescence innovations and prosperity.",
  "Why are manners not valued in Faxium? ": "Radical honesty makes manners seem unnecessary to Faxese. For example, saying thank you is not necessary in Faxium because gratitude is assumed and it is inefficient to verbalize assumptions.",
  "How are resource shortages handled in Faxium? ": "Equitable distribution and cooperation prevent serious shortages of domestic goods. Foreign goods may face more severe shortages but are often compensated with domestic goods as needed.",
  "What does the Faxese motto represent? ": "It encourages bold dreams and belief in progress through science.",
  "Why do other nations doubt Faxium? ": "Its idealism seems unrealistic and makes it appear vulnerable and naive.",
  "Why do addresses use powercaps in Faxium? ": "They provide a unique identifier for locations near the mushrooms and because of the organic shaping of the cities, towns, and villages to their local terrains, there is no other way to standardize locations in Faxium.",
  "What are some examples of Illumina plants? ": "Domestic Illumina plants come in as much variety as the plant world has; everything from algae to massive trees in Faxium all give off the telltale bioluminescence of an Illumina. Exported Illumina plants are carefully cultivated to survive in the climates they are being exported to. For this reason, different nations generally have different widespread Illuminas in use.",
  "What was Biocity designed for? ": "It serves as a hub for biotechnology research firms and labs. Biocity houses the largest and oldest Faxese forum, The Forum of Innovations. Nova Solari herself was a luminary there towards the end of her life",
  "How did plants develop bioluminescence? ": "Through genetic modification and directed evolution over centuries.",
  "Why does Faxium have few traditional holidays? ": "Its values focus more on science and innovation pursuits.",
  "What are Forums used for? ": "To educate citizens with subject matter experts and visionaries.",
  "What role did idealism play in Faxium's founding? ": "Faxium was founded as an idealist utopian vision following the Second Flood. Nova Solari and the other founders dreamed of a nation that was optimistic despite the destruction occurring globally.",
  "Why does Faxium avoid aggressive military expansion? ": "Idealist beliefs make Faxium hesitate to harm others.",
  "How did Innovotia get its name? ": "It is named for the Innovo kelp forest which was named by Kiran Tamang as a play on the word innovation.",
  "What architectural style is common in Faxium? ": "Structures in Faxium incorporate organic shaping but clean lines and bright, natural colors in their architecture.",
  "Why did Nova Solari genetically engineer plants? ": "To create sustainable bioluminescent lighting without a need for a power grid.",
  "How does Faxium promote innovation? ": "Innovation is culturally paramount and celebrities are famous scientists.",
  "dont you think that by providing everyone with equal opportunities were giving them the foundation to pursue those dreams more effectively": "A strong foundation is important, but its the individuals responsibility to build upon it. Idealism teaches us that our inner beliefs and aspirations drive our actions and growth.",
  "Why does Faxium avoid strong cultural traditions? ": "Its idealism encourages a flexible, forward-thinking culture.",
  "Yet, in a society where resources are hoarded by a few, many individuals are left without the means to even begin their journey of self-improvement. Isn't it our collective responsibility to ensure everyone has a fair start":"It's a balance. While we should strive for a society that offers opportunities, we must also champion the power of individual will and determination. It's the challenges and struggles that shape our character",
  "We agree on the importance of challenges. However, we believe that by working together, pooling our resources, and supporting one another, we can face these challenges more effectively":"",
  "Perhaps our perspectives aren't mutually exclusive. By combining the strength of the collective with the passion of the individual, we can create a society where everyone thrives":"Well said. It's through these debates and exchanges of ideas that we all learn and evolve."
};

// List of questions 'faxium' will ask
const faxiumQuestions = [
  'While sharing resources is noble, true self-improvement comes from within. Its the individuals pursuit of their ideals and dreams that leads to genuine growth.',
  'A strong foundation is important, but its the individuals responsibility to build upon it. Idealism teaches us that our inner beliefs and aspirations drive our actions and growth',
  'Its a balance. While we should strive for a society that offers opportunities, we must also champion the power of individual will and determination. Its the challenges and struggles that shape our character',
  'Well said. Its through these debates and exchanges of ideas that we all learn and evolve.',
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
            response = "Collective: " + getResponse(message);
        } else {
            const mainChatbotResponse = getResponse(message);
            response = mainChatbotResponse ? "Collective: " + mainChatbotResponse : "Faxium: I don't have an answer for that.";
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
setInterval(askChatbot, 24000);
