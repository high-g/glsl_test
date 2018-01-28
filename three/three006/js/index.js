var INIT = (function(){
  var self = {},
      scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(
        45, window.innerWidth, window.innerHeight, 0.1, 1000
      ),
      renderer = new THREE.WebGLRenderer();
      axes = new THREE.AxisHelper(20),
      
  
  
  
  self.init = function() {
    
  };
  
  return self;
})();