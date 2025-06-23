const rollDiceBtn = document.getElementById("rollDiceBtn")
const clearDiceBtn = document.getElementById("clearDiceBtn")
const diceResultText = document.getElementById("diceResultText")
const dicesImages = document.getElementById("dicesImages")
const valuesGenerated = []
const images = []

function rollDice(){
    const numOfDicesInput = document.getElementById("numOfDicesInput").value
    if(numOfDicesInput >= 500){
        alert("Atenção, a partir de 500 dados o navegador começará a ter problemas em renderizar todas as imagens, você foi avisado.")
    }
    for(let i = 0; i < numOfDicesInput; i++){
        const randomValue = Math.floor(Math.random() * 6) + 1
        valuesGenerated.push(randomValue)
        images.push(`<img src="diceImages/Side_${randomValue}_Pips.png" alt="Valor: ${randomValue}">`)
        diceResultText.textContent = `Valores gerados: ${valuesGenerated.join(", ")}`
        dicesImages.innerHTML = `${images.join("")}`
    }
}

function clearDice(){
    
    diceResultText.textContent = ""
    dicesImages.innerHTML = ""
}