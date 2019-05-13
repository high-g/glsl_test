import * as THREE from 'three'

const canvas = document.getElementById('canvas')
const mouse = new THREE.Vector2()


const init = () => {
  canvas.addEventListener('mousemove', handleMouseMove)
}

const handleMouseMove = (event) => {
  const element = event.currentTarget;

  const x = event.clientX - element.offsetLeft;
  const y = event.clientY - element.offsetTop;

  const w = element.offsetWidth
  const h = element.offsetHeight

  mouse.x = (x/w)
}

init()