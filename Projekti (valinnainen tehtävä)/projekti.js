document.getElementById('button1').addEventListener('click', function() {
    console.log("Moi")
let field1Value = document.getElementById('field1').value;
let field2Value = document.getElementById('field2').value;

let errorMsg = document.getElementById('errorMsg');
let infoDisplay = document.getElementById('infoDisplay');

infoDisplay.innerHTML = '';

if (field2Value.trim() === '') {
    errorMsg.style.display = 'block';
    setTimeout(function() {
        errorMsg.style.display = 'none';
        }, 3500);
} else {
    errorMsg.style.display = 'none';
    //infoDisplay.innerHTML = <p>field1Value</p>,<p>field2Value</p>
    document.getElementById('infoDisplay').innerHTML = field1Value + ': ' + field2Value;
}
});
