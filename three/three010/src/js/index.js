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
  var planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
  var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI
  plane.position.set(0,0,0)

  // add the plane to the scene
  scene.add(plane);


  var geoms = [];

  geoms.push(new THREE.CylinderGeometry(1, 4, 4));

  // basic cube
  geoms.push(new THREE.BoxGeometry(2, 2, 2));

  // basic spherer
  geoms.push(new THREE.SphereGeometry(2));

  geoms.push(new THREE.IcosahedronGeometry(4));

  // create a convex shape (a shape without dents)
  // using a couple of points
  // for instance a cube
  var points = [
      new THREE.Vector3(2, 2, 2),
      new THREE.Vector3(2, 2, -2),
      new THREE.Vector3(-2, 2, -2),
      new THREE.Vector3(-2, 2, 2),
      new THREE.Vector3(2, -2, 2),
      new THREE.Vector3(2, -2, -2),
      new THREE.Vector3(-2, -2, -2),
      new THREE.Vector3(-2, -2, 2)
  ];
  geoms.push(new THREE.ConvexGeometry(points));

  // create a lathgeometry
  var pts = [];//points array - the path profile points will be stored here
  var detail = .1;//half-circle detail - how many angle increments will be used to generate points
  var radius = 3;//radius for half_sphere
  for (var angle = 0.0; angle < Math.PI; angle += detail)//loop from 0.0 radians to PI (0 - 180 degrees)
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));//angle/radius to x,y
  geoms.push(new THREE.LatheGeometry(pts, 12));

  // create a OctahedronGeometry
  geoms.push(new THREE.OctahedronGeometry(3));

  // create a geometry based on a function
  geoms.push(new THREE.ParametricGeometry(THREE.ParametricGeometries.mobius3d, 20, 10));

  //
  geoms.push(new THREE.TetrahedronGeometry(3));

  geoms.push(new THREE.TorusGeometry(3, 1, 10, 10));

  geoms.push(new THREE.TorusKnotGeometry(3, 0.5, 50, 20));

  var j = 0;
  for (var i = 0; i < geoms.length; i++) {
      var cubeMaterial = new THREE.MeshLambertMaterial({wireframe: true, color: Math.random() * 0xffffff});

      var materials = [

          new THREE.MeshPhongMaterial({color: Math.random() * 0xffffff, shading: THREE.FlatShading}),
          new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true})

      ];

      var mesh = THREE.SceneUtils.createMultiMaterialObject(geoms[i], materials);
      mesh.traverse(function (e) {
          e.castShadow = true
      });

      //var mesh = new THREE.Mesh(geoms[i],materials[i]);
      //mesh.castShadow=true;
      mesh.position.x = -24 + ((i % 4) * 12);
      mesh.position.y = 4;
      mesh.position.z = -8 + (j * 12);

      if ((i + 1) % 4 == 0) j++;
      scene.add(mesh);
  }
}

render = () => {
  requestAnimationFrame(render)
  renderer.render(scene, camera);
}

init()