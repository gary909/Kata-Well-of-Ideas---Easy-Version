function well(x){
    let goodIdea = 0;
    let badIdea = 0;
    for (let i = 0; i < x.length; i++){
        if (x[i] == 'good'){
            goodIdea = goodIdea + 1;
        } else {
            badIdea = badIdea + 1;
        }
    }
    if (goodIdea > 2) {
        return "I smell a series!"
    } else if (goodIdea >= 1) {
        return "Publish!"
    } else {
        return "Fail!"
    }
}

console.log(well(['bad', 'bad', 'bad'])); // 'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); // 'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); // 'I smell a series!'