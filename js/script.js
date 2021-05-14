
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

// ---------------- services tabs --------------------

const servicesTabs = document.querySelector(".services-tabs");
servicesTabs.addEventListener("click", function(e){
    // Si al hacer clic el nombre clase contiene "services-tab-item" y "active" el resultado de la operación lógica será falso
    if(e.target.classList.contains("services-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        // Se remueve la clase active de todos los elementos .active
        servicesTabs.querySelector(".active").classList.remove("active");
        // Se añade la clase active al objeto que tiene el foco al hacer clic
        e.target.classList.add("active");
        const servicesSection = document.querySelector(".services-section");
        servicesSection.querySelector(".services-tab-content.active").classList.remove("active");
        servicesSection.querySelector(target).classList.add("active");
    }
});

