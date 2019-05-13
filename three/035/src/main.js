import * as THREE from 'three'

const width = 960
const height = 540

let renderer
let scene
let camera
let arrMesh = []

const init = () => {
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas')
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(45, width/height)
  camera.position.set(0,0,2200)

  arrMesh.push( createSphereMesh(200, 30, 30, 'img/plutomap1k.jpg', [100,100,0]) )
  arrMesh.push( createSphereMesh(300, 30, 30, 'img/earthcloudmap.jpg', [0,0,0]) )
  arrMesh.push( createSphereMesh(300, 30, 30, 'img/sunmap.jpg', [650, 0, 0]) )

  setSceneMesh()

  const directionalLight = new THREE.DirectionalLight(0xffffff)
  directionalLight.position.set(1, 1, 1)
  scene.add(directionalLight)

  tick()
}

const createSphereMesh = (r, ws, hs, path, position) => {
  const box = new THREE.Mesh(
    new THREE.SphereGeometry(r,ws,hs),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(path)
    })
  )

  if(position) {
    box.position.set(position[0], position[1], position[2])
  }

  return box
}

const setSceneMesh = () => {
  arrMesh.map((mesh) => {
    console.log(mesh)
    scene.add(mesh)
  })
}

const meshRandomRotation = () => {
  arrMesh.map((mesh) => {
    mesh.rotation.y += 0.01
  })
}

const tick = () => {
  meshRandomRotation()
  renderer.render(scene, camera)
  requestAnimationFrame(tick)
}

init()
