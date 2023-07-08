var tl = gsap.timeline();

gsap.from("#navbar h2 ", {
    opacity: "0",
    delay: "0.1",
    duration: "1",
    y: "-10",
});
// tl.from("#main ", {
//     opacity: "0",
//     duration: "2",
//     scale: "1",
// });
gsap.from(".nav-prt-1 h1", {
    scale: "0",
    opacity: "0",
    delay: "0.2",
    duration: "0.10",
    stagger: "1",
});
tl.from(".box-1 ", {
    opacity: "0",
    opacity: "0",
    delay: "1",
    duration: "1",
    scale: "1",

});
gsap.from(".box-img-1", {
    y: "200",
    opacity: "0",
    duration: "1",
    delay: ".1",

});
gsap.from(".box-img-2", {
    y: "-200",
    opacity: "0",
    duration: "1",
    delay: ".1",

});
gsap.from(".box-1 button", {
    scale: "2",
    opacity: "0",
    duration: "1",
    delay: "4",

});
gsap.from(".btm-box-2 ", {
    opacity: "0",
    delay: ".1",
    duration: "1",
    scale: "1",

});
tl.from(".card-1", {
    // x: "-100",
    opacity: "0",
    delay: ".1",
    duration: "1",
    stagger: "1",
    scale: "0",
});
tl.from(".btm-box-2  h2", {
        x: "-100",
        opacity: "0",
        delay: "0.1",
        duration: ".5",
        stagger: "1",
    }),
    tl.from(".btm-box-2  h1", {
        opacity: "0",
        delay: "0.1",
        duration: ".5",
        stagger: "1",
        scale: "2",
    }),
    tl.from(".btm-box-2  p", {
        x: "100",
        opacity: "0",
        delay: "0.5",
        duration: ".1",
        stagger: "1",
    });

gsap.from(" #page2 h1", {
    duration: "2",
    opacity: "0",
    delay: "10",
    // x: "-100",
    // scale: "2",
    y: "100",
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "#main",
        start: "top 90%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".page2-img-left", {
    duration: "2",
    opacity: "0",
    delay: "10",
    scale: "2",
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "#main",
        start: "top 80%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".page2-img-right", {
    duration: "2",
    opacity: "0",
    delay: "10",
    scale: "2",
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "#main",
        start: "top 80%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".page2-img-right-2", {
    duration: "2",
    opacity: "0",
    delay: "10",
    scale: "2",
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "#main",
        start: "top 80%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from("#page2 p ", {
    duration: "2",
    opacity: "0",
    delay: "1",
    y: "-100",
    scrollTrigger: {
        trigger: "#page2 p ",
        scroller: "#main",
        start: "top 80%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".elem  h2", {
    x: "-100",
    opacity: "0",
    delay: "0.1",
    duration: "1",
    stagger: "1",
    scrollTrigger: {
        trigger: ".elem  h2 ",
        scroller: "#main",
        start: "top 120%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from("#page3  h1", {
    y: "100",
    opacity: "0",
    delay: "0.1",
    duration: "1",
    stagger: "1",
    scrollTrigger: {
        trigger: "#page3 h1 ",
        scroller: "#main",
        start: "top 90%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from("#page3  p", {
    x: "100",
    opacity: "0",
    delay: "0.1",
    duration: "1",
    stagger: "1",
    scrollTrigger: {
        trigger: "#page3 p ",
        scroller: "#main",
        start: "top 90%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".page3-btn", {
    y: "-200",
    opacity: "0",
    delay: "0.1",
    duration: "1",
    stagger: "1",
    scrollTrigger: {
        trigger: ".page3-btn",
        scroller: "#main",
        start: "top 90%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".page4-img-2", {
    y: "200",
    opacity: "0",
    delay: "0.1",
    duration: "1",
    stagger: "1",
    scrollTrigger: {
        trigger: ".page4-img-2",
        scroller: "#main",
        start: "top 80%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".page4-img-1", {
    opacity: "0",
    delay: "0.1",
    duration: "1",
    scale: "2",
    scrollTrigger: {
        trigger: ".page4-img-1",
        scroller: "#main",
        start: "top 70%",
        // markers: "true",
        scrub: "true",
    },
});

gsap.from(" #page5 h1 ", {
    duration: "2",
    opacity: "0",
    delay: "10",
    y: "-200",
    scrollTrigger: {
        trigger: " #page5 h1 ",
        scroller: "#main",
        start: "top 80%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from("#page5 p", {
    duration: "2",
    opacity: "0",
    delay: "10",
    x: "-100",
    scrollTrigger: {
        trigger: "#page5 p",
        scroller: "#main",
        start: "top 80%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".page5-img-1", {
    duration: "2",
    opacity: "0",
    delay: "10",
    scale: "1",
    scrollTrigger: {
        trigger: ".page5-img-1",
        scroller: "#main",
        start: "top 90%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".page5-img-2", {
    duration: "2",
    opacity: "0",
    delay: "10",
    scale: "1",
    scrollTrigger: {
        trigger: ".page5-img-1",
        scroller: "#main",
        start: "top 90%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".page5-img-3", {
    duration: "2",
    opacity: "0",
    delay: "10",
    scale: "0",
    scrollTrigger: {
        trigger: ".page5-img-1",
        scroller: "#main",
        start: "top 100%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".scroll-anim h4", {
    duration: "10",
    opacity: "0",
    delay: "10",
    scale: "0",
    stagger: "1",
    scrollTrigger: {
        trigger: ".scroll-anim h4",
        scroller: "#main",
        start: "top 60%",
        end: "top 5%",
        // markers: "true",
        scrub: "true",
    },
});
document.addEventListener("mousemove", function(dets) {
    document.querySelector("#circle").style.left = `${dets.x - 15}px`
    document.querySelector("#circle").style.top = `${dets.y - 15}px`
})