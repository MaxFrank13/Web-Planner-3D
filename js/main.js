import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(100);
document.body.appendChild( renderer.domElement );

// Tools

const controls = new OrbitControls( camera, renderer.domElement );
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

window.addEventListener("keydown", (e) => {
})

renderer.setAnimationLoop(animate);
window.addEventListener("pointermove", onPointerMove);

// Add button

document.querySelector('.add').addEventListener("click", createBox)

// Lighting

const lightAmb = new THREE.AmbientLight( 0x0f0f0f ); 
const lightDir1 = new THREE.DirectionalLight( 0xf6f6f6 ); 
const lightDir2 = new THREE.DirectionalLight( 0xf6f6f6 ); 
lightDir1.position.set(0.91, 0.33, 0.74);
lightDir2.position.set(0, 0, 1);

scene.add(lightDir1);
// scene.add(lightDir2);
scene.add(lightAmb);

// Shapes

const geometrySphere = new THREE.SphereGeometry( 15, 64, 32 );
const materialSphere = new THREE.MeshPhongMaterial( { color: 0xffff00 });
const sphere = new THREE.Mesh( geometrySphere, materialSphere );

scene.add(sphere);

const geometryBox = new THREE.BoxGeometry( 15, 15, 15 );
const materialBox = new THREE.MeshPhongMaterial( { color: 0x00ffff });
const box = new THREE.Mesh( geometryBox, materialBox );
box.position.set(20, 20, 20)

function animate() {
  // sphere.rotation.x += .01;

  raycaster.setFromCamera( pointer, camera );

  const intersects = raycaster.intersectObject(sphere);

  if (intersects.length > 0) {
    console.log("you are hovering");
  }
  renderer.render( scene, camera );
}


function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function createBox() {
  scene.add(box);
}
