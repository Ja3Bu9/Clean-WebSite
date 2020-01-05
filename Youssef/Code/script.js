let toggle = false;
function showMenu(){
    let menuIcon = document.getElementById("menu-icon");
    let menu = document.querySelector(".nav-menu .nav-links ul");
    if (toggle){
        menuIcon.innerHTML = '<i class="fa fa-bars" ></i>'
        menu.style.right = "-94%";
        toggle = !toggle;
 
    } else {
        menuIcon.innerHTML = '<i class="fa fa-times" ></i>'
        menu.style.right = "0";
        toggle = !toggle;
    }     
}