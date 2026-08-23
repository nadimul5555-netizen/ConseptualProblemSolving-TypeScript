interface Items {
    name:string
    price:number
}

const calculateOrderTotal=(items:Items[]):number=>{
    const orderTotal:number = items.reduce((accu:number,newNum:Items)=> accu +newNum.price,0)
    return orderTotal
}
console.log(calculateOrderTotal([{name:"Burger",price:250},{name:"Fries",price:90},{name:"Soda",price:60}]))
console.log(calculateOrderTotal([]))
console.log(calculateOrderTotal([{name:"Pizza",price:500}]))