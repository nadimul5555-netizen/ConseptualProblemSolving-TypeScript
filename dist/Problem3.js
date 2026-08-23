"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateWeeklySteps = (steps) => {
    const totalSteps = steps.reduce((accu, newValue) => accu + newValue, 0);
    return totalSteps;
};
console.log(calculateWeeklySteps([3000, 5200, 4100]));
console.log(calculateWeeklySteps([3000, 5200, 4100, 3000, 5200, 4100]));
console.log(calculateWeeklySteps([]));
//# sourceMappingURL=Problem3.js.map