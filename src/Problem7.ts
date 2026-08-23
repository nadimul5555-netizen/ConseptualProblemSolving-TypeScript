interface Distance {total:number,average:number}
const getDistanceSummary=(distances:number[]):Distance=>{
    const distancesTotal:number = distances.reduce((accu:number,newNum:number)=>accu+newNum,0)
    let average:number =0;
    // if(distances.length === 0){
    //      average
    // }
    //  else{
    //      average=(distancesTotal/distances.length)
    //  }
    return {
        total:distancesTotal,
        average:isNaN(average)? 0 : average
    }
}
console.log(getDistanceSummary([4, 6, 5, 9]))
console.log(getDistanceSummary([10, 10]))
console.log(getDistanceSummary([]))

