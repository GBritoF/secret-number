let drawnNumbers = []
let maxNumber = 10
let attempts = 0


const title = document.querySelector(".container__title")
const paragraph = document.querySelector(".texto__paragrafo")
const buttonKick = document.querySelector("#chute")
const buttonReset = document.querySelector("#reiniciar")

let ramdomNumber = getRamdomNumber()

title.textContent = "Tente acertar"
paragraph.textContent = `O numero secreto esta entre 0 e ${maxNumber}`


buttonKick.addEventListener("click", checkKick)
buttonReset.addEventListener("click", resetGame)

function checkKick() {
    const ramp = document.querySelector(".container__input").value
    attempts++

    if(ramdomNumber > ramp) {
        paragraph.textContent = "O número secreto e maior"
        title.textContent = `Você falou ${ramp}`
        cleanCamp()
    } else if(ramdomNumber < ramp) {
        paragraph.textContent = "O número secreto e menor"
        title.textContent = `Você falou ${ramp}`
        cleanCamp()
    } else if(ramdomNumber == ramp) {
        const wordAttempts = attempts <= 1  ? 'tentativa' : 'tentativas'
        title.textContent = `Você acertou!`
        paragraph.textContent = `O número secreto era ${ramdomNumber}, você acertou com total de ${attempts} ${wordAttempts}.`
        cleanCamp()
        buttonReset.removeAttribute("disabled")
    }
}


function getRamdomNumber() {
    let ramdomNumber = parseInt(Math.random() * maxNumber + 1)
    let elementsInList = drawnNumbers.length

    if(elementsInList == maxNumber) {
        drawnNumbers = []
    }
    
    if(drawnNumbers.includes(ramdomNumber)) {
        return getRamdomNumber()
    } else {
        drawnNumbers.push(ramdomNumber)
        console.log(drawnNumbers)
        return ramdomNumber
    }
}

function cleanCamp() {
    const rampValue = document.querySelector(".container__input")
    rampValue.value = ""
}

function resetGame() {
    ramdomNumber = getRamdomNumber()
    cleanCamp()
    attempts = 0;
    title.textContent = "Tente acertar"
    paragraph.textContent = `O numero secreto esta entre 0 e ${maxNumber}`
    buttonReset.setAttribute("disabled", true   )
}
