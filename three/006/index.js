const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
  antialias: true,
  devicePixelRatio: window.devicePixelRatio
})
renderer.setSize(WIDTH, HEIGHT)
renderer.setClearColor(new THREE.Color(0xeeeeee))

const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0x000000, 50, 2000)

const camera = new THREE.PerspectiveCamera(50, aspect)
camera.position.set(0, 0, 1000)
camera.lookAt(scene.position)

const orbitControls = new THREE.OrbitControls(camera)

const group = new THREE.Group()
scene.add(group)

const boxGeometry = new THREE.BoxBufferGeometry(50, 50, 50)
const boxMaterial = new THREE.MeshStandardMaterial()

for(let i=0; i<1000; i++) {
  const box = new THREE.Mesh(boxGeometry, boxMaterial)
  box.position.set(
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000
  )
  box.rotation.set(
    2 * Math.PI * Math.random(),
    2 * Math.PI * Math.random(),
    2 * Math.PI * Math.random()
  )
  group.add(box)
}

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

let step = 0

const render = () => {
  camera.position.x = step
  camera.position.z = step
  step++
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()
