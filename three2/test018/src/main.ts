import * as THREE from 'three'
import Earth from './objects/Earth'
import CityPoint from './objects/CityPoint'
import CityLine from './objects/CityLine'
import TrackballControls from 'three-trackballcontrols'

export class Main {
  public scene: THREE.Scene
  public camera: THREE.PerspectiveCamera
  public renderer: THREE.WebGLRenderer
  public controller: TrackballControls
  public containerElement: HTMLElement

  public earth: Earth
  public japan: CityPoint

  public cities: CityPoint[]
  public citiesLine: CityLine[]

  public citiesPoints: number[][] = [
    [51.2838, 0],
    [39, -116]
  ]

  public satellite: CityPoint;

  constructor() {
    this.setup()
  }

  private setup(): void {

  }
}

new Main()