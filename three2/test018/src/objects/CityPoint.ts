import * as THREE from 'three'
import GeoUtil from '../utils/GeoUtil'

export default class CityPoint extends THREE.Group {
  public sphere: THREE.Mesh
  public pointLight: THREE.PointLight

  private _radius: number = 110;
  public getRadius(): number {
    return this._radius
  }


  private _latitude: number = 0

  public getLatitude(): number {
    return this._latitude
  }

  public setLatitude(latitude: number) {
    this._latitude = latitude
  }


  private _longitude: number = 0;

  public getLongitude(): number {
    return this._longitude
  }

  public setLongitude(longitude: number) {
    this._longitude = longitude
  }


  constructor (color: number) {
    super();

    const geometry2 = new THREE.SphereGeometry(2, 35, 35)
    const material2 = new THREE.MeshLambertMaterial({color: color})

    this.sphere = new THREE.Mesh(geometry2, material2)
    this.sphere.receiveShadow = true
    this.add(this.sphere)
  }

  public update() {
    const position: THREE.Vector3 = GeoUtil.translateGeoCoords(this._latitude, this._longitude, this._radius)
    this.position.copy(position)
  }
}