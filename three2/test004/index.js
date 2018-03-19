const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const aspect_ratio = WIDTH / HEIGHT
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, aspect_ratio, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})
let plane, cube, sphere, sphereLight,
    amibentLight, spotLight, pointLight,
    phase = 0, invert = 1

init = () => {
  setRenderer()
  setCamera()
  setMesh()
  setLight()
  render()
}

setRenderer = () => {
  renderer.setClearColor(new THREE.Color(0xEEEEEE))
  renderer.setSize(WIDTH, HEIGHT)
  renderer.shadowMap.enabled = true
}

setCamera = () => {
  camera.position.set(-30, 20, 20)
  camera.lookAt(scene.position)
}

setMesh = () => {
  // plane
  const planeGeometry = new THREE.PlaneGeometry(60, 20)
  const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
  plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.rotation.x = -0.5 * Math.PI
  plane.position.set(10,0,5)
  plane.receiveShadow = true
  scene.add(plane)

  // cube
  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
  const cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000})
  cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  cube.position.set(10,5,0)
  cube.castShadow = true
  scene.add(cube)

  // sphere
  const sphereGeometry = new THREE.SphereGeometry(3, 20, 20)
  const sphereMaterial = new THREE.MeshLambertMaterial({color: 0x0000ff})
  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
  sphere.position.set(-10,2,5)
  sphere.castShadow = true
  scene.add(sphere)

  // sphereLight
  const sphereLightGeometry = new THREE.SphereGeometry(0.2)
  const sphereLightMaterial = new THREE.MeshBasicMaterial({color: 0xac6622})
  sphereLight = new THREE.Mesh(sphereLightGeometry, sphereLightMaterial)
  sphereLight.castShadow = true
  sphereLight.position = new THREE.Vector3(3, 0, 3);
  scene.add(sphereLight)
}

setLight = () => {
  amibentLight = new THREE.AmbientLight(0x0c0c0c)
  scene.add(amibentLight)

  spotLight = new THREE.SpotLight(0xffffff)
  spotLight.position.set(-40, 60, 10)
  spotLight.castShadow = true
  //scene.add(spotLight)

  pointLight = new THREE.PointLight(0xccffcc)
  pointLight.distance = 100
  pointLight.intensity = 3
  scene.add(pointLight)
}

render = () => {
  renderer.render(scene, camera)

  // move the light simulation
  if (phase > 2 * Math.PI) {
    invert = invert * -1;
    phase -= 2 * Math.PI;
  } else {
    phase += 0.05;
  }
  sphereLight.position.z = +(6 * (Math.sin(phase)));
  sphereLight.position.x = +(13 * (Math.cos(phase)));
  sphereLight.position.y = 5;
  pointLight.position.copy(sphereLight.position);

  requestAnimationFrame(render)
}

init() 