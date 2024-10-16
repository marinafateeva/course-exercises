//Search button - from w3 schools
function searchButton() {
  alert("In the future it could be a working search bar! But for now it is a mockup for the course Tieto- ja viestintätekniikan perustehtävät");
}

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
          
          document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
          document.querySelectorAll('.price-content').forEach(c => c.classList.remove('active'));
          
          this.classList.add('active');
          document.getElementById(tabName).classList.add('active');
      });
  });
});


//Newsletter
document.getElementById('newsletterButton').addEventListener('click', function() {
let fieldValue = document.getElementById('newsletterInputForm').value;
const errorMsg = document.getElementById('errorMsg');
const checkbox = document.getElementById('newsletterCheckbox');
const errorMsg2 = document.getElementById('errorMsg2');

if (fieldValue.trim() === '') {
  errorMsg.style.display = 'block';
  document.getElementById('newsletterButton').style.backgroundColor='black';
  document.getElementById('newsletterButton').innerHTML='Error'
  setTimeout(function() {
      errorMsg.style.display = 'none';
      document.getElementById('newsletterButton').style.backgroundColor='#6298a9';
      document.getElementById('newsletterButton').innerHTML='Send'
      }, 3500);
} else if (!checkbox.checked){
  errorMsg2.style.display = 'block';
  document.getElementById('newsletterButton').style.backgroundColor='black';
  document.getElementById('newsletterButton').innerHTML='Error'
  setTimeout(function() {
    errorMsg2.style.display = 'none';
    document.getElementById('newsletterButton').style.backgroundColor='#6298a9';
    document.getElementById('newsletterButton').innerHTML='Send'
    }, 3500);
} else {
  errorMsg.style.display = 'none';
  alert("Thanks for joining our newsletter! (In the future, this input could also ask for a certain type of text as in emails)");
}
});





