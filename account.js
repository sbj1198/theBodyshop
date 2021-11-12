document.getElementById("next").addEventListener("click", accountCheck);
// var x = document.getElementById("email").value;
var acc = JSON.parse(localStorage.getItem("accDetails")) || [];
function accountCheck() {
    var x = document.getElementById("email").value;
    localStorage.setItem("tempMail", x);
    var pattern = /^[6-9]\d{9}$/;
    var pattern2 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (pattern.test(x)) /* validating mobile */ {
        var mobObj = {
            mobileNo: x,
        };
        if (acc.length !== 0) {                      /* Checking if the user has already registered or not
                                                      if not than taking him to registration page */
            for (var i = 0; i < acc.length; i++) {
                if (x == acc[i].mobileNo) {
                    console.log("some code will go here");
                }
                else {
                    acc.push(mobObj);
                    window.location.href = "register.html";
                }
            }
        }
        else {
            acc.push(mobObj);
            window.location.href = "register.html";
        }

    }
    else if (pattern2.test(x)) /*validating email*/ {
        var emailObj = {
            email: x,
        };
        if (acc.length !== 0) {
            for (var i = 0; i < acc.length; i++) {
                if (x == acc[i].email) {
                    console.log("some code will go here");
                }
                else {
                    acc.push(emailObj);
                    window.location.href = "register.html";
                }
            }
        }
        else {
            acc.push(emailObj);
            window.location.href = "register.html";
        }
    }
    else {
        alert("Error: Check the Email/Mobile No. entered");
    }
    localStorage.setItem("accDetails", JSON.stringify(acc));
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
