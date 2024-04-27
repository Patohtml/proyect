window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("headerScroll",window.scrollY>0);
})