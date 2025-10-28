const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrency = document.querySelector(".input-currency").value
    const dolarValue=5.36
    const convertvalue= inputCurrency/dolarValue
    console.log( convertvalue)  
}
convertButton.addEventListener("click",convertValues)