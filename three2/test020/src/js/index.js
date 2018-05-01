const width = window.innerWidth
const height = window.innerHeight
const aspect = width / height
const canvas = document.getElementById('canvas')

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})
renderer.setClearColor(0xeeeeee)
renderer.setSize(width, height)
renderer.shadowMap.enabled = true

const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
camera.position.set(10, 10, 10)
camera.lookAt(scene.position)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(20, 20, 20)
scene.add(spotLight)

const step = 0

let group = new THREE.Object3D()
const loader = new THREE.CTMLoader()

loader.load("assets/models/auditt_wheel.ctm", (geo) => {
  const mat = new THREE.MeshLambertMaterial({color: 0xff8888})
  group = new THREE.Mesh(geo, mat)
  group.scale.set(20, 20, 20)
  scene.add(group)
  render()
}, {})

const render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
