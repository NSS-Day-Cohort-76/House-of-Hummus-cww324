import { FoodTruck } from "./FoodTruck.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { Entrees } from "./Entrees.js"
import { Orders } from "./Orders.js"
import "./EventListeners.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    const veggiesHTML = await Veggies()
    const sidesHTML = await Sides()
    const entreesHTML = await Entrees()
    const ordersHTML = await Orders()

    const composedHTML = `
    <h1>Charlie's House of Jamón</h1>
    <article class="choices">
        <section class="choice-box">
            <h2>Base Dish</h2>
            ${entreesHTML}
        </section>

        <section class="choice-box">
            <h2>Vegetable</h2> 
            ${veggiesHTML}
        </section>
        
        <section class="choice-box">
            <h2>Sides</h2>
            ${sidesHTML}
        </section>
    </article>
    
    <article class="customerOrders">
        <button id="purchase">Purchase Combo</button>
        ${ordersHTML}
    </article>
`   


    mainContainer.innerHTML = composedHTML
    //mainContainer.innerHTML = FoodTruck()


}

renderAllHTML()

document.addEventListener("orderSubmitted", async () => {

    console.log("congrats we are working on your order")
    await renderAllHTML()
})
