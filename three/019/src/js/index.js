import * as THREE from 'three'

const width = window.innerWidth
const height = window.innerHeight
const aspect = width / height
const canvas = document.getElementById('canvas')
const modelPath = 'models/misc_chair01.js'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})
renderer.setSize(width, height)
renderer.setClearColor(0xeeeeee)

const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
camera.position.set(-10, 20, 60)
camera.lookAt(scene.position)

const init = () => {
  const directionlLight = new THREE.DirectionalLight(0xffffcd, 0.8)
  directionlLight.position.set(0, 60, 2000)

  const ambientLight = new THREE.AmbientLight(0xffffcd)
  scene.add(directionlLight, ambientLight)

  const axes = new THREE.AxesHelper(1000)
  scene.add(axes)

  const loader = new THREE.JSONLoader()
  loader.load(modelPath, (geo, mat) => {
    const mesh = new THREE.Mesh(geo, mat[0])
    mesh.scale.set(10, 10, 10)
    scene.add(mesh)
    render()
  })
}

const render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

init()