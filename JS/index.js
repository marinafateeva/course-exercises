//Funktio, joka muuttaa tekstin värin
function changeColor(){
    document.getElementById("color").style.color = "red";
}

//Funktio, joka muuttaa tekstin sisällön
function changeContent(){
    document.getElementById("content").innerHTML = "Toinen tekstin esimerkki";
}

//Funktio, joka kysyy iäsi
function askAge(){
    let age = document.getElementById("age").value;
    let adult = (age < 18) ? "Alaikäinen":"Täysi-ikäinen";
    document.getElementById("demo").innerHTML = adult;
}

//Funktio, joka printaa Huhuu 5 kertaa
let text ="";
let i = 0;
while (i<5) {
    text += "<br>Huhuu?!";
    i++;
}
document.getElementById("demo2").innerHTML = text;

const animals = ["Koira", "Kissa", "Hevonen", "Hiiri", "Marsu"];
const listElement = document.getElementById("animalsId");


for (let i = 0; i<animals.length; i++) {
    listElement.innerHTML += "<li>" + animals[i] + "!</li>";
} 

function askName (f1name,l2name){
    return f1name + " " + l2name;
}
function printName(){
    const f1name = document.getElementById("fname").value;
    const l2name = document.getElementById("lname").value;
    const name = askName(f1name, l2name);
    document.getElementById("greet").innerHTML = "Hei " + name;
}