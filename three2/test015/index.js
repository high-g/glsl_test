const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT
const canvas = document.getElementById('canvas')
const CELL_NUM = 25

const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(WIDTH, HEIGHT)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, aspect)
camera.position.set(0, 0, 400)

const geometry = new THREE.Geometry()

for(let i = 0; i < CELL_NUM; i++) {
  for(let j = 0; j < CELL_NUM; j++) {
    for(let k = 0; k < CELL_NUM; k++) {
      const sampleGeometry = new THREE.BoxGeometry(5, 5, 5)
      const matrix = new THREE.Matrix4()
      matrix.makeTranslation(
        10 * (i - CELL_NUM / 2),
        10 * (j - CELL_NUM / 2),
        10 * (k - CELL_NUM / 2)
      )
      geometry.merge(sampleGeometry, matrix)
    }
  }
}

const material = new THREE.MeshNormalMaterial()
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const render = () => {
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}


render()