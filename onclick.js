function do_something(){
    alert("Hello");
}
var demo = document.getElementById("demo");
demo.addEventListener("click", ClickFunction);
function ClickFunction(){
    alert("Hi");
}