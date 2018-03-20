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

const lanbertMaterial = new THREE.MeshLambertMaterial({color: 0xf3459e})
const lanbert = new THREE.Mesh(torusGeometry, lanbertMaterial)
lanbert.position.set(0, -900, 0)
scene.add(lanbert)

const phongMaterial = new THREE.MeshPhongMaterial({color: 0x68f073})
const phong = new THREE.Mesh(torusGeometry, phongMaterial)
phong.position.set(900, 900, 0)
scene.add(phong)

const toonMaterial = new THREE.MeshToonMaterial({color: 0xffe5aa})
const toon = new THREE.Mesh(torusGeometry, toonMaterial)
toon.position.set(900, 0, 0)
scene.add(toon)

const boxGeometry = new THREE.BoxGeometry(400, 400, 400)
const boxMaterial = new THREE.MeshPhongMaterial({color: 0x0468fc})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.set(900, -900, 0)
scene.add(box)

const directionalLight = new THREE.DirectionalLight(0xffffff)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)

const contorols = new THREE.OrbitControls(camera)

render = () => {
  rotation(mesh)
  rotation(cone)
  rotation(cylinder)
  rotation(basic)
  rotation(normal)
  rotation(lanbert)
  rotation(phong)
  rotation(toon)
  rotation(box)

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

rotation = (obj) => {
  obj.rotation.x += 0.05 * Math.random()
  obj.rotation.y += 0.05 * Math.random()
}

render()
