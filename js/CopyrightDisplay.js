function doHandleYear() {
    var myDate = new Date();
    var tYear = myDate.getFullYear();
    return tYear;
}
var copy = document.getElementById("copy");
copy.innerText = doHandleYear().toString();