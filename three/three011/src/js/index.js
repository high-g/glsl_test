window.THREE = require('three/build/three.min.js')
require('three/examples/js/QuickHull.js')
require('three/examples/js/utils/SceneUtils.js')
require('three/examples/js/geometries/ConvexGeometry.js')
require('three/examples/js/ParametricGeometries.js')

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH/HEIGHT, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
});

init = () => {
  setRenderer()
  setCamera()
  setAmbientLight()
  setSpotLight()
  setPlane()
  render()
}

setRenderer = () => {
  renderer.setClearColor(new THREE.Color(0xeeeeee))
  renderer.setSize(WIDTH, HEIGHT)
  renderer.shadowMap.enabled = true
}

setScene = () => {
  scene.overrideMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
} 

setCamera = () => {
  camera.position.set(-30, 40, 30)
  camera.lookAt(scene.position)
}

setAmbientLight = () => {
  const ambientLight = new THREE.AmbientLight(0x0c0c0c)
  scene.add(ambientLight)
}

setSpotLight = () => {
  const spotLight = new THREE.SpotLight(0xffffff)
  spotLight.position.set(-20, -30, -5)
  spotLight.castShadow = true
  scene.add(spotLight)
}

setPlane = () => {
  const planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1)
  const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);

  plane.receiveShadow = true;
  scene.add(plane);
}

render = () => {
console.log(camera)
  requestAnimationFrame(render)
  renderer.render(scene, camera);
}

init()