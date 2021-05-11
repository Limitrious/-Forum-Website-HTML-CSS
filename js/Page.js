function ChangeLayout(){
    var guides = document.getElementById("guides");
    var login = document.getElementById("login");
    console.log(window.innerWidth);
    if(window.innerWidth >= 1088){
        guides.style.justifyContent = "center";
    }
    else if(window.innerWidth < 1088){
        guides.style.justifyContent = "flex-start";
    }
    else if(window.innerWidth < 980){
        // login.style.left = "980px";
        // login.style.position = "static";
    }
}
window.onresize = ChangeLayout;
ChangeLayout();