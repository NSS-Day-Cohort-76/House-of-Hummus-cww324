import { placeOrder } from "./Orders.js";
import { setEntree, setSide, setVegetable } from "./TransientState.js";


const handleUserChoices = (changeEvent) => {
    const chosenOption = parseInt(changeEvent.target.value)
    const targetId = changeEvent.target.name
    
    if (targetId === "entree") {
        setEntree(chosenOption)

    } else if (targetId === "sideDish") {
        setSide(chosenOption)
    } else if (targetId === "vegetable") {
        setVegetable(chosenOption)
    }
}

document.addEventListener("change", handleUserChoices)

document.addEventListener('click', async (event) => {
    if (event.target.id === "placeOrder") {
        await placeOrder()
    }
})