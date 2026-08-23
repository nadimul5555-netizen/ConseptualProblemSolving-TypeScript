const calculateWeeklySteps=(steps:number[]):number=>{

  const totalSteps =steps.reduce((accu:number,newValue:number)=> accu+newValue ,0)
  return totalSteps
}
console.log(calculateWeeklySteps([3000, 5200, 4100]))
console.log(calculateWeeklySteps([3000, 5200, 4100,3000, 5200, 4100]))
console.log(calculateWeeklySteps([]))