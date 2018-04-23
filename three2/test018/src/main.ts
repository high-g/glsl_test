import * as THREE from 'three'
import Earth from './objects/Earth'

export class Main {
  public scene: THREE.Scene
  public renderer: THREE.WebGLRenderer
  public camera: THREE.PerspectiveCamera
  public containerElement: HTMLElement
  
  constructor() {
    this.setup()
  }

  private setup(): void {

  }
}