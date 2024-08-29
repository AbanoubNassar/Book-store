/*Start search btn*/
var searchForm = document.querySelector(".search-form");/* هنا جبت القورم العاديه والاساسيه*/
var searchBtn = document.getElementById("search-btn");

searchBtn.onclick = () =>{ /* هنا جبت زرار السيرش وقلت لما اضغط عليه ينفذ الاامر اللي تحت*/
    searchForm.classList.toggle("active"); /* هينقذ الامر اكتيف على الفورم*/
}
/*End search btn*/




/* Start login form */
let logInBtn = document.getElementById("login-btn");
let logOutBtn = document.getElementById("close-login-btn");
let loginForm = document.querySelector (".login-form-sheet"); /* هنا جبت الفورم*/

logInBtn.onclick = () => {
    loginForm.classList.toggle("active");
}

logOutBtn.onclick = () => {
    loginForm.classList.remove("active")
}
/* End login form */




window.onscroll = () => {

searchForm.classList.remove("active");

if(window.scrollY > 80 ){
    document.querySelector(".navbars .top-navbar-2").classList.add("active");
}else{
    document.querySelector(".navbars .top-navbar-2").classList.remove("active");
}
}

window.onload = () => {
if(window.scrollY > 80 ){
    document.querySelector(".navbars .top-navbar-2").classList.add("active");
}else{
    document.querySelector(".navbars .top-navbar-2").classList.remove("active");
}
}





/*Start top navbar Swiper */
var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
/*End top navbar Swiper */




/*Start Swiper featured  */
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    450: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    1024: {
        slidesPerView: 4,
    },
    },
});
/*End Swiper featured  */




/*Start Swiper Arrivals  */
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    },
});
/*End Swiper Arrivals  */





/*Start Swiper Reviews*/
var swiper = new Swiper(".reviews-slider",{
    spaceBetween: 10,
    loop: true,
    centeredSlides: true ,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        },
});
/*End Swiper Reviewsr*/




/*Start Reviews Swiper*/
var swiper = new Swiper (".blogs-slider",{
    spaceBetween: 10,
    loop: true ,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView:3,
        },
    },
});
/*End Reviews Swiper*/



/*Start Loader */
var loading = document.querySelector(".loader-container");
var htmlSheet = document.getElementById("html");

function loader (){
    loading.classList.add("active"); /*هنا جبت اللوود وفعلت عدم التشغيل */
    htmlSheet.classList.add("active");
}
function fadeOut(){
    setTimeout(loader,2000); /* هنا قولت وقف التشغيل بعد 2 ثواني*/
}

window.onload = () => { /* هنا قولت نفذ معادلة عدم التشغيل بعد تحميل الصفحة*/
    fadeOut()   
}
/*End Loader */