export function getTotalPrice(products) {
    let totalPrice = 0
    products.forEach(p => {
        totalPrice += p.quantity * p.price
    });

    return totalPrice.toFixed(2)
}