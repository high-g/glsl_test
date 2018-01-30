import * as THREE from 'three';
import * as Stats from 'stats-js'
import dat from 'dat.gui'

const canvas = document.getElementById('canvas');
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: canvas});
const axes = new THREE.AxesHelper(20);

const planeGeometry = new THREE.PlaneGeometry(60, 20);
const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
const cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
const sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

const ambientLight = new THREE.AmbientLight(0x0c0c0c);
const spotLight = new THREE.SpotLight(0xffffff);

const gui = new dat.GUI();

const controls = new function () {
    this.rotationSpeed = 0.02;
    this.bouncingSpeed = 0.03;
};

let stats, step = 0;

const init = () => {

  window.addEventListener('resize', onResize, false);

  stats = initStats();
  
  renderer.setClearColor(new THREE.Color(0xeeeeee));
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;

  plane.receiveShadow = true;
  cube.castShadow = true;
  sphere.castShadow = true;
  spotLight.castShadow = true;

  plane.rotation.x = -0.5 * Math.PI;

  plane.position.set(15, 0, 0);
  cube.position.set(-10, 3, 0);
  sphere.position.set(20, 0, 2);
  camera.position.set(-30, 40, 30);
  spotLight.position.set(-20, 30, -5);

  scene.add(axes);
  scene.add(plane);
  scene.add(cube);
  scene.add(sphere);
  scene.add(ambientLight);
  scene.add(spotLight);

  camera.lookAt(scene.position);
  
  gui.add(controls, 'rotationSpeed', 0, 0.5);
  gui.add(controls, 'bouncingSpeed', 0, 0.5);
  
  loop();
}

const initStats = () => {
  var stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.getElementById('stats-output').appendChild(stats.domElement);
  return stats;
}

const loop = () => {
  stats.update();

  objRotation(
    cube,
    controls.rotationSpeed,
    controls.rotationSpeed,
    controls.rotationSpeed
  );

  step += controls.bouncingSpeed;
  sphere.position.x = 20 + (10 * (Math.cos(step)));
  sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));
  
  requestAnimationFrame(loop);
  renderer.render(scene, camera);
}

const objRotation = (obj, x, y, z) => {
  obj.rotation.x += x;
  obj.rotation.y += y;
  obj.rotation.z += z;
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
