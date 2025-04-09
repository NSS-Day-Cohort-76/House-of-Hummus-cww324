export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/orders").then(res => res.json())

    let salesDivs = sales.map(order => {
        return `<div>Order #${order.id} - $${order.entreeId + order.vegetableId + order.sideID}</div>`
    })

    salesDivs = salesDivs.join("")

    return salesDivs
}

