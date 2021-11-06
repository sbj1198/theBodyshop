document.getElementById("next").addEventListener("click", accountCheck);
// var x = document.getElementById("email").value;
var acc = JSON.parse(localStorage.getItem("accDetails")) || [];
function accountCheck() {
    var x = document.getElementById("email").value;
     var pattern = /^[6-9]\d{9}$/;
     var pattern2 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // validating Mobile No
     if (pattern.test(x)) { 
        var mobObj = {
            mobileNo: x,
        };
        acc.push(mobObj);
    }
    //validating Email
    else if(pattern2.test(x)) {
        var emailObj = {
            email: x,
        };
        acc.push(emailObj);
    }
    else{
        alert("Error: Check the Email/Mobile No. entered");
    }
    // acc.push(mobObj, emailObj);
    localStorage.setItem("accDetails", JSON.stringify(acc));
    console.log(acc.length);
}

// function validateMobile(x) {
//     var pattern = /^[6-9]\d{9}$/;
//     if (pattern.test(x)) {
//         return true;
//     }
//     alert("You have entered an incorrect Mobile No!");
//     return false;
// }
// function validateEmail(x) {
//     var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (pattern.test(x)) {
//         return true;
//     }
//     alert("You have entered an incorrect email!");
//     return false;
// }
