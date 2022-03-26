const canvas = document.getElementById('canvas');
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ canvas });

const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);
camera.position.z = 2;
const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x4304 });
// const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 })

// const cube = new THREE.Mesh(geometry, material);

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);

const makesIntances = (geometry, color, x) => {
    const material = new THREE.MeshPhongMaterial({ color });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    cube.position.x = x

    return cube
}

const cubes = [makesIntances(geometry, 0x3424, 0), makesIntances(geometry, 0x5252, 2), makesIntances(geometry, 0x85252, -2)]
const render = (time) => {
    time *= 0.001;

    // cube.rotation.x = time;
    // cube.rotation.y = time;

    cubes.forEach((cube, index) => {
        const speed = 1 + index * .1;
        const rot = time * speed;

        cube.rotation.x = rot;
        cube.rotation.y = rot;
    })
    renderer.render(scene, camera);
    requestAnimationFrame(render);

}
requestAnimationFrame(render);
renderer.render(scene, camera);

