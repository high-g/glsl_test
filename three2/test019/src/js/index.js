import * as THREE from 'three'

const width = window.innerWidth
const height = window.innerHeight
const aspect = width / height
const canvas = document.getElementById('canvas')

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(width, height)

const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
camera.position.set(0, 20, -60)
camera.lookAt(scene.position)

// arm作成
const armGeometry = new THREE.CylinderGeometry(5, 5, 40, 3, 4, true)

// ボーンの作成
armGeometry.bones = [
  {
    name: "bone0",
    parent: -1,
    pos: [0, -20, 0],
    rotq: [0, 0, 0, 1],
    scl: [1, 1, 1]
  },
  {
    name: "bone1",
    parent: 0,
    pos: [0, 10, 0],
    rotq: [0, 0, 0, 1],
    scl: [1, 1, 1]
  },
  {
    name: "bone2",
    parent: 1,
    pos: [0, 10, 0],
    rotq: [0, 0, 0, 1],
    scl: [1, 1, 1]
  },
  {
    name: "bone3",
    parent: 2,
    pos: [0, 10, 0],
    rotq: [0, 0, 0, 1],
    scl: [1, 1, 1]
  },
  {
    name: "bone4",
    parent: 3,
    pos: [0, 10, 0],
    rotq: [0, 0, 0, 1],
    scl: [1, 1, 1]
  }
]

armGeometry.skinIndices = [
  new THREE.Vector4(4, 3, -1, -1), new THREE.Vector4(4, 3, -1, -1), new THREE.Vector4(4, 3, -1, -1),
  new THREE.Vector4(3, 4,  2, -1), new THREE.Vector4(3, 4,  2, -1), new THREE.Vector4(3, 4,  2, -1),
  new THREE.Vector4(2, 3,  1, -1), new THREE.Vector4(2, 3,  1, -1), new THREE.Vector4(2, 3,  1, -1),
  new THREE.Vector4(1, 2,  0, -1), new THREE.Vector4(1, 2,  0, -1), new THREE.Vector4(1, 2,  0, -1),
  new THREE.Vector4(0, 1, -1, -1), new THREE.Vector4(0, 1, -1, -1), new THREE.Vector4(0, 1, -1, -1)
]

armGeometry.skinWeights = [
  new THREE.Vector4(.8, .2,  0, 0), new THREE.Vector4(.8, .2,  0, 0), new THREE.Vector4(.8, .2,  0, 0),
  new THREE.Vector4(.6, .2, .2, 0), new THREE.Vector4(.6, .2, .2, 0), new THREE.Vector4(.6, .2, .2, 0),
  new THREE.Vector4(.6, .2, .2, 0), new THREE.Vector4(.6, .2, .2, 0), new THREE.Vector4(.6, .2, .2, 0),
  new THREE.Vector4(.6, .2, .2, 0), new THREE.Vector4(.6, .2, .2, 0), new THREE.Vector4(.6, .2, .2, 0),
  new THREE.Vector4(.8, .2,  0, 0), new THREE.Vector4(.8, .2,  0, 0), new THREE.Vector4(.8, .2,  0, 0),
]

const armMaterial = new THREE.MeshNormalMaterial({
  skinning: true,
  side: THREE.DoubleSide,
  shading: THREE.FlatShading
})

const arm = new THREE.Mesh(armGeometry, armMaterial)
scene.add(arm)

const skeletonHelper = new THREE.SkeletonHelper(arm)

const render = () => {
  arm.rotation.y += 0.01

  arm.skeleton.bones[1].rotation.z = Math.sin(arm.rotation.y * 0.001) * .5;
  arm.skeleton.bones[2].rotation.y = Math.sin(arm.rotation.y * 0.002) * 1;
  arm.skeleton.bones[3].rotation.x = Math.sin(arm.rotation.y * 0.003) * .5;

  renderer.render(scene, camera)
  window.requestAnimationFrame(render)
}

render()