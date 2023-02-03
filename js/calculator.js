const table = document.getElementsByClassName("main_table")[0]
const tableTotals = document.getElementById("totals")

const roundNum = 10000000000
let rowCount = 2

let mean = 0
let standard_deviation = 0
let fTotal = 0
let fxTotal = 0
let x2total = 0
let fx2Total = 0

function calcMean() {
    if (fxTotal === null || fTotal === null) {
        mean = null
        document.getElementById("mean").innerText = "Mean:"
    } else {
        mean = fxTotal / fTotal

        document.getElementById("mean").innerText = `Mean: ${mean}`
    }
}

function calcStandardDeviation() {
    if (x2total === null || fTotal === null || mean === null) {
        standard_deviation = null
        document.getElementById("standard_deviation").innerText = "(Standard Deviation) σ:"
    } else {
        standard_deviation = Math.sqrt((Number(fx2Total) / Number(fTotal)) - (Number(mean) * Number(mean)))

        document.getElementById("standard_deviation").innerText = `(Standard Deviation) σ: ${standard_deviation}`
    }
}

function updateFX() {
    let fullTotal = 0

    for (let i = 1; i <= rowCount; i++) {
        let total = 0

        let valueX = document.getElementById(`row_${i}`).getElementsByTagName("td")[0].getElementsByTagName("input")[0].value
        let valueF = document.getElementById(`row_${i}`).getElementsByTagName("td")[1].getElementsByTagName("input")[0].value

        if (Number(valueX) && Number(valueF) && total != null) {
            total = Number(valueX) * Number(valueF)
            
            if (fullTotal === null) {
                fullTotal = total
            } else {
                fullTotal += total
            }
        } else {
            total = null
            fullTotal = null
        }

        document.getElementById(`row_${i}`).getElementsByTagName("td")[2].getElementsByTagName("p")[0].innerText = Math.round(total * roundNum) / roundNum
    }

    if (fullTotal === null) {
        tableTotals.getElementsByTagName("td")[2].getElementsByTagName("p")[0].innerText = ""
    } else {
        tableTotals.getElementsByTagName("td")[2].getElementsByTagName("p")[0].innerText = Math.round(fullTotal * roundNum) / roundNum
    }

    fxTotal = fullTotal

    calcMean()
    calcStandardDeviation()
}

function updateX2() {
    let fullTotal = 0

    for (let i = 1; i <= rowCount; i++) {
        let total = 0

        let valueX = document.getElementById(`row_${i}`).getElementsByTagName("td")[0].getElementsByTagName("input")[0].value

        if (Number(valueX) && total != null) {
            total = Number(valueX) * Number(valueX)
            
            if (fullTotal === null) {
                fullTotal = total
            } else {
                fullTotal += total
            }
        } else {
            total = null
            fullTotal = null
        }

        document.getElementById(`row_${i}`).getElementsByTagName("td")[3].getElementsByTagName("p")[0].innerText = Math.round(total * roundNum) / roundNum
    }

    if (fullTotal === null) {
        tableTotals.getElementsByTagName("td")[3].getElementsByTagName("p")[0].innerText = ""
    } else {
        tableTotals.getElementsByTagName("td")[3].getElementsByTagName("p")[0].innerText = Math.round(fullTotal * roundNum) / roundNum
    }

    x2total = fullTotal

    calcMean()
    calcStandardDeviation()
}

function updateFX2() {
    let fullTotal = 0

    for (let i = 1; i <= rowCount; i++) {
        let total = 0

        let valueX2 = document.getElementById(`row_${i}`).getElementsByTagName("td")[3].getElementsByTagName("p")[0].innerText
        let valueF = document.getElementById(`row_${i}`).getElementsByTagName("td")[1].getElementsByTagName("input")[0].value

        if (Number(valueX2) && Number(valueF) && total != null) {
            total = Number(valueX2) * Number(valueF)
            
            if (fullTotal === null) {
                fullTotal = total
            } else {
                fullTotal += total
            }
        } else {
            total = null
            fullTotal = null
        }

        document.getElementById(`row_${i}`).getElementsByTagName("td")[4].getElementsByTagName("p")[0].innerText = Math.round(total * roundNum) / roundNum
    }

    if (fullTotal === null) {
        tableTotals.getElementsByTagName("td")[4].getElementsByTagName("p")[0].innerText = ""
    } else {
        tableTotals.getElementsByTagName("td")[4].getElementsByTagName("p")[0].innerText = Math.round(fullTotal * roundNum) / roundNum
    }
    
    fx2Total = fullTotal

    calcMean()
    calcStandardDeviation()
}

function updateXtotal() {
    let total = 0

    for (let i = 1; i <= rowCount; i++) {
        let valueX = document.getElementById(`row_${i}`).getElementsByTagName("td")[0].getElementsByTagName("input")[0].value

        if (Number(valueX) && total != null) {
            total += Number(valueX)
        } else {
            total = null
        }
    }

    if (total === null) {
        tableTotals.getElementsByTagName("td")[0].getElementsByTagName("p")[0].innerText = ""
    } else {
        tableTotals.getElementsByTagName("td")[0].getElementsByTagName("p")[0].innerText = Math.round(total * roundNum) / roundNum
    }

    updateFX()
    updateX2()
    updateFX2()

    calcMean()
    calcStandardDeviation()
}

function updateFtotal() {
    let total = 0

    for (let i = 1; i <= rowCount; i++) {
        let valueX = document.getElementById(`row_${i}`).getElementsByTagName("td")[1].getElementsByTagName("input")[0].value

        if (Number(valueX) && total != null) {
            total += Number(valueX)
        } else {
            total = null
        }
    }

    if (total === null) {
        tableTotals.getElementsByTagName("td")[1].getElementsByTagName("p")[0].innerText = ""
    } else {
        tableTotals.getElementsByTagName("td")[1].getElementsByTagName("p")[0].innerText = Math.round(total * roundNum) / roundNum
    }

    fTotal = total

    updateFX()
    updateFX2()

    calcMean()
    calcStandardDeviation()
}

function updateAll() {
    updateXtotal()
    updateFtotal()
    updateFX()
    updateX2()
    updateFX2()

    calcMean()
    calcStandardDeviation()
}

updateAll()