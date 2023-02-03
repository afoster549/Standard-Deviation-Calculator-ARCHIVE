function addRow() {
    rowCount += 1

    const row = document.createElement("tr")
    row.id = `row_${rowCount}`

    const x = document.createElement("td")
    x.id = "x"
    const f = document.createElement("td")
    f.id = "f"
    const fx = document.createElement("td")
    fx.id = "fx"
    const x2 = document.createElement("td")
    x2.id = "x2"
    const fx2 = document.createElement("td")
    fx2.id = "fx2"

    const inputX = document.createElement("input")
    const inputF = document.createElement("input")

    inputX.addEventListener("input", () => {
        updateXtotal()
    })
    inputF.addEventListener("input", () => {
        updateFtotal()
    })

    const p = document.createElement("p")

    x.appendChild(inputX)
    f.appendChild(inputF)
    fx.appendChild(p.cloneNode())
    x2.appendChild(p.cloneNode())
    fx2.appendChild(p)

    row.appendChild(x)
    row.appendChild(f)
    row.appendChild(fx)
    row.appendChild(x2)
    row.appendChild(fx2)

    document.getElementById("totals").parentNode.insertBefore(row, document.getElementById("totals"))
}

function deleteRow() {
    if (rowCount > 2) {
        rowCount -= 1

        document.getElementById(`row_${rowCount + 1}`).remove()
    }
}