<template>
  <div id="webgl"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  data() {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    const material = new THREE.SpriteMaterial()

    return {
      scene,
      camera,
      renderer,
      material,
    }
  },
  mounted() {
    this.settingCanvas()
    this.settingCamera()
    this.createSprites()
    this.render()
  },
  methods: {
    settingCanvas() {
      this.renderer.setClearColor(new THREE.Color(0x000000))
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$el.appendChild(this.renderer.domElement)
    },
    settingCamera() {
      this.camera.position.set(0, 0, 150)
    },
    createSprites() {
      for(let x = -5; x < 5; x++) {
        for(let y = -5; y< 5; y++) {
          const sprite = new THREE.Sprite(this.material)
          sprite.position.set(x * 10, y * 10, 0)
          this.scene.add(sprite)
        }
      }
    },
    render() {
      requestAnimationFrame(this.render)
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
</style>
