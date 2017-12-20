(function(){

init();

function init() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    45, window.innerHeight / window.innerWidth, 0.1, 1000
  );
  
  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  var axes = new THREE.AxesHelper(20);
  scene.add(axes);
  
  var planeGeometry = new THREE.PlaneGeometry(60, 20);
  var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  
  scene.add(plane);
  
  renderer.render(scene, camera);
}

})();