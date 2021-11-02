let email = document.getElementsByName('email').value;
let emne = document.getElementsByName('emne').value;
let besked = document.getElementsByName('besked').value;

function kontaktForm() {


    if (email == "") {

        document.getElementsByName('email').style.borderColor = red;
        alert("Din besked er sendt");
    }

    else if (emne == "") {

        document.getElementsByName('email').style.borderColor = red;
    }
    else {
        alert("Din besked er sendt");
    }

}

