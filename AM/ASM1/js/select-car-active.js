// Add active class to the current button (highlight it)
var btnSLC = document.getElementById("select-car");
var btnslcs = btnSLC.getElementsByClassName("text-select-car");
for (var i = 0; i < btnslcs.length; i++) {
    btnslcs[i].addEventListener("click", function(){
    var currentSLC = document.getElementsByClassName("active-text-select-car");
    currentSLC[0].className = currentSLC[0].className.replace(" active-text-select-car", "");
    this.className += " active-text-select-car";
  });
}