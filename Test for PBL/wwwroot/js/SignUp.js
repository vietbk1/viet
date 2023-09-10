$(document).ready(function () {
});

document.getElementById("signUpButton").addEventListener("click", formSubmitEvent);
function checkPassword() {
    let psw = document.getElementById("psw").value;
    let cfmPsw = document.getElementById("cfmPsw").value;
    if (psw != cfmPsw && psw != "" && cfmPsw != "") {
        document.getElementById("pswMsg").innerHTML = "Password did not match";
        return false;
    } else {
        document.getElementById("pswMsg").innerHTML = "";
        return true;
    }
}

function formValidate() {
    let psw = document.getElementById("psw").value;
    let cfmPsw = document.getElementById("cfmPsw").value;
    let nm = document.getElementById("nm").value
    if (nm == "" || psw == "" || cfmPsw == "" || !checkPassword()) {
        return false;
    }
    return true;
}

function formPost() {
    let formData = new FormData();
    let oUser = {
        Name: document.getElementById("nm").value,
        Password: document.getElementById("psw").value
    };

    formData.append('User', JSON.stringify(oUser));


    $.ajax({
        type: 'POST',
        url: '/Login/NewUser',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            if (data) {
                alert("Sign Up Successfully");
            }
            else alert("Sign Up Failed");
        },
        error: function (data) {
            alert('Failed to receive the Data');
            console.log('Failed ');
        }
    });
}

function formSubmitEvent() {
    if (formValidate()) {
        formPost();
        window.location.href = "/Login/Index";
    }
    else {
        alert("invalid");
    }
}
