let renderer,
scene,
camera,
sphereBg,
nucleus,
stars,
controls,
container = document.getElementById("canvas_container"),
timeout_Debounce,
noise = new SimplexNoise(),
cameraSpeed = 0,
blobScale = 1;


init();
animate();


function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.01, 1000)
    camera.position.set(0,0,230);

    const directionalLight = new THREE.DirectionalLight("#CBC3E3", 1);
    directionalLight.position.set(0, 300, 0);
    scene.add(directionalLight);

    let ambientLight = new THREE.AmbientLight("#CBC3E3", 1);
    ambientLight.position.set(0, 300, 0);
    scene.add(ambientLight);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    //OrbitControl
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = .15;
    controls.maxDistance = 550;
    controls.minDistance = 30;
    controls.enablePan = false;

    const loader = new THREE.TextureLoader();
    const textureSphereBg = loader.load('https://woodandmortar.com/salmonballot/webLayer.png');
    const texturenucleus = loader.load('https://woodandmortar.com/salmonballot/webLayer.png');
    const texturenucleus2 = loader.load('https://woodandmortar.com/salmonballot/baseLayer.png');
    const texturenucleus3 = loader.load('https://woodandmortar.com/salmonballot/earthLayer.png');
    const texturenucleus4 = loader.load('https://woodandmortar.com/salmonballot/buildingLayer.png');
    const texturenucleus5 = loader.load('https://woodandmortar.com/salmonballot/baseLayer2.png');
    const texturenucleus6 = loader.load('https://woodandmortar.com/salmonballot/background2.png');
    const texturenucleus7 = loader.load('https://woodandmortar.com/salmonballot/coreLayer.png');
    const texturenucleus8 = loader.load('https://woodandmortar.com/salmonballot/webLayer.png');
    const texturenucleus9 = loader.load('https://woodandmortar.com/salmonballot/webLayer.png');
    const texturenucleus10 = loader.load('https://woodandmortar.com/salmonballot/cloudLayer.png');
    const texturenucleus11 = loader.load('https://woodandmortar.com/salmonballot/textLayer.png');
    const texturenucleus12 = loader.load('https://woodandmortar.com/salmonballot/lightLayer.png');
    const textureStar = loader.load("https://woodandmortar.com/salmonballot/jelly.png");
    const texture1 = loader.load("https://woodandmortar.com/salmonballot/jelly.png");
    const texture2 = loader.load("https://woodandmortar.com/salmonballot/jelly2.png");
    const texture4 = loader.load("https://woodandmortar.com/salmonballot/jelly2.png");






    /*  Nucleus  */
    texturenucleus.anisotropy = 24;
    let icosahedronGeometry = new THREE.IcosahedronGeometry(40 * blobScale, 10);
    let lambertMaterial = new THREE.MeshPhongMaterial({ map: texturenucleus,
    transparent: true, // Enable transparency
    opacity: .9, });
    nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
    scene.add(nucleus);






    // Copy Layer
    texturenucleus9.anisotropy = 24;
    const nucleus9Radius = 52 * blobScale; // 10 units larger than the first nucleus
    const icosahedronGeometry9 = new THREE.IcosahedronGeometry(nucleus9Radius, 10);
    const lambertMaterial9 = new THREE.MeshPhongMaterial({
    map: texturenucleus9,
    transparent: true,
    opacity: 0.9,
    });
    const nucleus9 = new THREE.Mesh(icosahedronGeometry9, lambertMaterial9);
    nucleus9.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
    scene.add(nucleus9);

    // End of Copy layer


    // Copy Layer
    texturenucleus8.anisotropy = 24;
    const nucleus8Radius = 54 * blobScale; // 10 units larger than the first nucleus
    const icosahedronGeometry8 = new THREE.IcosahedronGeometry(nucleus8Radius, 10);
    const lambertMaterial8 = new THREE.MeshPhongMaterial({
    map: texturenucleus8,
    transparent: true,
    opacity: 0.9,
    });
    const nucleus8 = new THREE.Mesh(icosahedronGeometry8, lambertMaterial8);
    nucleus8.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
    scene.add(nucleus8);

    // End of Copy layer

    // Copy Layer
    texturenucleus5.anisotropy = 24;
    const nucleus5Radius = 110 * blobScale; // 10 units larger than the first nucleus
    const icosahedronGeometry5 = new THREE.IcosahedronGeometry(nucleus5Radius, 10);
    const lambertMaterial5 = new THREE.MeshPhongMaterial({
    map: texturenucleus5,
    transparent: true,
    opacity: 0.9,
    });
    const nucleus5 = new THREE.Mesh(icosahedronGeometry5, lambertMaterial5);
    nucleus5.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
    scene.add(nucleus5);

    // End of Copy layer







    // Copy Layer
    texturenucleus6.anisotropy = 24;
    const nucleus6Radius = 109 * blobScale; // 10 units larger than the first nucleus
    const icosahedronGeometry6 = new THREE.IcosahedronGeometry(nucleus6Radius, 10);
    const lambertMaterial6 = new THREE.MeshPhongMaterial({
      side: THREE.BackSide,
    map: texturenucleus6
    });
    const nucleus6 = new THREE.Mesh(icosahedronGeometry6, lambertMaterial6);
    nucleus6.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
    scene.add(nucleus6);

    // End of Copy layer
    // Copy Layer
    texturenucleus7.anisotropy = 24;
    const nucleus7Radius = 40 * blobScale; // 10 units larger than the first nucleus
    const icosahedronGeometry7 = new THREE.IcosahedronGeometry(nucleus7Radius, 10);
    const lambertMaterial7 = new THREE.MeshPhongMaterial({
    map: texturenucleus7
    });
    const nucleus7 = new THREE.Mesh(icosahedronGeometry7, lambertMaterial7);
    nucleus7.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
    scene.add(nucleus7);

    // End of Copy layer


    const cubeGeometry = new THREE.BoxGeometry(15, 15, 15);
    const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(80, -40, -70); // Adjust position based on your needs
    cube.rotation.y = Math.PI / 2;
    nucleus.add(cube);

    // Copy Layer
    texturenucleus2.anisotropy = 24;
const nucleus2Radius = 111 * blobScale; // 10 units larger than the first nucleus
const icosahedronGeometry2 = new THREE.IcosahedronGeometry(nucleus2Radius, 10);
const lambertMaterial2 = new THREE.MeshPhongMaterial({
    map: texturenucleus2,
    transparent: true,
    opacity: 0.99,
});
const nucleus2 = new THREE.Mesh(icosahedronGeometry2, lambertMaterial2);
nucleus2.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
scene.add(nucleus2);

  // End of Copy layer

  // Copy Layer
  texturenucleus3.anisotropy = 24;
const nucleus3Radius = 112 * blobScale; // 10 units larger than the first nucleus
const icosahedronGeometry3 = new THREE.IcosahedronGeometry(nucleus3Radius, 10);
const lambertMaterial3 = new THREE.MeshPhongMaterial({
  map: texturenucleus3,
  transparent: true,
  opacity: 0.85,
});
const nucleus3 = new THREE.Mesh(icosahedronGeometry3, lambertMaterial3);
nucleus3.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
scene.add(nucleus3);

// End of Copy layer

// Copy Layer
texturenucleus4.anisotropy = 24;
const nucleus4Radius = 113 * blobScale; // 10 units larger than the first nucleus
const icosahedronGeometry4 = new THREE.IcosahedronGeometry(nucleus4Radius, 10);
const lambertMaterial4 = new THREE.MeshPhongMaterial({
map: texturenucleus4,
transparent: true,
opacity: 0.9,
});
const nucleus4 = new THREE.Mesh(icosahedronGeometry4, lambertMaterial4);
nucleus4.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
scene.add(nucleus4);
nucleus4.rotation.y -= 0.002;
// End of Copy layer

// Copy Layer
// Define the nucleus10 object
const nucleus10Radius = 114 * blobScale;
const icosahedronGeometry10 = new THREE.IcosahedronGeometry(nucleus10Radius, 10);
const lambertMaterial10 = new THREE.MeshPhongMaterial({
    map: texturenucleus10,
    transparent: true,
    opacity: 0.9,
});
const nucleus10 = new THREE.Mesh(icosahedronGeometry10, lambertMaterial10);
nucleus10.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
scene.add(nucleus10);

// Rotation speed in radians per second
const rotationSpeed = THREE.MathUtils.degToRad(.01); // 30 degrees per second

// Function to rotate the nucleus10 counterclockwise by a certain angle
function rotateNucleus10() {
    nucleus10.rotation.y -= rotationSpeed; // Rotate counterclockwise
}

// Call the rotateNucleus10 function every 1000 milliseconds (1 second)
setInterval(rotateNucleus10, 5);


// End of Copy layer
// Copy Layer
texturenucleus12.anisotropy = 24;
const nucleus12Radius = 119 * blobScale; // 10 units larger than the first nucleus
const icosahedronGeometry12 = new THREE.IcosahedronGeometry(nucleus12Radius, 10);
const lambertMaterial12 = new THREE.MeshPhongMaterial({
map: texturenucleus12,
transparent: true,
opacity: 0.5,
});
const nucleus12 = new THREE.Mesh(icosahedronGeometry12, lambertMaterial12);
nucleus12.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
scene.add(nucleus12);

// End of Copy layer

// Copy Layer
texturenucleus11.anisotropy = 24;
const nucleus11Radius = 150 * blobScale; // 10 units larger than the first nucleus
const icosahedronGeometry11 = new THREE.IcosahedronGeometry(nucleus11Radius, 10);
const lambertMaterial11 = new THREE.MeshPhongMaterial({
map: texturenucleus11,
transparent: true,
opacity: 0.50,
});
const nucleus11 = new THREE.Mesh(icosahedronGeometry11, lambertMaterial11);
nucleus11.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
scene.add(nucleus11);

// End of Copy layer

    /*    Sphere  Background   */
    textureSphereBg.anisotropy = 16;
    let geometrySphereBg = new THREE.SphereBufferGeometry(40, 40, 40);
    let materialSphereBg = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map: textureSphereBg,
    });
    sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
    scene.add(sphereBg);


    /*    Moving Stars   */
    let starsGeometry = new THREE.Geometry();

    for (let i = 0; i < 7; i++) {
        let particleStar = randomPointSphere(90);

        particleStar.velocity = THREE.MathUtils.randInt(50, 100);

        particleStar.startX = particleStar.x;
        particleStar.startY = particleStar.y;
        particleStar.startZ = particleStar.z;

        starsGeometry.vertices.push(particleStar);
    }
    let starsMaterial = new THREE.PointsMaterial({
        size: 4,
        color: "#ffffff",
        map: textureStar,
        blending: THREE.AdditiveBlending,
    });
    starsMaterial.depthWrite = false;
    stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);


    /*    Fixed Stars   */
    function createStars(texture, size, total) {
        let pointGeometry = new THREE.Geometry();
        let pointMaterial = new THREE.PointsMaterial({
            size: size,
            map: texture,
            blending: THREE.AdditiveBlending,
        });

        for (let i = 30; i > total; i--) {
            let radius = THREE.MathUtils.randInt(90, 70);
            let particles = randomPointSphere(radius);
            pointGeometry.vertices.push(particles);
        }
        return new THREE.Points(pointGeometry, pointMaterial);
    }
    scene.add(createStars(texture1, 5, 20));
    scene.add(createStars(texture2, 10, 15));
    scene.add(createStars(texture4, 15, 10));


    function randomPointSphere (radius) {
        let theta = 2 * Math.PI * Math.random();
        let phi = Math.acos(2 * Math.random() - 1);
        let dx = 0 + (radius * Math.sin(phi) * Math.cos(theta));
        let dy = 0 + (radius * Math.sin(phi) * Math.sin(theta));
        let dz = 0 + (radius * Math.cos(phi));
        return new THREE.Vector3(dx, dy, dz);
    }

    // After defining the 'camera', 'cube', and other variables

    // Add an event listener to the button
    const centerCameraButton = document.getElementById("centerCameraButton");
    centerCameraButton.addEventListener("click", centerCameraOverCube);

    // Define the function to center the camera over the cube
    function centerCameraOverCube() {
        // Calculate the position to center the camera over the cube
        const cubePosition = cube.position.clone();
        const cameraDistance = 250; // Adjust as needed
        const cameraPosition = cubePosition.clone().add(new THREE.Vector3(0, 0, cameraDistance));

        // Set the camera's position and update the controls
        camera.position.copy(cameraPosition);
        controls.target.copy(cubePosition);
        controls.update();
    }
}




function animate() {


    //Stars  Animation
    stars.geometry.vertices.forEach(function (v) {
        v.x += (0 - v.x) / v.velocity;
        v.y += (0 - v.y) / v.velocity;
        v.z += (0 - v.z) / v.velocity;

        v.velocity -= 0.3;

        if (v.x <= 5 && v.x >= -5 && v.z <= 5 && v.z >= -5) {
            v.x = v.startX;
            v.y = v.startY;
            v.z = v.startZ;
            v.velocity = THREE.MathUtils.randInt(50, 110);
        }
    });


    //Nucleus Animation
       nucleus.geometry.vertices.forEach(function (v) {
           let time = Date.now();
           v.normalize();
           let distance = nucleus.geometry.parameters.radius + noise.noise3D(
               v.x + time * 0.0005,
               v.y + time * 0.0003,
               v.z + time * 0.0008
           ) * blobScale;
           v.multiplyScalar(distance);
       })
       nucleus.geometry.verticesNeedUpdate = true;
       nucleus.geometry.normalsNeedUpdate = true;
       nucleus.geometry.computeVertexNormals();
       nucleus.geometry.computeFaceNormals();




    controls.update();
    stars.geometry.verticesNeedUpdate = true;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);

}



/*     Resize     */
window.addEventListener("resize", () => {
    clearTimeout(timeout_Debounce);
    timeout_Debounce = setTimeout(onWindowResize, 80);
});
function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}
