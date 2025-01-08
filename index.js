const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
    const cards =[];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return cards;
}

writeCards(names[i]);


let number = 10;
function countDown(number){
    let i = number;
    while (i > -1) {
        console.log(i);
        i--;
    }
    return number;
}
countDown(number);