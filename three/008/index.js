const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
renderer.setSize(WIDTH, HEIGHT)
renderer.setClearColor(new THREE.Color(0xeeeeee))

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 10000)

// const planeGeometry = new THREE.PlaneGeometry(60, 30)
// const planeMaterial = new THREE.MeshBasicMaterial({color: 0x999999})
// const plane = new THREE.Mesh(planeGeometry, planeMaterial)
// plane.rotation.x = -0.5 * Math.PI
// scene.add(plane)

const group = new THREE.Group()
scene.add(group)

for(let i=0; i<10; i++) {
  const geometry = new THREE.SphereGeometry(2, 20, 20)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  const radian = i / 10 * Math.PI * 2

  mesh.position.set(
    10 * Math.cos(radian),
    10,
    10 * Math.sin(radian)
  )

  group.add(mesh)
}

const init = () => {
  render()
}

const render = () => {
  setCamera()

  group.rotation.y += 0.01

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

const setCamera = () => {
  camera.position.set(-50, 30, 20)
  camera.lookAt(scene.position)
}

init()
