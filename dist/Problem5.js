"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getWeatherAdvice = (weather) => {
    if (weather === "sunny") {
        return "Wear sunscreen";
    }
    else if (weather === "rainy") {
        return "Carry an umbrella";
    }
    return "Bring a light jacket";
};
console.log(getWeatherAdvice("sunny"));
console.log(getWeatherAdvice("rainy"));
console.log(getWeatherAdvice("cloudy"));
//# sourceMappingURL=Problem5.js.map