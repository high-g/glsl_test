(function(){

var width = 960;
var height = 540;

var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, width / height);
camera.position.set(0, 0, 1000);

var geometry = new THREE.BoxGeometry(400, 400, 400);
var material = new THREE.MeshNormalMaterial();
var box = new THREE.Mesh(geometry, material);
scene.add(box);

tick();

function tick() {
  box.rotation.y += 0.01;
  renderer.render(scene, camera); // レンダリング
  requestAnimationFrame(tick);
}

})();