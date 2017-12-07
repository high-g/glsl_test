(function(){

var width = 1200,
    height = 900,
    arr_val = [50, 50, 50, 50, 50, 50],
    arr_touch_flg = [false, false, false, false, false, false],
    arr_dom = [];

// -------------------- webgl --------------------
for(var i=1; i<=6; i++) {
  arr_dom[i-1] = document.getElementById('range'+i);
  arr_dom[i-1].addEventListener('mousedown', downFunc);
  arr_dom[i-1].addEventListener('mousemove', moveFunc);
  arr_dom[i-1].addEventListener('mouseup', upFunc);
}

function downFunc() {
  var id = getId(this.id);
  arr_val[id] = +this.value;
  arr_touch_flg[id] = true;
}

function moveFunc() {
  var id = getId(this.id);
  if(arr_touch_flg[id]) {
    arr_val[id] = +this.value;
  }
}

function upFunc() {
  var id = getId(this.id);
  arr_val[id] = +this.value;
  arr_touch_flg[id] = false;
}

function getId(domId) {
  var id = +domId.slice(-1) - 1;
  return id;
}


// -------------------- webgl --------------------
var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
});
renderer.setSize(width, height);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, width / height);
camera.position.set(0, 0, 100);

var geometry = new THREE.SphereGeometry(5, 32, 32);
var material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

var geometry2 = new THREE.BoxGeometry(10, 10, 10);
var material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry2, material2);
scene.add(cube);
cube.position.y = 16;

var geometry3 = new THREE.PlaneGeometry(10, 10, 10);
var material3 = new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide });
var plane = new THREE.Mesh(geometry3, material3);
scene.add(plane);
plane.position.y = -16;

var geometry4 = new THREE.ConeGeometry(5, 20, 30);
var material4 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
var cone = new THREE.Mesh(geometry4, material4);
scene.add(cone);
cone.position.x = 16;

var geometry5 = new THREE.CylinderGeometry(5, 5, 20, 32);
var material5 = new THREE.MeshBasicMaterial({ color: 0x00ffff });
var cylinder = new THREE.Mesh(geometry5, material5);
scene.add(cylinder);
cylinder.position.x = -16;

var geometry6 = new THREE.TorusGeometry(10, 3, 16, 100);
var material6 = new THREE.MeshBasicMaterial({ color: 0xff00ff });
var torus = new THREE.Mesh(geometry6, material6);
scene.add(torus);
torus.position.x = 25;
torus.position.y = 25;

var directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);

scene.add(directionalLight);

tick();

function tick() {
  cube.rotation.y += 0.01;
  plane.rotation.y -= 0.01;
  cone.rotation.x -= 0.01;
  cylinder.rotation.x -= 0.01;
  torus.rotation.x += 0.01;
  torus.rotation.z -= 0.01;

  camera.position.set(arr_val[0] - 50, arr_val[1] - 50, arr_val[2] + 50);
  camera.rotation.set((arr_val[3]-50) * 0.01, (arr_val[4]-50) * 0.01, (arr_val[5]-50)* 0.01);
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

})();