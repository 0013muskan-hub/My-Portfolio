gsap.from("#front-left h3,h2,h1,p,#edu1,#edu2,#edu3",{
    x: -550,
    stagger:0.25,
    opacity:0,
    delay:0.2,
    duration:0.9
})
gsap.from("#right li, #left h1",{
    y:-200,
    stagger:0.15,
    opacity:0,
    duration: 0.5
})
gsap.from("#btn1,#btn2",{
    y:-200,
    stagger:0.25,
    opacity:0,
    duration: 0.5,
    delay:1,
    ease:"power3.out"
})
gsap.from("#img",{
    scale:0,
    opacity:0,
    duration:1.2,
    delay:0.2,
    ease:"power3.out"
})
gsap.from("#tech-skill,#skill h3",{
    y:-200,
    stagger:0.15,
    opacity:0,
    duration: 0.5,
    delay:0.3,
    ease:"power3.out"
})
gsap.from("#skill",{
    scale:0,
    opacity:0,
    duration:1.2,
    delay:0.2,
    ease:"power3.out"
})
gsap.from("#project h3,.project-skill",{
    scale:0,
    opacity:0,
    duration:1.2,
    delay:0.7,
    ease:"power3.out"
})
