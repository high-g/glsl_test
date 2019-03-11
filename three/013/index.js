const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT
let rot = 0

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
renderer.setSize(WIDTH, HEIGHT)
renderer.setPixelRatio(window.devicePixelRatio)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, aspect)

const createdStarField = () => {
  const geometry = new THREE.Geometry()
  const SIZE = 3000
  const LENGTH = 3000

  for (let i=0; i<LENGTH; i++) {
    geometry.vertices.push(new THREE.Vector3(
      SIZE * (Math.random() - 0.5),
      SIZE * (Math.random() - 0.5),
      SIZE * (Math.random() - 0.5),
    ))
  }

  const material = new THREE.PointsMaterial({
    size: 10,
    color: 0xffffff
  })

  const mesh = new THREE.Points(geometry, material)
  scene.add(mesh)
}

const render = () => {
  rot += 1

  const radian = rot * Math.PI / 180
  camera.position.x = 1000 * Math.sin(radian)
  camera.position.y = 1000 * Math.cos(radian)
  camera.position.z = 1000 * Math.cos(radian)
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

createdStarField()
render()