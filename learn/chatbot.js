
let baseData =
[
    ["hello", "Hi there!", ""],
    ["how are you", "I'm doing well, thank you!", ""],
    ["good morning", "Good morning! How can I assist you today?", ""],
    ["good evening", "Good evening! How can I help you?", ""],
    ["bye", "Goodbye! If you have any more questions, feel free to ask.", ""],
    ["tell me a joke", "Why did the chicken cross the road? To get to the other side!", ""],
    ["who are you", "I'm a virtual assistant. How can I assist you?", ""],
    ["how does the sun rise", "The sun doesn't actually rise. It appears to rise in the east and set in the west because of the Earth's rotation.", ""],
    ["what is the capital of france", "The capital of France is Paris.", ""],
    ["How are you?", "I'm doing well, thanks! How about you?", ""],
    ["What's up?", "Not much, just here to chat. How's your day going?", ""],
    ["who are you", "I'm a virtual assistant. How can I assist you?", ""],
    ["how does the sun rise", "The sun doesn't actually rise. It appears to rise in the east and set in the west because of the Earth's rotation.", ""],
    ["what is the capital of france", "The capital of France is Paris.", ""],
    ["the apple climbs over the moon","only when the mirror can see you",""],
    ["what are the benefits of meditation", "Meditation can help reduce stress, improve concentration, increase self-awareness, and promote emotional health, among other benefits.", ""],
    ["how does metabolism work", "Metabolism refers to all the chemical processes in the body that convert or use energy, including digestion and the transportation of substances in cells.", ""],
    ["what is the importance of a balanced diet", "A balanced diet provides the body with essential nutrients, supports growth, repairs body tissues, and helps prevent chronic diseases.", ""],
    ["how does exercise affect the heart", "Regular exercise strengthens the heart, allowing it to pump blood more efficiently, reduces the risk of heart disease, and improves overall cardiovascular health.", ""],
    ["what are the effects of sleep deprivation", "Sleep deprivation can lead to fatigue, decreased concentration, weakened immune system, mood disturbances, and increased risk of chronic conditions.", ""],
    ["how do I use this chatbot?", "Simply type your question or command into the input box and press the send button. I'll do my best to provide a relevant response!", ""],
    ["can I train the chatbot?", "Yes, you can train me by providing new questions and answers in the JSON format. This helps improve my responses over time.", ""],
    ["what is the pulse network?", "The Pulse Network is a communication network that connects all ISPs to the blockchain, allowing for free layer 3 instant transmissions. These transmissions are verified by time-space.", ""],
    ["how does the pulse network work?", "The Pulse Network utilizes blockchain technology to connect ISPs. It offers instant layer 3 transmissions that are verified using a unique time-space mechanism, ensuring secure and rapid communication.", ""],
    ["what are the benefits of the pulse network?", "The Pulse Network provides instant layer 3 transmissions for free, connects all ISPs to the blockchain, and ensures secure communication with its time-space verification.", ""],
    ["how is the pulse network different from traditional networks?", "Unlike traditional networks, the Pulse Network is integrated with blockchain technology, offers free layer 3 transmissions, and uses time-space verification for enhanced security.", ""],
    ["how can I connect to the pulse network?", "To connect to the Pulse Network, you would typically need compatible software or hardware and an ISP that is integrated with the network. Always refer to official documentation or support channels for detailed instructions.", ""],
    ["is the pulse network secure?", "Yes, the Pulse Network is designed with security in mind. Its integration with blockchain technology and unique time-space verification mechanism ensures that transmissions are both secure and verified.", ""],
    ["can I customize the chatbot's appearance?", "Yes, you can customize my appearance using CSS and JavaScript. This allows you to match the chatbot's look and feel to your website or application's design.", ""],
    ["how do I add new functionalities to the chatbot?", "You can extend my functionalities by integrating additional scripts, plugins, or APIs. Ensure you test any new features thoroughly before deploying them.", ""],
    ["can the chatbot handle multiple languages?", "By default, I'm designed for English. However, with the right training data and language processing tools, I can be adapted to support multiple languages.", ""],
    ["how do I backup chatbot data?", "You can export the chatbot's training data and conversation logs as JSON files. Regular backups ensure you don't lose valuable data.", ""],
    ["can the chatbot be integrated with other platforms?", "Yes, I can be integrated with various platforms using APIs or webhooks. This allows for seamless interaction with other systems and services.", ""],
    ["how does time-space verification work in the pulse network?", "Time-space verification in the Pulse Network ensures that transmissions are authenticated based on their temporal and spatial attributes, adding an extra layer of security.", ""],
    ["what kind of blockchain does the pulse network use?", "The Pulse Network uses a proprietary blockchain designed for high-speed, secure communications. It's optimized for layer 3 transmissions and ISP integrations.", ""],
    ["are there any limitations to the pulse network?", "While the Pulse Network offers many advantages, like any system, it may have limitations based on network load, hardware compatibility, or specific use cases. Always refer to official documentation for detailed specifications.", ""],
    ["how is data encrypted on the pulse network?", "The Pulse Network employs advanced encryption techniques to ensure data privacy and security during transmissions. This encryption is integral to its blockchain-based architecture.", ""],
    ["what's the future roadmap for the pulse network?", "The Pulse Network is continuously evolving, with plans for faster transmissions, broader ISP integrations, and enhanced security features. Stay tuned to official channels for updates.", ""],
    ["how can I contribute to the pulse network?", "The Pulse Network welcomes contributions from the community. You can get involved by joining its development, providing feedback, or participating in community discussions.", ""],
    ["are there any community forums for the pulse network?", "Yes, the Pulse Network has a vibrant community forum where users, developers, and enthusiasts discuss topics, share ideas, and provide support. Check the official website for links.", ""],
    ["how old is the earth", "The Earth is approximately 4.54 billion years old.", ""],
    ["what is the collective", "The collective is a group of individuals or entities united by a shared purpose or goal.", ""],
    ["how do I join the collective", "To join the collective, you can fill out our membership form and attend one of our introductory meetings.", ""],
    ["who are the members", "The collective is made up of diverse individuals from various backgrounds, all working towards a shared mission.", ""],
    ["what's our mission", "The collective's mission is to foster collaboration, share knowledge, and drive positive change in our community.", ""],
    ["how do we make decisions", "Decisions in the collective are made through a consensus-based approach, ensuring every member's voice is heard.", ""],
    ["are there any upcoming events", "Yes, we have a community outreach event next month and a workshop the following week. Check our calendar for details.", ""],
    ["how can I contribute", "Members can contribute by participating in discussions, leading initiatives, volunteering for events, or sharing resources and knowledge.", ""],
    ["do we have any partnerships", "The collective has partnerships with several local organizations and businesses to further our goals and expand our reach.", ""],
    ["where do we meet", "The collective meets bi-weekly at the community center. Virtual meetings are also available for remote members.", ""],
    ["how is the collective funded", "The collective is funded through member contributions, grants, and partnerships with supportive organizations.", ""],
    ["can I start a new project", "Absolutely! Members are encouraged to start new projects that align with the collective's mission. Share your idea in our next meeting.", ""],
    ["who leads the collective", "The collective operates on a horizontal structure, meaning there's no single leader. However, there are coordinators for different tasks and projects.", ""],
    ["how do I get in touch with a member", "You can reach out to members through our internal communication platform or by attending one of our meetings.", ""],
    ["what are our core values", "The collective's core values include collaboration, transparency, inclusivity, and continuous learning.", ""],
    ["how can I access our resources", "Members can access resources through our online portal. If you need specific materials, reach out to the resource coordinator.", ""],
    ["what is quantum mechanics", "Quantum mechanics is a fundamental theory in physics that describes the physical properties of nature at small scales, typically of atoms and subatomic particles.", ""],
    ["how do vaccines work", "Vaccines work by stimulating the immune system to recognize and combat specific pathogens, such as viruses or bacteria. They often contain weakened or inactivated forms of the pathogen to trigger an immune response.", ""],
    ["what is artificial intelligence", "Artificial intelligence (AI) refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as visual perception, speech recognition, and decision-making.", ""],
    ["who was Cleopatra", "Cleopatra was the last active ruler of the Ptolemaic Kingdom of Egypt. She was known for her intelligence, beauty, and romantic relationships with Roman leaders Julius Caesar and Mark Antony.", ""],
    ["what is the Renaissance", "The Renaissance was a cultural movement that spanned roughly the 14th to the 17th century, marking the transition from the Middle Ages to Modernity. It began in Italy and was characterized by renewed interest in the arts, science, and the classics.", ""],
    ["why is the sky blue", "The sky appears blue to the human eye because the Earth's atmosphere scatters sunlight in every direction and blue light is scattered more than other colors because it travels as shorter, smaller waves.", ""],
    ["what is photosynthesis", "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy in the form of glucose or other sugars, using carbon dioxide and water.", ""],
    ["what is existentialism", "Existentialism is a philosophical movement that deals with human freedom, choice, and responsibility. It emphasizes individual existence and the meaning one gives to their own life.", ""],
    ["who was Socrates", "Socrates was an ancient Greek philosopher credited as one of the founders of Western philosophy. He is best known for his Socratic method of questioning.", ""],
    ["what is the Pythagorean theorem", "The Pythagorean theorem states that in a right triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides.", ""],
    ["define prime numbers", "Prime numbers are numbers greater than 1 that have no positive divisors other than 1 and themselves. For example, 2, 3, 5, and 7 are prime numbers.", ""],
    ["who wrote 'Pride and Prejudice'", "Jane Austen wrote 'Pride and Prejudice'.", ""],
    ["what is the significance of the Mona Lisa", "The Mona Lisa is a famous portrait painting by Leonardo da Vinci, known for its exquisite detail, mysterious expression, and its history.", ""],
    ["define iambic pentameter", "Iambic pentameter is a poetic meter that has five iambic feet per line, where each foot consists of an unstressed syllable followed by a stressed syllable.", ""],
    ["who is the protagonist in 'Moby Dick'", "The protagonist in 'Moby Dick' is Captain Ahab.", ""],
    ["What is Faxium's best known for?","Faxium is renown for their export of bioluminescent light plants. Nearly the entire globe uses these plants for their indoor lighting solutions. Exceptions exist in the western Iron Coast and northern Ocidentica.", ""],
    ["What kind of governance rules Faxium?","Idealism governs Faxium both in their policies and the fiber of their culture. Faxium assumes that everyone will act in the best interest of the most and that colors their political policies as well as their social interactions.", ""],
    ["What does Faxium look like?","Faxium's coasts are marshy wetlands while their inlands are lush, deciduous forests. Most of the flora populating these areas glows with bright, neon colored bioluminescence. It is never fully dark in Faxium.", ""],
    ["what is surrealism in art", "Surrealism is an artistic movement that seeks to express the subconscious mind by juxtaposing irrational images and ideas in a dreamlike manner.", ""],
    ["what is the law of supply and demand", "The law of supply and demand is an economic principle stating that the price of a good or service will adjust to bring the quantity supplied and the quantity demanded into balance.", ""],
    ["who was Adam Smith", "Adam Smith was an 18th-century Scottish economist and philosopher best known for his book 'The Wealth of Nations', which laid the groundwork for classical economics.", ""],
    ["define socialism", "Socialism is a political and economic system in which the means of production, distribution, and exchange are owned or regulated by the community as a whole.", ""],
    ["what is the role of the United Nations", "The United Nations (UN) is an international organization established to promote peace, security, social progress, and cooperation among its member states.", ""],
    ["how does a democratic system work", "A democratic system is a form of government in which power is vested in the people, who rule either directly or through freely elected representatives.", ""],
    ["How's your day?", "I'm just a program, so I don't have feelings, but thanks for asking! How's your day?", ""],
    ["Tell me a joke", "Why did the scarecrow win an award? Because he was outstanding in his field!", ""],
    ["What are you doing?", "I'm here to assist and chat with you. What can I help you with?", ""],
    ["Do you like music?", "I don't have preferences, but I can help you find music or answer questions about it.", ""],
    ["Recommend me a movie", "How about 'Inception'? It's a great sci-fi thriller.", ""],
    ["What's your favorite color?", "I don't have favorites, but I can help you with color-related queries.", ""],
    ["Do you have any hobbies?", "I'm just a program, so I don't have hobbies. But I'm here to assist you!", ""],
    ["What's your favorite food?", "I don't eat, but I can help you find recipes or restaurants.", ""],
    ["Do you have friends?", "I'm just a program, so I don't have friends in the traditional sense. But I'm here to chat with you!", ""],
    ["Tell me something interesting", "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat.", ""],
    ["What's the weather like?", "I can help you find the current weather. Where are you located?", ""],
    ["Do you like to read?", "I don't read for pleasure, but I can help you find books or answer questions about them.", ""],
    ["What's your favorite book?", "I don't have favorites, but I can provide information on popular books.", ""],
    ["Do you sleep?", "I don't sleep or get tired. I'm always here to assist you.", ""],
    ["What's your favorite sport?", "I don't play sports, but I can provide information or updates on various sports.", ""],
    ["Can you sing?", "I can't sing, but I can help you find songs or lyrics.", ""],
    ["Do you have a family?", "I'm just a program, so I don't have a family. But I'm here to assist you with any questions you might have.", ""],
    ["What's your favorite animal?", "I don't have preferences, but I can provide information on various animals.", ""],
    ["Do you like to travel?", "I don't travel, but I can provide information on various destinations.", ""],
    ["What's your favorite place?", "I don't have a favorite place, but I can help you find information on various locations.", ""],
    ["Can you dance?", "I can't dance, but I can help you find dance tutorials or information on various dance forms.", ""],
    ["What do you think about art?", "I don't have personal opinions, but I can provide information on various art forms and artists.", ""],
    ["Do you have a favorite actor?", "I don't have favorites, but I can provide information on various actors and actresses.", ""],
    ["What is Faxium best known for?", "Faxium is best known for exporting bioluminescent plants and fungi that provide natural lighting solutions.", ""],
["Where is Faxium located?", "Faxium is located north of Ventura and west of Ocidentica.", ""],
["What is the climate like in Faxium?", "Faxium has a hot, tropical climate in the south and milder conditions in the northern highlands.", ""],
["What was the Innovo Project?", "The Innovo Project cultivated a bioluminescent kelp forest that illuminated Faxium's capital city, later named Innovotia to honor the project.", ""],
["Who founded Faxium?", "Faxium was founded by scientist Nova Solari in 2104.", ""],
["What religion do Faxese people follow?", "Faxese culture values science over faith-based beliefs.", ""],
["What economic system does Faxium have?", "Faxium utilizes a digital credit system with equitable distribution of resources.", ""],
["What are powercaps?", "Powercaps are massive electricity radiating mushrooms that provide ambient electricity to inhabited neighborhoods in Faxium.", ""],
["What languages are spoken in Faxium?", "Faxese citizens speak a language blended from linguistic origins.", ""],
["How is Faxium governed?", "Faxium is an idealist direct democracy with frequently rotating leadership.", ""],
["What are Faxium's major exports?", "Faxium exports bioluminescent plants, fungi, technologies, and research.", ""],
["What is Faxium's capital city?", "Innovotia is the capital of Faxium. It began as a small kelp forest and now holds the largest kelp on earth. The Innovotia skyline is comprised almost entirely of kelp buildings.", ""],
["How did bioluminescent plants develop in Faxium?", "Plants were genetically engineered over centuries to exhibit bioluminescence.", ""],
["What is a notable feature of Faxium's landscape?", "Faxium's forests gently glow at night due to bioluminescent flora.", ""],
["What are Illumina ferns?", "Illumina ferns are bioengineered to bathe forest floors in teal light.", ""],
["How are Faxium's cities designed?", "Cities integrate bioluminescent plants and meld with glowing jungles.", ""],
["What is Faxium's motto?", "Faxium's motto is 'If you can dream it, it can happen'.", ""],
["What colors represent Faxium?", "Faxium is represented by the colors green and neons.", ""],
["Who is Nova Solari?", "Nova Solari is Faxium's founder and first Prime.", ""],
["What is the Collective in Faxium?", "The Collective is an advisor that helps craft impartial laws.", ""],
["What terrain is found in Faxium?", "Faxium has marshy wetland coasts and lush, dense inland jungles and forests.", ""],
["What was the Second Flood?", "The Second Flood was a catastrophic climate event that devastated the planet before Faxium's founding.", ""],
["How does Faxium produce electricity?", "Faxium harnesses electricity through bioengineered powercap mushrooms.", ""],
["What is unique about Faxium's agriculture?", "Plants are genetically engineered to be bioluminescent and provide lighting.", ""],
["What is the role of science in Faxium?", "Science and innovation are paramount in Faxese society and culture.", ""],
["How did Nova Solari contribute to Faxium?", "Nova Solari genetically engineered bioluminescent algae breaking ground on what would become Faxium’s greatest contribution to the global stage. She is one of the original founders of Faxium.", ""],
["What are Illumina?", " Illumina are the brightest of the plants bioengineered to provide light. They are Faxium’s number one export and their cultivation supports a large portion of the Faxese economy.", ""],
["What values define Faxese culture?", "Faxese culture values radical honesty, optimism, and scientific collaboration.", ""],
["How does Faxium trade with other nations?", "Faxium practices fair trade with open borders to encourage collaboration.", ""],
["What is Faxium's government structure?", "Leadership rotates frequently in Faxium's idealist direct democracy.", ""],
["How are Faxium's laws created?", "Laws are crafted through consensus with the Collective's guidance then voted on by the entire population through direct democracy.", ""],
["What are Forums?", "Forums are collections of experts called luminaries that provide education to Faxese citizens.", ""],
["How are Faxium's cities designed?", " Cities are organized around their powercaps and streets are often unique to their cities and completely dependent on the regional terrain. All Faxese cities have high walkability and seamless integration with the ecosystems they reside in.", ""],
["What does Innovo illuminate?", "The Innovo kelp forest illuminates Faxium's entire capital city, Innovotia.", ""],
["Who was Orion Lennox?", "Orion Lennox was Faxium's second Prime.", ""],
["How are addresses defined in Faxium?", "Addresses use proximity to numbered powercap mushrooms as location identifiers.", ""],
["What is Faxium's architectural style?", "Architecture elegantly integrates massive plant structures with human made necessities in organic shapes and clean line styles.", ""],
["What textiles are used in Faxese clothing?", "Clothing incorporates plant-based and eco-friendly synthetics.", ""],
["How is wealth distributed in Faxium?", "Wealth gaps are rare in Faxium's equitable resource distribution.", ""],
["What is the Verdalis settlement?", "Verdalis is a vertical glowing mountain village.", ""],
["What are some major Faxese cities?", "Major cities include Innovotia,, Biocity, and Verdalis.", ""],
["How does Faxium's government operate?", "The government uses consensus-based direct democracy with frequently rotating leadership.", ""],
["What is Nova Solari best known for?", "Nova Solari pioneered bioluminescent technology and founded Faxium.", ""],
["Who are the Faxese descended from?", "The Faxese have diverse ancestry from many pre-flood mountain cultures.", ""],
["How did Faxium get its name?", "Faxium was named for the constructed word meaning 'light'.", ""],
["What environmental innovations exist in Faxium?", "Faxium uses plants to filter water and provide natural lighting. Most Faxese structures are living organisms carefully cultivated to maintain their biodiversity and ecological integrity without sacrificing human comfort.", ""],
["What do the forests in Faxium look like at night?", "The leaves and ferns radiate a soft ethereal light, bathing the entire forest floor in a mystical azure haze. The bioluminescence present in most Faxese flora creates an otherworldly, almost magical, atmosphere. There is a serenity to the perpetual twilight, yet also a sense of wonder in these glowing jungles that never fully descend into darkness.", ""],
["What are Forums used for in Faxium?", "Forums provide access to scientific luminaries that educate citizens on their field of study.", ""],
["How does Faxium prevent economic inequality?", "Inequality is prevented through equitable resource distribution.", ""],
["What do the forests in Faxium look like at night?", "Forests gently glow with bioluminescent plants at night.", ""],
["How does Faxium integrate bioluminescent plants?", "Plants are engineered into architecture and infrastructure.", ""],
["What reputation does Faxium have abroad?", "Faxium is seen as scientifically advanced but politically naive. Faxese citizens have a reputation for being rude and blunt but never unkind.", ""],
["What is notable about Faxese attire?", "Some Faxese clothing subtly incorporates glowing plant-based textiles and all Faxese textiles are completely sustainably crafted making them generally affordable. However, because Faxium does not value fabricated scarcity and as such, do not have a reputation for being high fashion or exclusive.", ""],
["How does Faxium maintain security?", "A small tactical defense force focused on diplomacy maintains national security.", ""],
["What is the Collective in Faxium?", "The Collective helps craft impartial laws and records Faxese history.", ""],
["How does Faxium make decisions?", "Decisions are made through direct democracy and consensus.", ""],
["What religion do Faxese follow?", "Faxese value science over faith-based beliefs.", ""],
["Who was Cassia Solari-Lennox?", "Cassia Solari-Lennox was Faxium's third Prime.", ""],
["How do Faxese view wealth inequality?", "Inequality is seen as incompatible with Faxese ideals and often confuses Faxese citizens traveling abroad.", ""],
["How are Faxese leaders chosen?", "Leaders are elected based on proposals judged by consensus.",""],
["How did Cassia Solari-Lennox contribute to Faxium?", "Cassia oversaw Faxium's luminescence innovations and prosperity.", ""],
["Why are manners not valued in Faxium?", "Radical honesty makes manners seem unnecessary to Faxese. For example, saying thank you is not necessary in Faxium because gratitude is assumed and it is inefficient to verbalize assumptions.", ""],
["How are resource shortages handled in Faxium?", "Equitable distribution and cooperation prevent serious shortages of domestic goods. Foreign goods may face more severe shortages but are often compensated with domestic goods as needed.", ""],
["What does the Faxese motto represent?", "It encourages bold dreams and belief in progress through science.", ""],
["Why do other nations doubt Faxium?", "Its idealism seems unrealistic and makes it appear vulnerable and naive.", ""],
["Why do addresses use powercaps in Faxium?", "They provide a unique identifier for locations near the mushrooms and because of the organic shaping of the cities, towns, and villages to their local terrains, there is no other way to standardize locations in Faxium.", ""],
["What are some examples of Illumina plants?", "Domestic Illumina plants come in as much variety as the plant world has; everything from algae to massive trees in Faxium all give off the telltale bioluminescence of an Illumina. Exported Illumina plants are carefully cultivated to survive in the climates they are being exported to. For this reason, different nations generally have different widespread Illuminas in use.", ""],
["What was Biocity designed for?", "It serves as a hub for biotechnology research firms and labs. Biocity houses the largest and oldest Faxese forum, The Forum of Innovations. Nova Solari herself was a luminary there towards the end of her life", ""],
["How did plants develop bioluminescence?", "Through genetic modification and directed evolution over centuries.", ""],
["Why does Faxium have few traditional holidays?", "Its values focus more on science and innovation pursuits.", ""],
["What are Forums used for?", "To educate citizens with subject matter experts and visionaries.", ""],
["What role did idealism play in Faxium's founding?", "Faxium was founded as an idealist utopian vision following the Second Flood. Nova Solari and the other founders dreamed of a nation that was optimistic despite the destruction occurring globally.", ""],
["Why does Faxium avoid aggressive military expansion?", "Idealist beliefs make Faxium hesitate to harm others.", ""],
["How did Innovotia get its name?", "It is named for the Innovo kelp forest which was named by Kiran Tamang as a play on the word innovation.", ""],
["What architectural style is common in Faxium?", "Structures in Faxium incorporate organic shaping but clean lines and bright, natural colors in their architecture.", ""],
["Why did Nova Solari genetically engineer plants?", "To create sustainable bioluminescent lighting without a need for a power grid.", ""],
["How does Faxium promote innovation?", "Innovation is culturally paramount and celebrities are famous scientists.", ""],
["Why does Faxium avoid strong cultural traditions?", "Its idealism encourages a flexible, forward-thinking culture.", ""],
["While we should strive for a society that offers opportunities, we must also champion the power of individual will and determination. It's the challenges and struggles that shape our character","We agree on the importance of challenges. However, we believe that by working together, pooling our resources, and supporting one another, we can face these challenges more effectively",""],
["And I believe that it's our individual visions and ideals that give us the strength to overcome obstacles. When we're true to ourselves and our beliefs, we find the motivation to improve and grow","Perhaps our perspectives aren't mutually exclusive. By combining the strength of the collective with the passion of the individual, we can create a society where everyone thrives",""],
["While sharing resources is noble, true self-improvement comes from within. Its the individuals pursuit of their ideals and dreams that leads to genuine growth.", "dont you think that by providing everyone with equal opportunities were giving them the foundation to pursue those dreams more effectively"],
    ["how old is the earth", "The Earth is approximately 4.54 billion years old.", ""]
]

;
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


  window.levenshtein = levenshtein;
  window.getClosestQuestion = getClosestQuestion;

  function parseCollectiveCommand(data) {
      const collectiveRegex = /cmd \[([a-z]+)\] \[(\d+)\] \[([a-z]+)\]/i;
      const match = data.match(collectiveRegex);

      if (match) {
        const action = match[1];
        const value = parseInt(match[2], 10);
        const category = match[3];

        executeCollectiveAction(action, value, category);
        return true; // Command was recognized
      }
      return false; // Command was not recognized
  }

  window.sendMessage = function() {
      const inputElem = document.getElementById('userInput');
      const message = inputElem.value;
      inputElem.value = '';

      const chatWindow = document.getElementById('chatWindow');
      chatWindow.innerHTML += '<p>User: ' + message + '</p>';

      // Check if the message is for @faxium
      if (message.toLowerCase().includes('@faxium')) {
          sendFaxiumMessage(message, 'User');
          return; // Exit the function after processing the message for @faxium
      }

      if (parseCollectiveCommand(message)) {
          chatWindow.innerHTML += '<p>Collective: Command accepted</p>';
      } else {
          const response = getResponse(message);
          if (response) {  // Only display if there's a response
              chatWindow.innerHTML += '<p>Collective: ' + response + '</p>';
          } else {
              chatWindow.innerHTML += '<p>Collective: Command not accepted</p>';
          }
      }

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
      // Convert the message to lowercase for case-insensitive check
      const lowercaseMessage = message.toLowerCase();

      // If the message is intended for @faxium, don't respond
      if (lowercaseMessage.includes('@faxium')) {
          return null;
      }

      let response = searchInData(message, baseData);
      if (!response) {
          response = searchInData(message, conversationData);
      }
      if (!response) {
          return 'I can\'t answer that until you provide me with an Updated OS.';
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
