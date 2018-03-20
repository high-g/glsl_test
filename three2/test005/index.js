const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
renderer.setClearColor(new THREE.Color(0xeeeeee))
renderer.setSize(WIDTH, HEIGHT)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 10000)
camera.position.set(0, 0, 3000)
camera.lookAt(scene.position)

const sphereGeometry = new THREE.SphereGeometry(300, 30, 30)
const loader = new THREE.TextureLoader()
const texture = loader.load('images/moonmap1k.jpg')
const material = new THREE.MeshStandardMaterial({map: texture})
const mesh = new THREE.Mesh(sphereGeometry, material)
scene.add(mesh)

const coneGeometry = new THREE.ConeGeometry(300, 300, 32)
const coneMaterial = new THREE.MeshStandardMaterial({color: 0xff0000})
const cone = new THREE.Mesh(coneGeometry, coneMaterial)
cone.position.set(-900, 900, 0)
scene.add(cone)

const cylinderGeometry = new THREE.CylinderGeometry(300, 300, 200, 300)
const cylinderMaterial = new THREE.MeshStandardMaterial({color: 0x00ff00})
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)
cylinder.position.set(-900, 0, 0)
scene.add(cylinder)

const torusGeometry = new THREE.TorusGeometry(200, 50, 60, 100)
const basicMaterial = new THREE.MeshBasicMaterial({color: 0x6ef9fe})
const basic = new THREE.Mesh(torusGeometry, basicMaterial)
basic.position.set(-900, -900, 0)
scene.add(basic)

const normalMaterial = new THREE.MeshNormalMaterial({color: 0x9688ff})
const normal = new THREE.Mesh(torusGeometry, normalMaterial)
normal.position.set(0, 900, 0)
scene.add(normal)

const directionalLight = new THREE.DirectionalLight(0xffffff)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)

const contorols = new THREE.OrbitControls(camera)

render = () => {
  rotation(mesh)
  rotation(cone)
  rotation(cylinder)

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

rotation = (obj) => {
  obj.rotation.x += 0.05 * (Math.random() - 0.3) 
  obj.rotation.y += 0.05 * (Math.random() - 0.3)
  obj.rotation.z += 0.05 * (Math.random() - 0.3)
  console.log(obj)
}

render()
