//kasper's javascript

var nav = document.getElementById("sticky-nav")

var text1 = document.getElementById('navBtn1')
var text2 = document.getElementById('navBtn2')
var text3 = document.getElementById('navBtn3')
var text4 = document.getElementById('navBtn4')
var text5 = document.getElementById('navBtn5')
var text6 = document.getElementById('navBtn6')

window.onscroll = function scroll() {

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        nav.style.color = "white";
        //
        nav.style.backgroundColor = "rgba(253, 253, 253," + document.documentElement.scrollTop / 200 + ")" 
        
        console.log("breakpoint")
        console.log(document.documentElement.scrollTop / 200)

        text1.classList.add("black-text")
        text2.classList.add("black-text")
        text3.classList.add("black-text")
        text4.classList.add("black-text")
        text5.classList.add("black-text")
        text6.classList.add("black-text")

      } else {
        nav.style.color = "var(--white)";
        nav.style.backgroundColor = "transparent";

        text1.classList.remove("black-text");
        text2.classList.remove("black-text");
        text3.classList.remove("black-text");
        text4.classList.remove("black-text");
        text5.classList.remove("black-text");
        text6.classList.remove("black-text");
      }

    }
    



    //et fejlet forsøg på at lave variabler igennem et forloop for at optimere kode
    // var navBtn = [];
    
//     for (var i = 0; i <= 6; ++i) {
//       navBtn[i] = "navknap nr" + i;
//     }
    
//     console.log(navBtn)
