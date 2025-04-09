import { getTransientState, resetTransientState } from "./TransientState.js"

export const placeOrder = async () => {
    const transientState = getTransientState()
    if (
        transientState.entreeId && transientState.sideId && transientState.vegetableId
    ) {

    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(transientState)
    }

const response = await fetch("http://localhost:8088/purchases", postOptions)

resetTransientState()


const customEvent = new CustomEvent("orderSubmitted")
document.dispatchEvent(customEvent)
    } else {
        window.alert("🚨 You must select 1 Base Dish, 1 Vegetable, and 1 Side. take your custom orders to McDowell's"
        )
    }
}

export const Orders = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")

    const orders = await response.json()

    let ordersHTML = "<ul>"
    ordersHTML += orders.map(order => {
        const totalCost = order.entree.price + order.vegetable.price + order.side.price
        return `<li>Receipt #${order.id} and cost $${totalCost.toFixed(2)}</li>`
    }).join("")
    


    ordersHTML += "</ul>"
    return ordersHTML
}

