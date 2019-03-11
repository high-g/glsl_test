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

  public cities: CityPoint[]    = [];
  public citiesLine: CityLine[] = [];

  public citiesPoints: number[][] = [
    [51.2838, 0], // イギリス
    [39, -116], // 北京
    [34, 118], // ロサンゼルス
    [-33, 151], // シドニー
    [-23, -46], // サンパウロ
    [1, 103], // シンガポール
    [90, 0], // 北極
    [-90, 0] // 南極
  ]

  public satellite: CityPoint;

  constructor() {
    this.setup()
  }

  private setup(): void {
    this.containerElement = document.createElement('div')
  }
}

new Main()