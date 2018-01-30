import * as THREE from 'three';
import * as Stats from 'stats-js'
import dat from 'dat.gui'


const canvas = document.getElementById('canvas');
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50, WIDTH / HEIGHT, 0.1, 1000
);

const renderer = new THREE.WebGLRenderer({canvas: canvas});

const planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

const ambientLight = new THREE.AmbientLight(0x0c0c0c);
const spotLight = new THREE.SpotLight(0xffffff);

const axes = new THREE.AxesHelper(20);

const gui = new dat.GUI();

const controls = new function() {
  this.rotationSpeed = 0.02;
  this.numberOfObjects = scene.children.length;
  
  this.removeCube = () => {
    const allChildren = scene.children;
    const lastObject = allChildren[allChildren.length - 1];
    if(lastObject instanceof THREE.Mesh) {
      scene.remove(lastObject);
      this.numberOfObjects = scene.children.length;
    }
  }
  
  this.addCube = () => {
    const cubeSize = Math.ceil((Math.random() * 3));
    const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.name = 'cube-' + scene.children.length;
    
    cube.position.set(
      -30 + Math.round((Math.random() * planeGeometry.parameters.width)),
      Math.round((Math.random() * 5)),
      -20 + Math.round((Math.random() * planeGeometry.parameters.height))
    );
console.log(cube);
    scene.add(cube);
    this.numberOfObjects = scene.children.length;
  }
  
  this.outputObjects = () => {
    console.log(scene.children);
  }
}

const init = () => {
  setRenderer();
  setPlane();
  setCamera();
  setSpotLight();
  sceneAdd();
  setDatGUI();
  render();
}

const setRenderer = () => {
  renderer.setClearColor(new THREE.Color(0xeeeeee));
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;
}

const setPlane = () => {
  plane.receiveShadow = true;
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(0,0,0);
}

const setCamera = () => {
  camera.position.set(-30, 40, 30);
  camera.lookAt(scene.position);
}

const setSpotLight = () => {
  spotLight.position.set(-20, 30, -5);
  spotLight.castShadow = true;
}

const setDatGUI = () => {
  gui.add(controls, 'rotationSpeed', 0, 0.5);
  gui.add(controls, 'addCube');
}

const sceneAdd = () => {
  scene.add(axes);
  scene.add(camera);
  scene.add(plane);
  scene.add(ambientLight);
  scene.add(spotLight);
}  

const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

init();

