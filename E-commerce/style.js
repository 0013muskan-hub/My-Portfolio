gsap.from("h4,h2,h1,p",{
    X:-120,
    opacity:0,
    duration:1.8,
    ease:"expo.out",
    stagger:0.15,
    delay:0.3
})
        
gsap.from("#hero button",{
    x:-60,
    opacity:0,
    scale:0.7,
    duration:0.7,
    ease:"back.out(1.7)",
    delay:0.4
})

