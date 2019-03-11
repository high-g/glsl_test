const init = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const aspect = width / height
  const canvas = document.getElementById('canvas')

  const renderer = new THREE.WebGLRenderer({canvas: canvas})
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
  camera.position.set(-100, 150, 500)
  camera.lookAt(new THREE.Vector3(0,0,0))

  const mesh = new Donuts()
  scene.add(mesh)

  const render = () => {
    mesh.rotation.x += 0.02
    mesh.rotation.y += 0.01

    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
}

class Donuts extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.TorusGeometry(120, 40, 60, 50)
    const material = new THREE.MeshNormalMaterial()
    super(geometry, material)
  }
}

init()
