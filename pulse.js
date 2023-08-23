document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('pulseMessage');

    const sayings = [
        "Your heading dictates the flow, make sure to keep a balanced approach.",
        "Dr. Paxton comes from a long line of Data scientists, her great great grandfather M.Salmon founded Data Schools.",
        "Collect as many files as you can to train the Collective on how best to save humanity.",
        "If the nations being to gain a lot more population than others, natural disasters are increased.",
        "If the nations population goes under a certain threshold, the worlds population will exponentially decrease and humanity will cease to exist."
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
