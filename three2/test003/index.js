const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})

camera.position.set(-60, 25, 20)
camera.lookAt(scene.position)

renderer.setClearColor(new THREE.Color(0xeeeeee))
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true

const planeGeometry = new THREE.PlaneGeometry(60, 20)
const planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -0.5 * Math.PI
plane.position.set(0, 0, 5)
plane.receiveShadow = true
scene.add(plane)

const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
const sphereMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe: true})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.position.x = 20
sphere.position.y = 5
sphere.position.z = 2
scene.add(sphere);

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

renderer.render(scene, camera)

