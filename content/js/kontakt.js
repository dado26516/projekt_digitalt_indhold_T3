var email = document.getElementById("email");
var emne = document.getElementById("emne");
var right = "left";
var borderColors = ["3px solid red", "2px solid grey"];
var empty = ["Mangler emne", "Mangler Mail"];
var emptyMail = document.getElementById("wrong-mail");
var emptySubject = document.getElementById("wrong-mail");
const textColor = "red";

function kontaktForm() {

    if (email.value.length == 0 && emne.value.length == 0) {

        //tekst mail
        emptyMail.innerHTML = empty[1];
        emptyMail.style.textAlign = "left";
        emptyMail.style.color = textColor;

        //tekst emne
        emptySubject.innerHTML = empty[0];
        emptySubject.style.textAlign = right";
        emptySubject.style.color = textColor;

        //console.log("email og emne mangler");

        //border
        email.style.border = borderColors[0];
        emne.style.border = borderColors[0];
    }


    else if (email.value.length != 0 && emne.value.length == 0) {
        //console.log("emne mangler");

        emptySubject.innerHTML = empty[0];
        emptySubject.style.textAlign = "left";


        //border
        email.style.border = borderColors[1];
        emne.style.border = borderColors[0];

        emptySubject.style.display = "block";
        emptyMail.style.display = "none";
    }


    else if (email.value.length == 0 && emne.value.length != 0) {
        // console.log("mail mangler");
        email.style.border = borderColors[0];
        emne.style.border = borderColors[1];

        emptyMail.innerHTML = empty[1];
        emptyMail.style.textAlign = "left";
        emptyMail.style.color = textColor;


        emptySubject.style.display = "none";
        emptyMail.style.display = "block";
    }


    else if (email.value.length != 0 && emne.value.length != 0) {
        alert("beskeden sendt");

        //border
        email.style.border = borderColors[1];
        emne.style.border = borderColors[1];

        emptySubject.style.display = "none";
        emptyMail.style.display = "none";
    }
}

