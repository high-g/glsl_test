import * as THREE from 'three'

export default class Earth extends THREE.Group {
  public ground: THREE.Mesh;
  public cloud: THREE.Mesh;

  constructor() {
    super();

    {
      const geometry = new THREE.SphereGeometry(100, 60, 60)
      const material = new THREE.MeshPhongMaterial({
        map        : new THREE.TextureLoader().load('images/ground.jpg'),
        bumpMap    : new THREE.TextureLoader().load('images/ground.jpg'),
        bumpScale  : 1.0,
        specularMap: new THREE.TextureLoader().load('images/specular.jpg')
      })

      this.ground = new THREE.Mesh(geometry, material)
      this.ground.receiveShadow = true
      this.add(this.ground)
    }

    {
      const geometry = new THREE.SphereGeometry(102, 60, 60);
      const material = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('images/cloud'),
        transparent : true,
        blending: THREE.AdditiveBlending
      })

      this.cloud = new THREE.Mesh(geometry, material)
      this.cloud.castShadow = true
      this.add(this.cloud)
    }
  }

  public update() {
    this.cloud.rotation.y += 0.0005
  }
}