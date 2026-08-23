type Employees ={
    name:string
    onDuty:boolean
}
const findOnDutyEmployees=(employees:Employees[]):Employees[]=>{
    const onDuty:Employees[] =employees.filter((emple:Employees)=>emple.onDuty === true)
    return onDuty
}
console.log(findOnDutyEmployees([{name:"Lima",onDuty:true},{name:"Karim",onDuty:false},
    {name:"Nadim",onDuty:true},{name:"Naim",onDuty:false},{name:"Shima",onDuty:true},{name:"Halima",onDuty:false}]
))
console.log(findOnDutyEmployees([{name:"Nusrat",onDuty:false}]))