//JS - Tanja
//Variabler af inputs i HTML - tekstfelter
var username = document.getElementById('username');
var password = document.getElementById('password');

//Fejlbesked
var error = document.getElementById('error');

//Knap
var loginBtn = document.getElementById('login_btn');

var code = "123"

var usernameArray = ["Danni", "Kasper", "Nicole", "Tanja"];

var borderColors = ["3px solid red","1px solid grey"];


function checkLogin() {

  if (username.value.length == 0 && password.value.length == 0) {
    error.innerHTML = "Mangler brugernavn eller email og kode"
    username.style.border = borderColors[0]
    password.style.border = borderColors[0]
  }

  else if (username.value.length != 0 && password.value.length == 0) {
    error.innerHTML = "Mangler kode"
    username.style.border = borderColors[1]
    password.style.border = borderColors[0]
  }

  else if (username.value.length == 0 && password.value.length != 0) {
    error.innerHTML = "Mangler brugernavn eller email"
    username.style.border = borderColors[0]
    password.style.border = borderColors[1]
  }

  else if (username.value.length != 0 && password.value.length != 0) {

    if (
       username.value == usernameArray[0] && password.value == code
       ||
       username.value == usernameArray[1] && password.value == code
       ||
       username.value == usernameArray[2] && password.value == code
       ||
       username.value == usernameArray[3] && password.value == code

       ) {
      error.innerHTML = "logged ind"
      error.style.color = "green"
      username.style.border = borderColors[1]
      password.style.border = borderColors[1]

    }
    else {
      error.innerHTML = "Brugernavn eller password er forkert"
      username.style.border = borderColors[0]
      password.style.border = borderColors[0]
    }

  }

}

for(var i = 0; i < usernameArray.length; i++) {
  console.log(usernameArray[i])
}
