(function(){

var width = 1024;
var height = 680;

var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
});
renderer.setSize(width, height);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, width / height);
camera.position.set(0, 0, +1000);

var loader = new THREE.TextureLoader();
var texture = loader.load('imgs/download.jpg');

var geometry = new THREE.SphereGeometry(300, 30, 30);
var material = new THREE.MeshStandardMaterial({
  // color: 0xff0000
  map: texture
});

var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

var directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);

scene.add(directionalLight);

tick();

function tick() {
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

})();