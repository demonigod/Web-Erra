let menuBtn = document.querySelector(".menu")
let sideNav = document.querySelector(".items-all")
let menu = document.querySelector(".hamicon")

menuBtn.onclick = function(){
    if(sideNav.style.right =="-250px"){
    sideNav.style.right = "0";
    menu.src = "images/cross.png";  
}
else{
    sideNav.style.right = "-250px";
    menu.src = "images/ham.png";
}
}