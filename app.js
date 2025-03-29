// Code for drop down menu
const menuSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".h-list");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
}
menuSlide();

// Code for background music
const music = document.querySelector("audio");
const volBtn = document.querySelector("#vol-switch");
document.onmousedown = function(){
    music.play();
}

volBtn.addEventListener("click", () => {
    body.classList.toggle("vol");
    // if(music.volume>0.1)
    // {
    //     music.volume = 0;
    // }
    // else
    // {
    //     music.volume = 1;
    // }

    if(music.muted)
    {
        music.muted = false;
    }
    else
    {
        music.muted = true;
    }
});

// Code for Dark Mode
const body = document.querySelector("body");
const themeBtn = document.querySelector("#theme-switch");
let darkmode = localStorage.getItem("darkmode");

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode", "active");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkmode", null);
}

if(darkmode === "active")
{
    enableDarkMode();
}

themeBtn.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});
