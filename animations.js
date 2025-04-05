gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    // Animation for about me text in index page
const splitTypes = document.querySelectorAll(".abt-txt");
splitTypes.forEach((words, i) => {
    const text = new SplitType(words, {types: 'words'})

    gsap.from(text.words, {
        scrollTrigger: {
            trigger: words,
            start: 'top 80%',
            end: 'top 20%',
            lazy: false,
            scrub: true,
            markers: false
        },
        opacity: 0,
        stagger: 0.1
    })
})

// Animation for left appear
gsap.from(".bnr-l" , {
    scrollTrigger: {
        trigger: ".bnr-l",
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: false,
        toggleActions: "play resume resume reset",
        markers: false
    },
    x: -200,
    opacity: 0.1
})

// Animation for right appear
gsap.from(".bnr-r" , {
    scrollTrigger: {
        trigger: ".bnr-r",
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: false,
        toggleActions: "play resume resume reset",
        markers: false
    },
    x: 200,
    opacity: 0.1
})

// Animation for WID list
const wItem = document.querySelectorAll(".wl-item");
wItem.forEach((wLi, i) => {
    gsap.from(wLi, {
        scrollTrigger: {
            trigger: wLi,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: false,
            toggleActions: "play resume resume reset",
            markers: false
        },
        x: -200,
        opacity: 0
    })
})

// Animation for each project in index page
const pro = document.querySelectorAll(".pro");
pro.forEach((hPro, i) => {
    ScrollTrigger.refresh();
    gsap.from(hPro, {
        scrollTrigger: {
            trigger: hPro,
            start: '0% 100%',
            end: '50% 50%',
            ease: "none",
            lazy: false,
            scrub: false,
            toggleActions: "play resume resume reset",
            markers: false,
        },
        scale: 0.7,
    })
})

// Animation for project title
gsap.to(".pro-hero", {
    scrollTrigger: {
        trigger: ".pro-title-img-cont",
        start: 'top %',
        end: 'bottom 5%',
        lazy: false,
        scrub: true,
        markers: false,
    },
    scale: 0.3,
    opacity: 0.5
})

// Animation for project hero photo
const pHeroImg = document.querySelector(".pro-title-img-cont");
gsap.from(pHeroImg, {
    scrollTrigger: {
        trigger: pHeroImg,
        start: 'top 80%',
        end: 'top 20%',
        lazy: false,
        scrub: true,
        markers: false,
    },
    scale: 0.7,
    opacity: 0.8
})

// Animations for left appear pictures
const lAppPics = document.querySelectorAll(".g-li");
ScrollTrigger.refresh();
console.log(lAppPics);
lAppPics.forEach((lAP, i) => {
    gsap.from(lAP , {
        scrollTrigger: {
            trigger: lAP,
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: false,
            toggleActions: "play resume resume reset",
            markers: false
        },
        x: -200,
        opacity: 0.1
    })
})

// Animations for right appear pictures
const rAppPics = document.querySelectorAll(".g-ri");
console.log(rAppPics);
rAppPics.forEach((rAP, i) => {
    gsap.from(rAP , {
        scrollTrigger: {
            trigger: rAP,
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: false,
            toggleActions: "play resume resume reset",
            markers: false
        },
        x: 200,
        opacity: 0.1
    })
})

ScrollTrigger.refresh();
})