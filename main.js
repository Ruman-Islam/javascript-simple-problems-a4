// ana to vori converter
function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'Please enter any number';
    }
    const perVori = 16;
    return ana / perVori;
}
const totalVori = anaToVori(65);




// panda calculator
function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity) {
    if (typeof singaraQuantity !== 'number' || typeof samuchaQuantity !== 'number' || typeof jilapiQuantity !== 'number') {
        return 'Please enter any three numbers';
    }
    return (7 * singaraQuantity) + (10 * samuchaQuantity) + (15 * jilapiQuantity);
}
const totalFoodCost = pandaCost(1, 2, 1);




// budget calculator
function picnicBudget(person) {
    if (typeof person !== 'number') {
        return 'Please enter only numbers';
    }
    if (person <= 100) {
        return person * 5000;
    } else if (person <= 200) {
        const additionalPerson = person - 100;
        const discountCost = additionalPerson * 4000;
        return discountCost + 500000;
    } else {
        const additionalPerson = person - 200;
        const discountCost = additionalPerson * 3000;
        return discountCost + 900000;
    }
}
const totalBudget = picnicBudget(201);




// odd friend name
function oddFriend(names) {
    if (names.length < 2) {
        return 'Enter at least two names';
    } else {
        for (const name of names) {
            if (typeof name == 'number') {
                return 'Enter only characters';
            }
            if (name.length % 2 !== 0) {
                return name;
            }
        }
    }
}
const oddFriendName = oddFriend(['suvo', 'mili', 'bili', 'chili', 'lili']);