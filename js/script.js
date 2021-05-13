
// -------------------- toggle navbar -------------------
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");//Hace que la caja del span se mueva
    document.querySelector("nav").classList.toggle("open");//La caja de la lista se despliega a la izquierda, es decir ocupa su posición original.
}

// ----------close nav when clicking on a nav item----------
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});

// ------------- sticky header -------------------
window.addEventListener("scroll", function(){
    if (this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
});

