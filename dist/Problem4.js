"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateOrderTotal = (items) => {
    const orderTotal = items.reduce((accu, newNum) => accu + newNum.price, 0);
    return orderTotal;
};
console.log(calculateOrderTotal([{ name: "Burger", price: 250 }, { name: "Fries", price: 90 }, { name: "Soda", price: 60 }]));
console.log(calculateOrderTotal([]));
console.log(calculateOrderTotal([{ name: "Pizza", price: 500 }]));
//# sourceMappingURL=Problem4.js.map