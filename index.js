// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl`);
        
    }

    return gifts;
}

wrapGifts(gifts);

const cards = ["Guadalupe", "Ollie", "Aki"]

function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful suprise gift`);
        debugger;
    }
    return cards;
}

writeCards(cards);

writeCards(cards);