function copyNumber() {
    navigator.clipboard.writeText
        ("+1 (123) 4567 890");
}
function copyEmail() {
    navigator.clipboard.writeText
        ("example@email.com");
}
function copyAddress() {
    navigator.clipboard.writeText
        ("City, Street 1, 15015");
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}