const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConvert= document.querySelector(".currency-value-to-convert")
    const currencyValueConverted= document.querySelector(".currency-value")
    
    const dolarValue=5.36
    const convertvalue= inputCurrency/dolarValue
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {style:"currency", currency:"BRL"}).format(inputCurrency)
    currencyValueConverted.innerHTML =  new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format( convertvalue)
    console.log( convertvalue)  
    
}
convertButton.addEventListener("click",convertValues)