const convertButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".select-currency")

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarValue = 5.35
    const euroValue = 6.20
    const libraValue = 7.08
    const btcValue= 488.664

    if (selectCurrency.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrency / dolarValue)
    }

    if (selectCurrency.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrency / euroValue)
    }

    if (selectCurrency.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(inputCurrency / libraValue)
    }

    if (selectCurrency.value=="bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "BTC" }).format(inputCurrency / btcValue)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrency)
}
    function changeCurrency() {
        const currencyName = document.getElementById("currency-name")

        const currencyImage = document.querySelector(".currency-img")   

        if (selectCurrency.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/eua.png"
        }

        if (selectCurrency.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro.png"

        }

        if (selectCurrency.value == "libra") {
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/libra.png"

            }
        
            if (selectCurrency.value=="bitcoin") {
                currencyName.innerHTML = "Bitcoin"
                currencyImage.src = "./assets/bitcoin.png"
            }
            convertValues()
    }
   



selectCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
