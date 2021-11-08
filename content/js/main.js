//Kasper's javascript
//tager fat i id'erne fra html
const text = document.getElementById('about-us-text')
const aside = document.getElementById('about-us-aside')
const btn = document.getElementById('about-us-more')
const arrow = document.getElementById('arrow')

//array til tekst inde i funktionen
const textArray = [
    "block",
    "none",
    "Læs mere",
    "Læs mindre",
    "fa-arrow-up", 
    "fa-arrow-down"
]

// funktion der ekserkveres igennem onClick() på html'en
function moreText() {

    if (text.style.display == "none") {
        // alert("yes")
        text.style.display = textArray[0]
        aside.style.display = textArray[0]
        btn.innerHTML = textArray[3]
        arrow.classList.remove(textArray[5])
        arrow.classList.add(textArray[4])
    }
    else {
        text.style.display = textArray[1]
        aside.style.display = textArray[1]
        btn.innerHTML = textArray[2]
        arrow.classList.add(textArray[5])
        arrow.classList.remove(textArray[4])
    }
    // alert("ya")

}

//forloop der console logger de diverse værdier i textArray
for (let index = 0; index < textArray.length; index++) {
    console.log(textArray[index])
}
