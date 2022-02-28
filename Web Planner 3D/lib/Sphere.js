import * as THREE from "three";

class Sphere {
  constructor(geometry, material) {
    this.geometry = geometry;
    this.material = material;
  }
  getMesh(){
    return new THREE.Mesh( this.geometry, this.material );
  }
}

module.exports = Sphere;