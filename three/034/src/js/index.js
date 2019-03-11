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

setCamera = () => {
  camera.position.set(-25, 30, 25)
  camera.lookAt(new THREE.Vector3(10, 0, 0))
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
  const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
  const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)

  plane.receiveShadow = true
  plane.rotation.x = -0.5 * Math.PI
  plane.position.set(15, 0, 0)

  scene.add(plane);

  var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  // position the sphere
  sphere.position.x = 20;
  sphere.position.y = 0;
  sphere.position.z = 2;
  sphere.castShadow = true;

  // add the sphere to the scene
  scene.add(sphere);
}

render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

init()