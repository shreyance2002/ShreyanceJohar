gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".abt-txt");

splitTypes.forEach((words, i) => {
    const text = new SplitType(words, {types: 'words'})

    gsap.from(text.words, {
        scrollTrigger: {
            trigger: words,
            start: 'top 60%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },
        opacity: 0,
        stagger: 0.1
    })
})

gsap.from(".bnr-l" , {
    scrollTrigger: {
        trigger: ".bnr-l",
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: true,
        markers: false
    },
    x: -200,
    opacity: 0.1
})

gsap.from(".bnr-r" , {
    scrollTrigger: {
        trigger: ".bnr-r",
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: true,
        markers: false
    },
    x: 200,
    opacity: 0.1
})

const pro = document.querySelectorAll(".pro");
pro.forEach((hPro, i) => {
    gsap.from(hPro, {
        scrollTrigger: {
            trigger: hPro,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
        },
        scale: 0.5,
        opacity: 0.2
    })
})

const wItem = document.querySelectorAll(".wl-item");
console.log(wItem);
wItem.forEach((wLi, i) => {
    gsap.from(wLi, {
        scrollTrigger: {
            trigger: wLi,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: true,
            markers: false
        },
        x: -200,
        opacity: 0
    })
})