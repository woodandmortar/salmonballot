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

    const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
    directionalLight.position.set(0, 300, 0);
    scene.add(directionalLight);

    let ambientLight = new THREE.AmbientLight("#ffffff", 1);
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
    controls.autoRotateSpeed = .25;
    controls.maxDistance = 350;
    controls.minDistance = 50;
    controls.enablePan = false;

    const loader = new THREE.TextureLoader();
    const textureSphereBg = loader.load('https://woodandmortar.com/salmonballot/background2.png');
    const texturenucleus = loader.load('https://woodandmortar.com/salmonballot/baseLayer.png');
    const textureStar = loader.load("https://woodandmortar.com/salmonballot/jelly.png");
    const texture1 = loader.load("https://woodandmortar.com/salmonballot/jelly.png");
    const texture2 = loader.load("https://woodandmortar.com/salmonballot/jelly2.png");
    const texture4 = loader.load("https://woodandmortar.com/salmonballot/jelly2.png");


    /*  Nucleus  */
    texturenucleus.anisotropy = 26;
    let icosahedronGeometry = new THREE.IcosahedronGeometry(111 * blobScale, 10);
    let lambertMaterial = new THREE.MeshPhongMaterial({ map: texturenucleus,
    transparent: true, // Enable transparency
    opacity: 1.1, });
    nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
    scene.add(nucleus);

    const cubeGeometry = new THREE.BoxGeometry(15, 15, 15);
    const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(80, -40, -70); // Adjust position based on your needs
    cube.rotation.y = Math.PI / 2;
    nucleus.add(cube);

    // Create a new nucleus (10 units larger)
const nucleus2Radius = 112 * blobScale; // 10 units larger than the first nucleus
const icosahedronGeometry2 = new THREE.IcosahedronGeometry(nucleus2Radius, 10);
const lambertMaterial2 = new THREE.MeshPhongMaterial({
    map: texturenucleus,
    transparent: true,
    opacity: 0.5,
});
const nucleus2 = new THREE.Mesh(icosahedronGeometry2, lambertMaterial2);
nucleus2.rotation.copy(nucleus.rotation); // Copy rotation from the first nucleus
scene.add(nucleus2);





    /*    Sphere  Background   */
    textureSphereBg.anisotropy = 16;
    let geometrySphereBg = new THREE.SphereBufferGeometry(110, 40, 40);
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

        particleStar.velocity = THREE.MathUtils.randInt(500, 1000);

        particleStar.startX = particleStar.x;
        particleStar.startY = particleStar.y;
        particleStar.startZ = particleStar.z;

        starsGeometry.vertices.push(particleStar);
    }
    let starsMaterial = new THREE.PointsMaterial({
        size: 25,
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

        for (let i = 10; i > total; i--) {
            let radius = THREE.MathUtils.randInt(110, 70);
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
            v.velocity = THREE.MathUtils.randInt(150, 110);
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
