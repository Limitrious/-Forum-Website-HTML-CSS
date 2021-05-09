function doHandleYear() {
    var myDate = new Date();
    var tYear = myDate.getFullYear();
    return tYear;
}
var copy = document.getElementById("footer");
copy.innerText = "©" + doHandleYear().toString() + " Amekiri All Rights Reserved";