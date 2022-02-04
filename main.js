
function anaToVori(ana) {
    const perVori = 16;
    const totalVori = ana / perVori;
    return totalVori;
}
const totalVori = anaToVori(64);




function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity) {
    let perSingaraPrice = 7;
    let perSamuchaPrice = 10;
    let perJilapiPrice = 15;
    let totalPrice = (perSingaraPrice * singaraQuantity) + (perSamuchaPrice * samuchaQuantity) + (perJilapiPrice * jilapiQuantity);
    return totalPrice;
}
const totalFoodCost = pandaCost();



function picnicBudget(person) {
    if (person <= 100) {
        let totalCost = person * 5000;
        return totalCost;
    } else if (person <= 200) {
        let additionalPerson = person - 100;
        let discountCost = additionalPerson * 4000;
        let totalCost = discountCost + 500000;
        return totalCost;
    } else {
        let additionalPerson = person - 200;
        let discountCost = additionalPerson * 3000;
        let totalCost = discountCost + 900000;
        return totalCost;
    }
}
const totalBudget = picnicBudget();



// 4. 
