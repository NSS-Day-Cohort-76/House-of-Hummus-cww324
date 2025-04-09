export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sideDish = await response.json()

    let sideHTML = "<h2>Sides</h2>"
    sideHTML += `<div class="choices__sides">`  // Cypress Test Integration changed from id to class

    const sideMap = sideDish.map((food) => {
        return `<div>
            <input type='radio' name='sideDish' value='${food.id}' />
            ${food.title}
        </div>`
    })

    sideHTML += sideMap.join("")
    sideHTML += "</div>"
    return sideHTML
}
