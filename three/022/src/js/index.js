const width = window.innerWidth
const height = window.innerHeight
const aspect = width / height
const canvas = document.getElementById('canvas')

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
scene.add(spotLight)

const clock = new THREE.Clock()

let mesh,
    mixer,
    frames = []

const loader = new THREE.JSONLoader()

const geo_test = new THREE.SphereGeometry(10, 10, 10)
console.log('sphere ジオメトリ', geo_test)

loader.load('assets/models/horse.js', (geo) => {
  console.log('3Dモデル ジオメトリ', geo)

  // 滑らかにする
  geo.computeVertexNormals()

  // マテリアルの設定
  const mat = new THREE.MeshLambertMaterial({
    morphTargets: true,
    vertexColors: THREE.FaceColors
  })

  // メッシュの作成
  mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(60, -20, 100)
  scene.add(mesh)

  // 複数のアニメーションの管理
  mixer = new THREE.AnimationMixer(mesh)

  // アニメーションのタイムライン情報
  // ジオメトリのモーフ情報からCreateFromMorphTargetSequenceを用いてタイムシーケンスを作る
  // arg: clip_name, morphTarget, keyframe
  const clip = new THREE.AnimationClip.CreateFromMorphTargetSequence('gallop', geo.morphTargets, 30)
  const action = mixer.clipAction(clip)
  action.play() // .setDuration(1) をつなげることでで再生間隔を設定

  render()
})


const render = () => {
  if(mixer) {
    mixer.update(clock.getDelta())
    mesh.rotation.y -= 0.005
  }

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
