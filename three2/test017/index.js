class MyGroup extends THREE.Group {
  constructor() {
    super()

    const length = 10
    for(let i=0; i<length; i++) {
      const geometry = new THREE.SphereGeometry(30, 30, 30)
      const material = new THREE.MeshNormalMaterial()
      const mesh = new THREE.Mesh(geometry, material)

      const radian = i / length * Math.PI * 2
      mesh.position.set(
        200 * Math.cos(radian),
        30,
        200 * Math.sin(radian)
      )
      this.add(mesh)
    }
  }
}

const width = window.innerWidth
const height = window.innerHeight
const aspect = width / height
const canvas = document.getElementById('canvas')

const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setPixelRatio = window.devicePixelRatio
renderer.setSize(width, height)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, aspect)
camera.position.set(-100, 150, 500)
camera.lookAt(new THREE.Vector3(0,0,0))

scene.add(new THREE.GridHelper(600))
scene.add(new THREE.AxisHelper(300))

const group = new MyGroup()
scene.add(group)

const render = () => {
  group.rotation.x += 0.02
  group.rotation.y += 0.01
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()