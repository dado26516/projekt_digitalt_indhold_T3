//Kasper's javascript
//tager fat i id'erne fra html
const text = document.getElementById('about-us-text')
const aside = document.getElementById('about-us-aside')
const btn = document.getElementById('about-us-more')

//array til tekst inde i funktionen
const textArray = [
    "block",
    "none",
    "Læs mere",
    "Læs mindre"
]

// funktion der ekserkveres igennem onClick() på html'en
function moreText() {

    if (text.style.display == "none") {
        // alert("yes")
        text.style.display = textArray[0]
        aside.style.display = textArray[0]
        btn.innerHTML = textArray[3]
    }
    else {
        text.style.display = textArray[1]
        aside.style.display = textArray[1]
        btn.innerHTML = textArray[2]
    }
    // alert("ya")



}

//forloop der console logger de diverse værdier i textArray
for (let index = 0; index < textArray.length; index++) {
    console.log(textArray[index])
}
