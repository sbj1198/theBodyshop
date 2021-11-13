// adding pre-entered email in form
var temp = localStorage.getItem("tempMail");
document.getElementById("email_address").setAttribute("placeholder", temp)
document.getElementById("email_address").setAttribute("value", temp)