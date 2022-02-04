
function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'Please enter any number';
    }
    const perVori = 16;
    const totalVori = ana / perVori;
    return totalVori;
}
const totalVori = anaToVori(10);




function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity) {
    if (typeof singaraQuantity !== 'number' || typeof samuchaQuantity !== 'number' || typeof jilapiQuantity !== 'number') {
        return 'Please enter any three numbers';
    }
    const perSingaraPrice = 7;
    const perSamuchaPrice = 10;
    const perJilapiPrice = 15;
    const totalPrice = (perSingaraPrice * singaraQuantity) + (perSamuchaPrice * samuchaQuantity) + (perJilapiPrice * jilapiQuantity);
    return totalPrice;
}
const totalFoodCost = pandaCost();




function picnicBudget(person) {
    if (typeof person != 'number') {
        return 'Please enter only numbers';
    }
    if (person <= 100) {
        const totalCost = person * 5000;
        return totalCost;
    } else if (person <= 200) {
        const additionalPerson = person - 100;
        const discountCost = additionalPerson * 4000;
        const totalCost = discountCost + 500000;
        return totalCost;
    } else {
        const additionalPerson = person - 200;
        const discountCost = additionalPerson * 3000;
        const totalCost = discountCost + 900000;
        return totalCost;
    }
}
const totalBudget = picnicBudget();




const arr = ['suvo', 'mili', 'kodu', 'modhu', 'lili', 'bili'];
function oddFriend(names) {
    for (const name of names) {
        if (name.length % 2 != 0) {
            return name;
        }
    }
}
const oddFriendName = oddFriend(arr);
// console.log(oddFriendName);



