const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect_ratio = WIDTH / HEIGHT
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, aspect_ratio, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})

init = () => {
  setRenderer()
  setCamera()
  setMesh()
  render()
}

setRenderer = () => {
  renderer.setClearColor(new THREE.Color(0xEEEEEE))
  renderer.setSize(WIDTH, HEIGHT)
  renderer.shadowMap.enabled = true
}

setCamera = () => {
  camera.position.set(10, 20, 30)
  camera.lookAt(scene.position)
}

setMesh = () => {
  const planeGeometry = new THREE.PlaneGeometry(60, 20)
  const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  scene.add(plane)
}

render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

init() 