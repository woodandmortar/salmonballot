

let sphereGoal = 0;

function sendSphere2MoveCommand() {
    // Get the iframe's window object
    var iframeWindow = document.getElementById("bookFrame").contentWindow;
    sphereGoal += 1;
    // Send the message to the iframe
    iframeWindow.postMessage({
        type: 'MOVE_SPHERE',
        index: 0,  // Sphere 2 is at index 1 in the array
        position: { x: 400, y: 400, z: 600 }
    }, '*'); // Ideally, you should replace '*' with the exact origin of the iframe content for security
}
