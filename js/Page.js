import("jquery-3.6.0.js");
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                        "SymbianOS", "Windows Phone",
                        "iPad", "iPod"];
    var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function ChangeLayout(){
    var guides = document.getElementById("guides");
    var login = document.getElementById("login");
    var container = document.getElementById("container");
    var width = window.innerWidth;
    var list = document.getElementById("list");
    console.log(width);
    if(width >= 1088){
        document.body.style.overflowX = "auto";
        guides.style.justifyContent = "center";
        guides.style.transition = "all 0.3 ease-in-out";
        guides.style.display = "flex";
        list.style.display = "none";
        $(".contentBox").width(840);
        $(".contentBox").height(150);
        $(".contentIntro").css("text-align","center");
    }
    else if(width < 1088){
        document.body.style.overflowX = "visible";
        guides.style.justifyContent = "flex-start";
        guides.style.transition = "all 0.3 ease-in-out";
        guides.style.display = "flex";
        list.style.display = "none";
        $(".contentBox").width(840);
        $(".contentBox").height(150);
        $(".contentIntro").css("text-align","center");
    }
    if(width <= 1020 && !IsPC()){
        guides.style.display = "none";
        $(".contentBox").width("auto");
        $(".contentBox").height("auto");
        $(".contentIntro").css("text-align","left");
        document.body.style.overflowX = "hidden";
        list.style.display = "block";
    }
    if(width < 980){
        guides.style.display = "none";
        $(".contentBox").width(840);
        $(".contentBox").height(150);
        $(".contentIntro").css("text-align","center");
        document.body.style.overflowX = "hidden";
        list.style.display = "block";
    }
    if(width < 840){
        $(".contentBox").width("auto");
        $(".contentBox").height("auto");
        $(".contentIntro").css("text-align","left");
        document.body.style.overflowX = "hidden";
        list.style.display = "block";
    }
}
ChangeLayout();
window.onresize = ChangeLayout;