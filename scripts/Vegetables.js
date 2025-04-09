export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const veggieDish = await response.json()

    let veggieHTML = "<h2>Veggies</h2>"
    veggieHTML += `<div class="choices__veggies">`  // changed from id to class for Cypress Testing

    const veggieMap = veggieDish.map((food) => {
        return `<div>
            <input type='radio' name='vegetable' value='${food.id}' />
            ${food.type}
        </div>`
    })

    veggieHTML += veggieMap.join("")
    veggieHTML += "</div>"
    return veggieHTML
}
