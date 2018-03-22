const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
renderer.setClearColor(0xeeeeee)
renderer.setSize(WIDTH, HEIGHT)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
camera.position.set(30, 30, 30)
camera.lookAt(scene.position)

const axes = new THREE.AxesHelper(20)
scene.add(axes)

const boxGeometry = new THREE.BoxGeometry(5, 5, 5)
const boxMaterial = new THREE.MeshLambertMaterial({color: 0xff0000})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box)

const directionalLight = new THREE.DirectionalLight()
directionalLight.position.set(15, 15, 0)
scene.add(directionalLight)

const render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()
