function hasScrollbar() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}
function ScrollPosition() {
    let t, l, w, h;
    if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
        l = document.documentElement.scrollLeft;
        w = document.documentElement.scrollWidth;
        h = document.documentElement.scrollHeight;
    } else if (document.body) {
        t = document.body.scrollTop;
        l = document.body.scrollLeft;
        w = document.body.scrollWidth;
        h = document.body.scrollHeight;
    }
    return {
        top: t,
        left: l,
        width: w,
        height: h
    };
}
function ChangeTopBackgroundColor(){
    let guides = document.getElementById("container");
    if(ScrollPosition().top >= screen.height / 100){
        console.log(true);
        guides.style.backgroundColor = "rgba(0,0,0,0.6)";
        guides.style.transition = "all 0.3s ease-in-out";
    }
    else if(ScrollPosition().top < screen.height / 100){
        console.log(false);
        guides.style.backgroundColor = "rgba(0,0,0,0)";
        guides.style.transition = "all 0.3s ease-in-out";
    }
}
ChangeTopBackgroundColor();
