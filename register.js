var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
}
var password = document.getElementById("password");
var meter = document.getElementById("password_strength_meter");
var text = document.getElementById("password_strength_text");
password.addEventListener("input", function(){
    var val = password.value;
    var result = strengthChcek(val);

    //update the password strength meter

    meter.value = result.score;

    if(val !== ""){
        text.innerHTML = "Strength: " + strength[result];
    }
    else{
        text.innerHTML = "";
    } 
});

function strengthCheck(val){
    if(val.length<8){
        return 0;
    }else{
        return 4;
    }
}
// adding pre-entered email in form
var temp=localStorage.getItem("tempMail");
    document.getElementById("email_address").setAttribute("placeholder",temp)
    document.getElementById("email_address").setAttribute("value",temp)