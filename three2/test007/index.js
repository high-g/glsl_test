const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect = WIDTH / HEIGHT

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
renderer.setSize(WIDTH, HEIGHT)
renderer.setClearColor(0xf9f9f9, 1.0)

const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0xf9f9f9, 200, 300)

const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)

const material = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load('image/shuzo.jpg')
})
material.fog = true

for(let i=0; i<1000; i++) {
  const sprite = new THREE.Sprite(material)
  sprite.position.set(
    500 * (Math.random() - 0.5),
    100 * Math.random() - 40,
    500 * (Math.random() - 0.5)
  )
  sprite.scale.set(10, 10, 10)
  scene.add(sprite)
}

const plane = new THREE.GridHelper(300, 10, 0x888888, 0x888888)
plane.position.y = -40
scene.add(plane)

const render = () => {
  camera.position.set(
    100 * Math.sin(Date.now() / 2000),
    50 * Math.sin(Date.now() / 1000) + 60,
    100 * Math.cos(Date.now() / 2000)
  )
  camera.lookAt(new THREE.Vector3(0, 0, 0))
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()
