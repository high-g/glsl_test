(function(){

var width = 1200,
    height = 900,
    renderer,
    scene,
    camera,
    mesh;

init();

function init() {
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas')
  });
  renderer.setSize(width, height);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(0, 0, 1000);

  var geometry = new THREE.BoxGeometry(100, 100, 100);
  var material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  var directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1);

  scene.add(directionalLight);

  tick();
}

function tick() {
  mesh.rotation.y += 0.01;
  mesh.rotation.x -= 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

})();