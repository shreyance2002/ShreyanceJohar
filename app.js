const music = document.querySelector("audio");

const menuSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".h-list");
    const body = document.querySelector("body");
    const themeBtn = document.querySelector("#theme-switch");
    const volBtn = document.querySelector("#vol-switch");
    

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });

    themeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    volBtn.addEventListener("click", () => {
        body.classList.toggle("vol");
        if(music.volume>0.1)
        {
            music.volume = 0;
        }
        else
        {
            music.volume = 1;
        }
    })
}

menuSlide();

document.onmousedown = function(){
    music.play();
}