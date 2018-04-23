import * as THREE from 'three'

export default class GeoUtil {

  constructor() {
    throw new Error()
  }

  static translateGeoCoords(latitude: number,
                            longitude: number,
                            radius: number): THREE.Vector3 {
    const phi = (latitude) * Math.PI / 180
    const theta = (longitude - 180) * Math.PI / 180

    const x = -(radius) * Math.cos(phi) * Math.cos(theta)
    const y = (radius) * Math.sin(phi)
    const z = (radius) * Math.cos(phi) * Math.sin(phi)

    return new THREE.Vector3(x, y, z)
  }

  static getOrbitPoints(startPos: THREE.Vector3,
                         endPos: THREE.Vector3,
                         segmentNum: number = 100): THREE.Vector3[] {
    const verticeis: THREE.Vector3[] = []

    const startVec = startPos.clone()
    const endVec = endPos.clone()

    const axis = startVec.clone().cross(endVec)
    axis.normalize()

    const angle = startVec.angleTo(endVec)

    for(let i=0; i<segmentNum; i++) {
      const q = new THREE.Quaternion()
      q.setFromAxisAngle(axis, angle / segmentNum * i)
      verticeis.push(startVec.clone().applyQuaternion(q))
    }

    verticeis.push(endVec)

    return verticeis
  }
 
}