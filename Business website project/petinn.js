//Copy buttons - from w3 schools
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

//Collapsible - from w3 schools
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

//Pricing - from AI Claude
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
      tab.addEventListener('click', function() {
          const tabName = this.getAttribute('data-tab');
          
          // Удаляем активный класс у всех вкладок и контента
          document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
          document.querySelectorAll('.price-content').forEach(c => c.classList.remove('active'));
          
          // Добавляем активный класс кликнутой вкладке и соответствующему контенту
          this.classList.add('active');
          document.getElementById(tabName).classList.add('active');
      });
  });
});