var selectedElement = document.getElementById("mySelect");
selectedElement.addEventListener("change", changefunction);
function changefunction(){
    var selectvalue = document.getElementById("mySelect").value;
    alert(selectvalue);
}