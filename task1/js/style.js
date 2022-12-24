let passArray = [
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m",],
["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "&lt;", "&gt;", "/", ",", ".", ";", ":"],
["0", "1", "2", "3","4", "5", "6", "7", "8","9"]]
// "ABCDEFGHIJKLMNOPQRSTUVWXYZ","qwertyuiopasdfghjklzxcvbnm","!@#$%^&*(){}[]=<>/,.;:","0123456789"]

const rndmpswrd = () => {
    let boyuk = 1
    let kicik = 1
    let simvol = 1
    let reqem = 1
    let uzunluq = Math.floor(Math.random() * 10)
    if (uzunluq <= 7) {
        return rndmpswrd()
    }
    // console.log(uzunluq)
    let random = ""

    for (let a = 1; a < uzunluq; a++) {
        let randompin = Math.floor(Math.random() * (passArray.length))
        let pin = passArray[randompin]
        let kod = Math.floor(Math.random() * (pin.length-1))
       
        // console.log("pin",pin.length)
        
        let randomArray = pin[kod]
        if (passArray[0].includes(randomArray)) {
            boyuk -= 1
        }
        else if (passArray[1].includes(randomArray)) {
            kicik -= 1
        }
        else if (passArray[2].includes(randomArray)) {
            simvol -= 1
        }
        else if (passArray[3].includes(randomArray)) {
            reqem -= 1
        }

        random += randomArray
       
        // console.log(randomArray)
    }
    if(boyuk ===1 ||kicik===1||simvol===1||reqem===1){
    return rndmpswrd
    }

    let randomArray = document.querySelector("#password")
    randomArray.innerHTML = random
}
let buton = document.querySelector("#passwordBtn")
buton.addEventListener("click", rndmpswrd) 

let text = document.querySelector("h1")
setInterval(changeColor,1000)

function changeColor(){
    let r= Math.floor(Math.random()*255)
    let g= Math.floor(Math.random()*255)
    let b= Math.floor(Math.random()*255)

    text.style.color ="RGB("+r+","+g+","+b+")"
}

changeColor()