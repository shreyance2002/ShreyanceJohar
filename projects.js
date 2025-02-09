const navSlide = () => {
    const burger = document.querySelector(".burger");
    const sideBar = document.querySelector(".side-bar");

    burger.addEventListener("click", () => {
        console.log("clicked");
        sideBar.classList.toggle("nav-active");
    })
}

navSlide();

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let list2 = document.querySelector('.slider-2 .list-2');
let items2 = document.querySelectorAll('.slider-2 .list-2 .item-2');
let dots2 = document.querySelectorAll('.slider .dots li');
let prev2 = document.querySelector("#prev-2");
let next2 = document.querySelector("#next-2");

let active = 0;
let lengthItems = items.length -1;

next.onclick = function(){
    if(active+1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active-1 < 0)
    {
        active = lengthItems;
    }else{
        active = active -1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => {next.click}, 5000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots .li.active');
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    let refreshSlider = setInterval(() => {next.click}, 5000);

}

// dots.forEach((list, key) => {
//     list.addEventListener('click', function() {
//         active=key;
//         reloadSlider();
//     })
// })


// SECOND SLIDESHOW

let active2 = 0;
let lengthItems2 = items2.length -1;

next2.onclick = function(){
    if(active2+1 > lengthItems2){
        active2 = 0;
    }else{
        active2 = active2 + 1;
    }
    reloadSlider2();
}

prev2.onclick = function(){
    if(active2-1 < 0)
    {
        active2 = lengthItems2;
    }else{
        active2 = active2 -1;
    }
    reloadSlider2();
}

let refreshSlider2 = setInterval(() => {next2.click}, 5000);
function reloadSlider2(){
    let checkLeft = items2[active2].offsetLeft;
    list2.style.left = -checkLeft + 'px';

    let lastactive2Dot = document.querySelector('.slider .dots2 .li.active2');
    lastactive2Dot.classlist2.remove("active2");
    dots2[active2].classlist2.add("active2");
    clearInterval(refreshSlider2);
    let refreshSlider2 = setInterval(() => {next2.click}, 5000);

}

dots2.forEach((list2, key) => {
    list2.addEventlist2ener('click', function() {
        active2=key;
        reloadSlider2();
    })
});