function showMessage() {
    var email = document.getElementById('email').value;
    alert("Ваша електронна адреса: "+email);
    if(confirm("Are you sure you want to return?")) document.location = 'https://index.html'; 
}