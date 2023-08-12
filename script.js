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

    const directionalLight = new THREE.DirectionalLight("#fff", 2);
    directionalLight.position.set(0, 50, -20);
    scene.add(directionalLight);

    let ambientLight = new THREE.AmbientLight("#ffffff", 1);
    ambientLight.position.set(0, 20, 20);
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
    controls.autoRotateSpeed = 1;
    controls.maxDistance = 350;
    controls.minDistance = 50;
    controls.enablePan = false;

    const loader = new THREE.TextureLoader();
    const textureSphereBg = loader.load('https://woodandmortar.com/salmonballot/background.png');
    const texturenucleus = loader.load('https://woodandmortar.com/salmonballot/background.png');
    const textureStar = loader.load("https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png");
    const texture1 = loader.load("https://i.ibb.co/F8by6wW/p2-b3gnym.png");
    const texture2 = loader.load("https://i.ibb.co/yYS2yx5/p3-ttfn70.png");
    const texture4 = loader.load("https://i.ibb.co/yWfKkHh/p4-avirap.png");


    /*  Nucleus  */
    texturenucleus.anisotropy = 6;
    let icosahedronGeometry = new THREE.IcosahedronGeometry(110 * blobScale, 10);
    let lambertMaterial = new THREE.MeshPhongMaterial({ map: texturenucleus });
    nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
    scene.add(nucleus);

    const cubeGeometry = new THREE.BoxGeometry(20, 20, 20);
    const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 0, -110); // Adjust position based on your needs
    nucleus.add(cube);

    const cogGeometry = new THREE.CylinderBufferGeometry(10, 20, 10, 16);
const cogMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
const cog = new THREE.Mesh(cogGeometry, cogMaterial);
cog.rotation.x = Math.PI / 2;

// Define the spherical coordinates for the cog's placement
const sphericalCoordinates = new THREE.Spherical(110, Math.PI, Math.PI / 2); // Adjust the angles
const position = new THREE.Vector3().setFromSpherical(sphericalCoordinates);
cog.position.copy(position);

// Calculate the angle needed to orient the cog toward the sphere's center
const orientationAngle = Math.atan2(position.y, position.x) - Math.PI;

// Set the cog's rotation to the calculated orientation angle
cog.rotation.z = orientationAngle;

// Rotate the cog by 90 degrees around its y-axis
cog.rotation.y = Math.PI / 2;

nucleus.add(cog);

// Create a large cone for the mountain ridge
const coneGeometry = new THREE.ConeBufferGeometry(20, 40, 30);
const coneMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 }); // Brown color
const largeCone = new THREE.Mesh(coneGeometry, coneMaterial);

// Define spherical coordinates for the large cone's placement on the opposite side
const largeConeSphericalCoordinates = new THREE.Spherical(-110, Math.PI, (-Math.PI / 4)); // Adjust the angles
const largeConePosition = new THREE.Vector3().setFromSpherical(largeConeSphericalCoordinates);

// Position the large cone on the opposite side
largeCone.position.copy(largeConePosition);

scene.add(largeCone);

// Create two smaller cones
const smallConeGeometry = new THREE.ConeBufferGeometry(5, 15, 16);
const smallConeMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 }); // Brown color

// Define spherical coordinates for the first small cone's placement
const smallConeSphericalCoordinates1 = new THREE.Spherical(-110, Math.PI, (-Math.PI / 30.1)); // Adjust the angles
const smallConePosition1 = new THREE.Vector3().setFromSpherical(smallConeSphericalCoordinates1);
const smallCone1 = new THREE.Mesh(smallConeGeometry, smallConeMaterial);
smallCone1.position.copy(smallConePosition1);
scene.add(smallCone1);

// Define spherical coordinates for the second small cone's placement
const smallConeSphericalCoordinates2 = new THREE.Spherical(-110, Math.PI, (-Math.PI / 4 - 30.1)); // Adjust the angles
const smallConePosition2 = new THREE.Vector3().setFromSpherical(smallConeSphericalCoordinates2);
const smallCone2 = new THREE.Mesh(smallConeGeometry, smallConeMaterial);
smallCone2.position.copy(smallConePosition2);
scene.add(smallCone2);



    /*    Sphere  Background   */
    textureSphereBg.anisotropy = 16;
    let geometrySphereBg = new THREE.SphereBufferGeometry(150, 40, 40);
    let materialSphereBg = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map: textureSphereBg,
        transparent: true, // Enable transparency
        opacity: 0.4,
    });
    sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
    scene.add(sphereBg);


    /*    Moving Stars   */
    let starsGeometry = new THREE.Geometry();

    for (let i = 0; i < 50; i++) {
        let particleStar = randomPointSphere(150);

        particleStar.velocity = THREE.MathUtils.randInt(50, 200);

        particleStar.startX = particleStar.x;
        particleStar.startY = particleStar.y;
        particleStar.startZ = particleStar.z;

        starsGeometry.vertices.push(particleStar);
    }
    let starsMaterial = new THREE.PointsMaterial({
        size: 5,
        color: "#ffffff",
        transparent: true,
        opacity: 0.8,
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

        for (let i = 0; i < total; i++) {
            let radius = THREE.MathUtils.randInt(149, 70);
            let particles = randomPointSphere(radius);
            pointGeometry.vertices.push(particles);
        }
        return new THREE.Points(pointGeometry, pointMaterial);
    }
    scene.add(createStars(texture1, 15, 20));
    scene.add(createStars(texture2, 5, 5));
    scene.add(createStars(texture4, 7, 5));


    function randomPointSphere (radius) {
        let theta = 2 * Math.PI * Math.random();
        let phi = Math.acos(2 * Math.random() - 1);
        let dx = 0 + (radius * Math.sin(phi) * Math.cos(theta));
        let dy = 0 + (radius * Math.sin(phi) * Math.sin(theta));
        let dz = 0 + (radius * Math.cos(phi));
        return new THREE.Vector3(dx, dy, dz);
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
            v.velocity = THREE.MathUtils.randInt(50, 300);
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
    nucleus.rotation.y += 0.002;


    //Sphere Beckground Animation
    sphereBg.rotation.x += 0.002;
    sphereBg.rotation.y += 0.002;
    sphereBg.rotation.z += 0.002;


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
