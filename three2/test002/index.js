const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, WIDTH/HEIGHT, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
});
let x_position = 0
let z_position = 0

const init = () => {
  setHelper()
  setRenderer()
  setCamera(-50, 40, 30)
  setPlane()
  setLight()
  createMesh()
  render()
}

const setHelper = () => {
  const axes = new THREE.AxesHelper(20)
  scene.add(axes)
}

const setRenderer = () => {
  renderer.setClearColor(new THREE.Color(0xeeeeee))
  renderer.setSize(WIDTH, HEIGHT)
  renderer.shadowMap.enabled = true
}

const setCamera = (x, y, z) => {
  camera.position.set(x, y, z)
  camera.lookAt(scene.position)
}

const setPlane = () => {
  const planeGeometry = new THREE.PlaneGeometry(60, 40)
  const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.rotation.set(
    -0.5 * Math.PI, 0, 0
  )
  plane.receiveShadow = true
  scene.add(plane)
}

const setLight = () => {
  const spotLight = new THREE.SpotLight(0xffffff)
  spotLight.position.set(-30, 30, 0)
  spotLight.castShadow = true
  scene.add(spotLight)
}

const createMesh =  () => {
  const sphereGeomtry = new THREE.SphereGeometry(4, 20, 20)
  const sphereMaterial = new THREE.MeshLambertMaterial({color: 0xff0000})
  const sphere = new THREE.Mesh(sphereGeomtry, sphereMaterial)
  sphere.position.set(10, 5, 0)
  sphere.castShadow = true
  scene.add(sphere)

  const cubeGeomtry = new THREE.BoxGeometry(4, 4, 4)
  const cubeMaterial = new THREE.MeshLambertMaterial({color: 0x0000ff})
  const cube = new THREE.Mesh(cubeGeomtry, cubeMaterial)
  cube.position.set(-20, 15, 20)
  cube.castShadow = true
  scene.add(cube)
}

const moveCamera = () => {
  setCamera(
    -50 * Math.sin(x_position * Math.PI / 180),
    40,
    30 * Math.cos(z_position * Math.PI / 180)
  )
  x_position++
  z_position++
}

const render = () => {
  moveCamera()
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

init()