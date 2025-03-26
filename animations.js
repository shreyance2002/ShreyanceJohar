gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".abt-txt");
console.log(splitTypes);

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