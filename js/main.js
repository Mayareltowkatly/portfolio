const layers = [...document.querySelectorAll('.layer')];

let tx= 0, ty = 0;
let cx= 0, cy = 0;

addEventListener('mousemove', (e) => {
    tx = e.clientX / innerWidth - 0.5;
    ty = e.clientY / innerHeight - 0.5;

})

function tick(){
    cx += (tx - cx) * 0.5;
    cy += (ty - cy) * 0.5;

    layers.forEach((layer) =>{
        const depth = parseFloat(layer.dataset.depth);
        layer.style.transform = ` translate3d(${-cx * depth * innerWidth}px, ${-cy * depth * innerHeight}px, 0)`;
    });
    requestAnimationFrame(tick);
}
tick()

