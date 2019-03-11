const width = window.innerWidth
const height = window.innerHeight
const aspect = width / height
const canvas = document.getElementById('canvas')
let mixer

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})
renderer.setClearColor(0xeeeeee)
renderer.setSize(width, height)
renderer.shadowMap.enabled = true

const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 2000)
camera.position.set(250, 250, 350)
camera.lookAt(scene.position)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(300, 200, 300)
spotLight.intensity = 1
scene.add(spotLight)

const step = 0

const controls = new function() {
  this.keyframe = 0
}

const gui = new dat.GUI()
gui.add(controls, 'keyframe', 0, 15).step(1).onChange((e) => {
  showFrame(e)
})

let mesh,
    meshAnim,
    currentMesh,
    frames = []

const clock = new THREE.Clock()
const loader = new THREE.JSONLoader()
loader.load('assets/models/horse.js', (geo) => {
  geo.computeVertexNormals()

  const mat = new THREE.MeshLambertMaterial({
    morphTargets: true,
    vertexColors: THREE.FaceColors
  })
  const mat2 = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    vertexColors: THREE.FaceColors
  })

  mesh = new THREE.Mesh(geo, mat)
  mesh.position.x = 200
  scene.add(mesh)

  currentMesh = mesh.clone()
  currentMesh.position.x = -100
  frames.push(currentMesh)

  mesh.geometry.morphTargets.forEach((e) => {
    const geom = new THREE.Geometry()
    geom.vertices = e.vertices
    geom.faces = geo.faces

    const morpMesh = new THREE.Mesh(geom, mat2)
    frames.push(morpMesh)
    morpMesh.position.x = -100
  })

  mixer = new THREE.AnimationMixer(mesh)

  const clip = new THREE.AnimationClip.CreateFromMorphTargetSequence('gallop', geo.morphTargets, 30)
  const action = mixer.clipAction(clip)
  action.setDuration(1).play()

  showFrame(0)

  render()
}, 'assets/models')

const prevTime = Date.now()


const render = () => {

  const delta = clock.getDelta()
  renderer.clear()

  if(mixer) {
    mixer.update(delta)
    mesh.rotation.y -= 0.005
  }

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

const showFrame = (e) => {
  scene.remove(currentMesh)
  scene.add(frames[e])
  currentMesh = frames[e]
  console.log(currentMesh)
}