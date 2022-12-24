let passArray = [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m",],
["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", ".", ";", ":"],
["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]]


const randomPassword = () => {
    let boyuk = 1
    let kicik = 1
    let simvol = 1
    let reqem = 1
    let uzunluq = Math.floor(Math.random() * 20)
    if (uzunluq <= 7) {
        return randomPassword()
    }

    let bir = ""
    for (let a = 0; a <= uzunluq; a++) {
        let randompasss = Math.floor(Math.random() * (passArray.length))
        let randomkod = passArray[randompasss]
        let randomsecilmis = Math.floor(Math.random() * (randomkod.length))
        let element = randomkod[randomsecilmis]
        if (passArray[0].includes(element)) {
            boyuk -= 1
        }
        else if (passArray[1].includes(element)) {
            kicik -= 1
        }
        else if (passArray[2].includes(element)) {
            simvol -= 1
        }
        else {
            reqem -= 1
        }

        bir += element

    }
    if (boyuk == 1 || kicik == 1 || simvol == 1 || reqem == 1) {
        return randomPassword()
    }
    let element = document.querySelector("#password")
    element.innerHTML = bir
}

let buton = document.querySelector("#passwordBtn")
buton.addEventListener("click", randomPassword)

