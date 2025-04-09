export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entree = await response.json()

    let entreeHTML = "<h2>Base Dish</h2>"
    entreeHTML += `<div class="choices__base">`  // changed from id to class to pass cypress tests

    const entreeMap = entree.map((food) => {
        return `<div>
            <input type='radio' name='entree' value='${food.id}' />
            ${food.name}
        </div>`
    })

    entreeHTML += entreeMap.join("")
    entreeHTML += "</div>"
    return entreeHTML
}