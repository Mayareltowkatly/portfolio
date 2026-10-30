gsap.registerPlugin(ScrollTrigger);

const SIZE = 72;
const GAP = 4;
const STEP = SIZE + GAP;

const order = [
//  row  col
    [0, 0], //1
    [0, 1], //2
    [1, 0], //3
    [0, 2], //4
    [1, 1], //5
    [2, 0], //6
    [0, 3], //7
    [1, 2], //8
    [0, 4], //9
    [2, 1], //10
    [3, 0]  //11
]
const sec = document.querySelector(".cube-sec");
const cubes = gsap.utils.toArray(".skill-cube");
const cubes3d = document.querySelectorAll(".cube-3d");

const startX = (sec.clientWidth - (4 * STEP - GAP)) / 2;

cubes.forEach((cube , i) => {
    const [row, col] = order[i];

    const x = startX + (col + row * 0.5) * STEP;
    cube.style.left = x + "px";
    cube.style.bottom = row * STEP + "px";

    const fromX = i % 2 === 0 ? -80 : 80 ;
    gsap.set(cube,{
        x: fromX,
        y: -500
    });
    gsap.set(cubes3d[i],{
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0

    });

});

const tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".cube-sec",
        start: "top 80%",
        toggleActions: "play none none reset"
    }
});

cubes.forEach((cube, i ) =>{
    const t = i * 0.5;
    tl.to(cube,{
    x:0,
    y:0,
    duration:2,
    ease:"bounce.out"
},t);

    tl.to(cubes3d[i], {
    rotationX: 360 * (i % 2 ? 1 : 2),
    rotationY: 360,
    rotationZ: 360,
    duration: 2,
    ease: "power2.out"
}, t);
})

window.addEventListener("load", () => ScrollTrigger.refresh());
    







