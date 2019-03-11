window.THREE = require('three/build/three.min.js')
require('three/examples/js/QuickHull.js')
require('three/examples/js/utils/SceneUtils.js')
require('three/examples/js/geometries/ConvexGeometry.js')
require('three/examples/js/ParametricGeometries.js')

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH/HEIGHT, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas")
})

init = () => {
  settingRenderer()
  settingCamera()
  settingAmbientLight()
  settingSpotLight()
  settingGeoMetries()
  render()
}

settingRenderer = () => {
  renderer.setClearColor(new THREE.Color(0xeeeeee))
  renderer.setSize(WIDTH, HEIGHT)
  renderer.shadowMap.enabled = true
}

settingCamera = () => {
  camera.position.set(-50, 30, 20);
  camera.lookAt(new THREE.Vector3(-10, 0, 0));
}

settingAmbientLight = () => {
  const ambientLight = new THREE.AmbientLight(0x090909)
  scene.add(ambientLight)
}

settingSpotLight = () => {
  const spotLight = new THREE.SpotLight(0xffffff)
  spotLight.position.set(-25, 25, 32)
  spotLight.castShadow = true
  scene.add(spotLight)
}

settingGeoMetries = () => {
  const planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
  const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);

  plane.receiveShadow = true;
  plane.rotation.x = -0.5 * Math.PI
  plane.position.set(0,0,0)
  scene.add(plane);

  const geoms = [];

  geoms.push(new THREE.CylinderGeometry(1, 4, 4));
  geoms.push(new THREE.CylinderGeometry(4, 1, 4));

  geoms.push(new THREE.BoxGeometry(2, 2, 2));
  geoms.push(new THREE.BoxGeometry(3, 3, 3));

  geoms.push(new THREE.SphereGeometry(5));

  geoms.push(new THREE.IcosahedronGeometry(4));

  const points = [
      new THREE.Vector3(10, 2, 2),
      new THREE.Vector3(2, 2, -2),
      new THREE.Vector3(-2, 2, -2),
      new THREE.Vector3(-2, 2, 2),
      new THREE.Vector3(2, -2, 2),
      new THREE.Vector3(2, -2, -2),
      new THREE.Vector3(-2, -2, -2),
      new THREE.Vector3(-2, -2, 2)
  ];
  geoms.push(new THREE.ConvexGeometry(points));

  const pts = []; // points array - the path profile points will be stored here
  const detail = .1; // half-circle detail - how many angle increments will be used to generate points
  const radius = 3; // radius for half_sphere

  for (let angle = 0.0; angle < Math.PI; angle += detail) { 
    pts.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0)); // angle/radius to x,y
  }
  geoms.push(new THREE.LatheGeometry(pts, 12));

  geoms.push(new THREE.OctahedronGeometry(3));

  geoms.push(new THREE.ParametricGeometry(THREE.ParametricGeometries.mobius3d, 30, 10));

  geoms.push(new THREE.TetrahedronGeometry(2));

  geoms.push(new THREE.TorusGeometry(4, 2, 100, 100));

  geoms.push(new THREE.TorusKnotGeometry(3, .5, 50, 20));

  let j = 0;
  for (let i = 0; i < geoms.length; i++) {
      const cubeMaterial = new THREE.MeshLambertMaterial({wireframe: true, color: Math.random() * 0xffffff});

      const materials = [
          new THREE.MeshPhongMaterial({color: Math.random() * 0xffffff, shading: THREE.FlatShading}),
          new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true})
      ];

      const mesh = THREE.SceneUtils.createMultiMaterialObject(geoms[i], materials);
      mesh.traverse(function (e) {
        e.castShadow = true
      });

      // var mesh = new THREE.Mesh(geoms[i],materials[i]);
      // mesh.castShadow=true;
      mesh.position.x = -24 + ((i % 4) * 12);
      mesh.position.y = 4;
      mesh.position.z = -15 + (j * 12);

      if ((i + 1) % 4 == 0) j++;
      scene.add(mesh);
  }
}

render = () => {
  requestAnimationFrame(render)
  renderer.render(scene, camera);
}

init()