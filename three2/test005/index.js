const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
renderer.setSize(WIDTH, HEIGHT)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 10000)
camera.position.set(0, 0, 3000)

const sphereGeometry = new THREE.SphereGeometry(300, 30, 30)
const loader = new THREE.TextureLoader()
const texture = loader.load('images/moonmap1k.jpg')
const material = new THREE.MeshStandardMaterial({map: texture})
const mesh = new THREE.Mesh(sphereGeometry, material)
scene.add(mesh)

const coneGeometry = new THREE.ConeGeometry(300, 300, 32)
const coneMaterial = new THREE.MeshStandardMaterial({color: 0xff0000})
const cone = new THREE.Mesh(coneGeometry, coneMaterial)
cone.position.set(900, 0, 0)
scene.add(cone)

const cylinderGeometry = new THREE.CylinderGeometry(300, 300, 200, 300)
const cylinderMaterial = new THREE.MeshStandardMaterial({color: 0x00ff00})
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)
cylinder.position.set(-900, 0, 0)
scene.add(cylinder)

const directionalLight = new THREE.DirectionalLight(0xFFFFFF)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)

const contorols = new THREE.OrbitControls(camera)

render = () => {
  mesh.rotation.y += 0.01
  mesh.rotation.x += 0.01
  
  cone.rotation.y += 0.01
  cone.rotation.z += 0.01

  cylinder.rotation.x += 0.01

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()
