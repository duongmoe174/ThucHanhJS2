var demo = document.getElementById("demo");
demo.addEventListener("mouseover",chuotden);
demo.addEventListener("mouseout", chuotdi);
function chuotden(){
    document.getElementById("demo").style.color="red";
}
function chuotdi(){
    document.getElementById("demo").style.color="black";
}