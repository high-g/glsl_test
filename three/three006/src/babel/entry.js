import * as THREE from 'three';

const canvas = document.getElementById('canvas');
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: canvas});
const axes = new THREE.AxesHelper(20);

const planeGeometry = new THREE.PlaneGeometry(60, 20);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: true});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

const init = () => {
  renderer.setClearColor(new THREE.Color(0xeeeeee));
  renderer.setSize(WIDTH, HEIGHT);

  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15, 0, 0);
  cube.position.set(-4, 3, 0);
  sphere.position.set(20, 4, 2);
  camera.position.set(-30, 40, 30);

  scene.add(axes);
  scene.add(plane);
  scene.add(cube);
  scene.add(sphere);
  
  camera.lookAt(scene.position);
  render();
}

const render = () => {
  renderer.render(scene, camera);
}

init();
