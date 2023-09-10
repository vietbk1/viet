$(document).ready(function () {
});


document.getElementById("logInButton").addEventListener("click", logInEvent);

function checkSignIn() {
    let name = document.getElementById("nm").value;
    let psw = document.getElementById("psw").value

    console.log(name, psw);

    if (name == "" || psw == "") return false;
    return true;

}

function logIn() {
    let formData = new FormData();
    let oUser = {
        Name: document.getElementById("nm").value,
        Password: document.getElementById("psw").value
    };

    formData.append('User', JSON.stringify(oUser)); 
    $.ajax({
        type: 'POST',
        url: '/Login/LogIn',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {

            if (data) {
                alert('Sign In Successfully');
                window.location.href = "/Home/Index";
            }
            else {
                    alert('Sign In Failed');
            }
        
           
        },
        error: function (response) {
            alert('login failed');
            console.log('Failed ');
        }

  
    });
}

function logInEvent() {
    if (checkSignIn()) {
        logIn();
    }
    else { alert("please fill in the form"); }
}



