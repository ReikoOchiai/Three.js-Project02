import "./style.css";
import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Object

const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;

scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -3;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 3;
group.add(cube3);

//Axes Helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scale = making the object's size change

// mesh.scale.x = 2;
// mesh.scale.y = 2;
// mesh.scale.z = 2;
// mesh.scale.set(2, 2, 2);

//Rotation
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(-0.5, -0.5, 5);
scene.add(camera);

camera.lookAt;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
