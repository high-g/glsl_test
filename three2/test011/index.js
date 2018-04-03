const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
renderer.setSize(WIDTH, HEIGHT)
renderer.setClearColor(new THREE.Color(0xcccccc))

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000)
camera.position.set(10, 0, 10)
camera.lookAt(scene.position)

const boxGeometry = new THREE.SphereGeometry(4, 30, 20)
const boxMaterial = new THREE.MeshNormalMaterial({wireframe: true})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box)

const render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

const onResize = () => {
  
}

render()