import * as THREE from 'three'

const width = 960
const height = 540

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(width, height)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, width/height)
camera.position.set(0,0,1000)

//const geometry = new THREE.BoxGeometry(400,400,400)
//const material = new THREE.MeshNormalMaterial()
const geometry = new THREE.SphereGeometry(300,30,30)
const loader = new THREE.TextureLoader()
const texture = loader.load('img/plutomap1k.jpg')

//const material = new THREE.MeshStandardMaterial({color: 0xff0000})
const material = new THREE.MeshStandardMaterial({
  map: texture
})

const box = new THREE.Mesh(geometry, material)
scene.add(box)

const directionalLight = new THREE.DirectionalLight(0xffffff)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)

const tick = () => {
  box.rotation.y += 0.01
  renderer.render(scene, camera)
  requestAnimationFrame(tick)
}

tick()
