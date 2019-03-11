let WIDTH = window.innerWidth
let HEIGHT = window.innerHeight
let aspect = WIDTH / HEIGHT
const canvas = document.getElementById('canvas')
const mouse = new THREE.Vector2()

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(WIDTH, HEIGHT)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000)
camera.position.set(0, 0, 1000)
camera.lookAt(scene.position)

const geometry = new THREE.BoxBufferGeometry(50, 50, 50)

const meshList = []

for(let i=0; i<200; i++) {
  const material = new THREE.MeshStandardMaterial({color: 0xffffff})
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(
    (Math.random() - 0.5) * 800,
    (Math.random() - 0.5) * 800,
    (Math.random() - 0.5) * 800
  )
  mesh.rotation.set(
    Math.random() * 2 * Math.PI,
    Math.random() * 2 * Math.PI,
    Math.random() * 2 * Math.PI
  )
  scene.add(mesh)
  meshList.push(mesh)
}

const directionalLight = new THREE.DirectionalLight(0xffffff)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)

const ambientLight = new THREE.AmbientLight(0x333333)
scene.add(ambientLight)

const raycaster = new THREE.Raycaster()

const handleMouseMove = (e) => {
  const element = e.currentTarget
  const x = e.clientX - element.offsetLeft
  const y = e.clientY - element.offsetTop
  const w = element.offsetWidth
  const h = element.offsetHeight
  
  mouse.x = (x / w) * 2 - 1
  mouse.y = -(y / h) * 2 + 1
}

const render = () => {
  raycaster.setFromCamera(mouse, camera)

  const intersects = raycaster.intersectObjects(meshList)
  console.log(intersects)

  meshList.map(mesh => {
    if(intersects.length > 0 &&
      mesh === intersects[0].object
    ) {
      mesh.material.color.setHex(0xff0000)
    } else {
      mesh.material.color.setHex(0xffffff)
    }
  })

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

canvas.addEventListener('mousemove', handleMouseMove)

render()