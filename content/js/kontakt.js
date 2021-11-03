
var email = document.getElementById("email");
var emne = document.getElementById("emne");


function borderColorEmail() {
    email.style.border = "4px solid red";
}

function borderColorEmne() {
    emne.style.border = "4px solid red";
}

function kontaktForm() {

    if (email.value.length == 0 && emne.value.length == 0) {
        console.log("email og emne mangler");
        borderColorEmail();
        borderColorEmne();
    }
    else if (email.value.length != 0 && emne.value.length == 0) {
        console.log("emne mangler");
        borderColorEmne();
    }
    else if (email.value.length == 0 && emne.value.length != 0) {
        console.log("mail mangler");
        borderColorEmail();
    }

    else if (email.value.length != 0 && emne.value.length != 0) {
        console.log("beskeden sendt");
    }


}
