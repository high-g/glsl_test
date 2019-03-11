THREE = require('three/build/three.min.js');
require('three/examples/js/controls/OrbitControls.js');
require('three/examples/js/loaders/TDSLoader.js');

const WIDTH = 960;
const HEIGHT = 540;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(WIDTH, HEIGHT);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, WIDTH/HEIGHT, 0.1, 1000);
camera.position.set(0, 0, 5);

const controls = new THREE.OrbitControls(camera);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

const loader = new THREE.TDSLoader();
loader.setPath('image_model/');

loader.load('3d/portalgun.3ds', (object) => {
  scene.add(object);
});

const tick = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

tick();
