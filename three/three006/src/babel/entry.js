import * as THREE from 'three';

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

const spotLight = new THREE.SpotLight(0xffffff);

const init = () => {
  renderer.setClearColor(new THREE.Color(0xeeeeee));
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMapEnabled = true;

  plane.receiveShadow = true;
  cube.castShadow = true;
  sphere.castShadow = true;
  spotLight.castShadow = true;

  plane.rotation.x = -0.5 * Math.PI;

  plane.position.set(15, 0, 0);
  cube.position.set(-10, 3, 0);
  sphere.position.set(20, 4, 2);
  camera.position.set(-30, 40, 30);
  spotLight.position.set(-20, 30, -5);

  scene.add(axes);
  scene.add(plane);
  scene.add(cube);
  scene.add(sphere);
  scene.add(spotLight);

  camera.lookAt(scene.position);
  render();
}

const render = () => {
  renderer.render(scene, camera);
}

init();
