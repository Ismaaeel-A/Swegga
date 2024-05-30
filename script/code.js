const fPrice = 150.95 , mPrice = 180.95

function calculation(){
    let fTotal = document.querySelector('[fQuantity]').value * fPrice
    let mTotal = document.querySelector('[mQuantity]').value * mPrice
    let fmCombined = fTotal + mTotal
    
    document.querySelector('[fTotal]').innerHTML = fTotal.toFixed(2)
    document.querySelector('[mTotal]').innerHTML = mTotal.toFixed(2)
    document.querySelector('[fmCombined]').innerHTML = fmCombined.toFixed(2)
}


