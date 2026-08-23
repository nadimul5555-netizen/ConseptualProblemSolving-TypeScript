const getSignalStatus=(percentage:number):string=> {
  if(percentage >= 0 && percentage <=25 ){
    return "Poor"
  }else if(percentage >=26 && percentage<=55 ){
    return "Fair"
  }else if(percentage >=56 && percentage<=85){
    return "Good"
  }else if(percentage >=86 && percentage<=100){
    return "Excellent"
  }
  return "Percentage is Invaid"

}
console.log(getSignalStatus(15))
console.log(getSignalStatus(40))
console.log(getSignalStatus(70))
console.log(getSignalStatus(110))