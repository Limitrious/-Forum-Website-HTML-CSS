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
function ChangeTopBackgroundColor() {
    let guides = document.getElementById("container");
    let loc = ScrollPosition();
    // console.log(loc.top);
    // console.log(window.screen.height);
    // if(loc.top > window.screen.height){
    //     // guides.style.backgroundColor = "rgba(0,0,0,0.5)";
    //     guides.style.animation = "toFull 5s";
    // }
    // else if(loc.top <= window.screen.height){
    //     // guides.style.backgroundColor = "transparent";
    //     guides.style.animation = "toNull 5s";
    // }
    let percent = loc.top / screen.height;
    if(percent / 2 <= 0.5){
        if(0.5 - percent / 2 <= 0.05) percent = 1;
        guides.style.backgroundColor = "rgba(0,0,0," + (percent / 2).toString() + ")";
    }
}
