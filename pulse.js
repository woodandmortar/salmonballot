document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('pulseMessage');

    const sayings = [
        "Your heading dictates the flow; make sure to keep a balanced approach.",
        "Cpt. Paxon comes from a long line of data scientists; their great grandfather of the twentieth degree M. Salmon founded Data Schools.",
        "Collect as many files as you can to train the Collective on how best to save humanity.",
        "If one nation begins to gain a lot more population than others, natural disasters will increase.",
        "If the nations’ populations drop under a certain threshold, the world’s population will decrease exponentially and humanity will cease to exist.",
        "Abzimuth exports precious metals and rare gemstones. While they mine all kinds of stones, their turquoise is their pride.",
        "The Last Library of Trantum is rumored to contain documents predating the Second Flood but no one has been able to confirm this and Trantum officially denies the claim.",
        "When you invent something in Faxium, you must apply for an official endorsement. Until your invention has been officially endorsed, you cannot sell it at Mercado.",
        "Leap Day and the 365th day are always in opposite seasons to keep the calendar even.",
        "Despite being one of the poorest nations, Ocidentica supplies most of the world’s inexpensive, long lasting fish types."
    ];

    let currentIndex = 0;  // to keep track of current saying

    function startTypingEffect(text) {
        let partialText = '';
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                partialText += text[index];
                element.textContent = partialText;
                index++;
                requestAnimationFrame(typeEffect);
            } else {
                element.classList.remove('message-line');
            }
        }

        element.textContent = '';
        element.classList.add('message-line');
        setTimeout(typeEffect, 200);
    }

    // Automatically cycle through sayings every 15 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % sayings.length; // Cycle through sayings
        startTypingEffect(sayings[currentIndex]);
    }, 30000);

    // Initial animation for the first saying
    startTypingEffect(sayings[currentIndex]);
});

let sphereGoal = 0;

function sendSphere2MoveCommand() {
    // Get the iframe's window object
    var iframeWindow = document.getElementById("bookFrame").contentWindow;
    sphereGoal += 1;
    // Send the message to the iframe
    iframeWindow.postMessage({
        type: 'MOVE_SPHERE',
        index: 1,  // Sphere 2 is at index 1 in the array
        position: { x: 400, y: 400, z: 600 }
    }, '*'); // Ideally, you should replace '*' with the exact origin of the iframe content for security
}
