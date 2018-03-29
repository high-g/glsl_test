const WIDTH = 960
const HEIGHT = 540
const aspect = WIDTH / HEIGHT
let lot = 0

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
renderer.setPixelRatio(window.devicePixelRatio)
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

const geometry = new THREE.SphereGeometry(30, 30, 30)
const material = new THREE.MeshNormalMaterial()
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


const render = () => {
  lot += 0.5
  const radian = lot * Math.PI / 180
  mesh.position.set(
    200 * Math.sin(radian),
    50,
    200 * Math.cos(radian)
  )

  renderer.render(scene, camera)

  // 球体のワールド座標
  const project = mesh.position.project(camera)
  const sx = WIDTH / 2 * (project.x + 1.0)
  const sy = HEIGHT / 2 * (-project.y + 1.0)

  const hud = document.getElementById('hud')
  hud.innerHTML = `👆スクリーン座標(${Math.round(sx)}, ${Math.round(sy)})`
  hud.style.transform = `translate(${sx}px, ${sy}px)`

  const line = document.getElementById('svgLine')
  line.setAttribute('x2', sx)
  line.setAttribute('y2', sy)

  requestAnimationFrame(render)
}

render()