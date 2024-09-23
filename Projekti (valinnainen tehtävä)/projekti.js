document.getElementById('button1').addEventListener('click', function() {
    console.log("Moi")
let field1Value = document.getElementById('field1').value;
let field2Value = document.getElementById('field2').value;

let errorMsg = document.getElementById('errorMsg');
let infoDisplay = document.getElementById('infoDisplay');

infoDisplay.innerHTML = '';

if (field2Value.trim() === '') {
    errorMsg.style.display = 'block';
    document.getElementById('button1').style.backgroundColor='red';
    document.getElementById('button1').innerHTML='Virhe!!! Et lisännyt tietoa'
    setTimeout(function() {
        errorMsg.style.display = 'none';
        document.getElementById('button1').style.backgroundColor='black';
        document.getElementById('button1').innerHTML='Lisää tieto'
        }, 3500);
} else {
    errorMsg.style.display = 'none';
    //infoDisplay.innerHTML = <p>field1Value</p>,<p>field2Value</p>
    infoDisplay.style.display = 'block';
    document.getElementById('infoDisplay').innerHTML = field1Value + ': ' + field2Value;
}
});


function markTasks(){
    const tasks= document.querySelectorAll('.task');
    tasks.forEach(task => {
        const checkbox= task.querySelector('input[type="checkbox"]');
        const status = task.querySelector('.status');
        if (checkbox.checked) {
           status.textContent="   +tunnit pidetty"; }
            
           else {
            status.textContent= "";
            }
        }); 
}

