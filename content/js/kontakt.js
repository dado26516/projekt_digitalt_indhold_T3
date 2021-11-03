
var email = document.getElementById("email");
var emne = document.getElementById("emne");
borderColors = ["3px solid red", "2px solid grey"];



function kontaktForm() {

    if (email.value.length == 0 && emne.value.length == 0) {
        console.log("email og emne mangler");
        email.style.border = borderColors[0];
        emne.style.border = borderColors[0];
    }
    else if (email.value.length != 0 && emne.value.length == 0) {
        console.log("emne mangler");
        email.style.border = borderColors[1];
        emne.style.border = borderColors[0];

    }
    else if (email.value.length == 0 && emne.value.length != 0) {
        console.log("mail mangler");
        email.style.border = borderColors[0];
        emne.style.border = borderColors[1];
    }

    else if (email.value.length != 0 && emne.value.length != 0) {
        alert("beskeden sendt");
        email.style.border = borderColors[1];
        emne.style.border = borderColors[1];
    }


}

for (var i = 0; i < borderColors.length; i++) {
    console.log(borderColors[i]);
}