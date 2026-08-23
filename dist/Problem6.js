"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findOnDutyEmployees = (employees) => {
    const onDuty = employees.filter((emple) => emple.onDuty === true);
    return onDuty;
};
console.log(findOnDutyEmployees([{ name: "Lima", onDuty: true }, { name: "Karim", onDuty: false },
    { name: "Nadim", onDuty: true }, { name: "Naim", onDuty: false }, { name: "Shima", onDuty: true }, { name: "Halima", onDuty: false }]));
console.log(findOnDutyEmployees([{ name: "Nusrat", onDuty: false }]));
//# sourceMappingURL=Problem6.js.map