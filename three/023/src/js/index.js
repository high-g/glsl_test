const width = window.innerWidth
const height = window.innerHeight
const aspect = width / height
const canvas = document.getElementById('canvas')

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({canvas: canvas})
const spotLight = new THREE.SpotLight(0xffffff)
const loader = new THREE.JSONLoader()
const clock = new THREE.Clock()
let mesh

renderer.setClearColor(new THREE.Color(0xeeeeee))
renderer.setSize(width, height)
renderer.shadowMap.enabled = true

camera.position.set(0, 0, 4)
camera.lookAt(scene.position)

spotLight.position.set(0, 50, 30)
spotLight.intensity = 2
scene.add(spotLight)

loader.load('assets/models/hand-1.js', (geo) => {
  const mat = new THREE.MeshLambertMaterial({
    color: 0xf0c8c9,
    skinning: true
  })

  // SkinnedMesh ボーンを扱う際のメッシュ
  mesh = new THREE.SkinnedMesh(geo, mat)
  mesh.rotation.x = 0.5 * Math.PI;
  mesh.rotation.z = 0.7 * Math.PI;
  scene.add(mesh)
  tween.start()
  render()
})

var onUpdate = (e) => {
  const pos = -e
  console.log(mesh.skeleton)
  console.log('pos',pos)

  mesh.skeleton.bones[5].rotation.set(0, 0, pos)
  mesh.skeleton.bones[6].rotation.set(0, 0, pos)
  mesh.skeleton.bones[10].rotation.set(0, 0, pos)
  mesh.skeleton.bones[11].rotation.set(0, 0, pos)
  mesh.skeleton.bones[15].rotation.set(0, 0, pos)
  mesh.skeleton.bones[16].rotation.set(0, 0, pos)
  mesh.skeleton.bones[20].rotation.set(0, 0, pos)
  mesh.skeleton.bones[21].rotation.set(0, 0, pos)

  mesh.skeleton.bones[1].rotation.set(pos, 0, 0)
}

var tween = new TWEEN.Tween({pos: -1})
  .to({pos: 0}, 3000)
  .easing(TWEEN.Easing.Cubic.InOut)
  .yoyo(true)
  .repeat(Infinity)
  .onUpdate(onUpdate);

const render = () => {
  TWEEN.update();
  renderer.render(scene, camera)
  requestAnimationFrame(render) 
}
