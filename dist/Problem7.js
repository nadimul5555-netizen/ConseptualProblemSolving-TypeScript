"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDistanceSummary = (distances) => {
    const distancesTotal = distances.reduce((accu, newNum) => accu + newNum, 0);
    let average = 0;
    // if(distances.length === 0){
    //      average
    // }
    //  else{
    //      average=(distancesTotal/distances.length)
    //  }
    return {
        total: distancesTotal,
        average: isNaN(average) ? 0 : average
    };
};
console.log(getDistanceSummary([4, 6, 5, 9]));
console.log(getDistanceSummary([10, 10]));
console.log(getDistanceSummary([]));
//# sourceMappingURL=Problem7.js.map