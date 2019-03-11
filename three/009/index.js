const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT
let lot = 0

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
renderer.setSize(WIDTH, HEIGHT)
renderer.setClearColor(new THREE.Color(0xeeeeee))

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
camera.position.set(100, 300, 500)
camera.lookAt(new THREE.Vector3(0, 0, 0))

const grid_helper = new THREE.GridHelper(600)
const axes_helper = new THREE.AxesHelper(300)
scene.add(grid_helper)
scene.add(axes_helper)

const group = new THREE.Group()
scene.add(group)

let target = new THREE.Mesh()
const geometry = new THREE.SphereGeometry(30, 30, 30)

for(let i=0; i<10; i++) {
  const material = i === 0
    ? new THREE.MeshNormalMaterial()
    : new THREE.MeshDepthMaterial()

  const mesh = new THREE.Mesh(geometry, material)
  const radian = i / 10 * Math.PI * 2
  mesh.position.set(
    200 * Math.sin(radian),
    50, 
    200 * Math.cos(radian),
  )
  group.add(mesh)

  if(i === 0) {
    targetMesh = mesh
  }
}

const lineGeometry = new THREE.Geometry()
lineGeometry.vertices.push(
  new THREE.Vector3(0,0,0),
  new THREE.Vector3(0,0,0)
)
const line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial())
scene.add(line)

const render = () => {
  group.rotation.x += 0.02
  group.rotation.y += 0.01

  const world = targetMesh.getWorldPosition()

  lineGeometry.vertices[0].copy(world)
  lineGeometry.verticesNeedUpdate = true

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()