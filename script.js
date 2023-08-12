const header = document.querySelector("#header")
const topNav = document.querySelector(".topnav")
const main = document.querySelector(".main")

window.onscroll = () => {
    if (window.scrollY >= 43) {
        header.classList.add("active")
    }
    else {
        header.classList.remove("active")
    }
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    //slidesPerView: "3",
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

const barBtn = document.querySelector("#bars")
const resNav = document.querySelector(".res-nav-list")

barBtn.onclick = () => {
    resNav.classList.toggle("active")
}