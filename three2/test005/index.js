const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
renderer.setSize(WIDTH, HEIGHT)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 10000)
camera.position.set(0, 0, 1000)

const sphereGeometry = new THREE.SphereGeometry(300, 30, 30)
const loader = new THREE.TextureLoader()
const texture = loader.load('images/moonmap1k.jpg')
const material = new THREE.MeshStandardMaterial({map: texture})
const mesh = new THREE.Mesh(sphereGeometry, material)
scene.add(mesh)

const directionalLight = new THREE.DirectionalLight(0xFFFFFF)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)

render = () => {
  mesh.rotation.y += 0.01
  mesh.rotation.x += 0.01
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()
