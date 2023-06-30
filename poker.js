//initiates values for the flushes and allows prompt to function
const cards = ['2s', '2h', '2c', '2d', '3s', '4s', '5s', '6s', '7s', '3C', '4C', '5C', '6C', '7C', '3h', '4h', '5h', '6h', '7h', '3d', '4d', '5d', '6d', '7d', '8s', '8C', '8h', '8d', '9s', '9C', '9h', '9d', '10s', '10C','10h','10d','Js','JC','Jh','Jd', 'Qs','QC','Qh','Qd', 'Ks','KC','Kh','Kd','As','AC','Ah','Ad'];
var prompt = require('prompt');
var prompt = require("prompt-sync")();
//initialize sample player hand
let playerHand = 'Qs Js'
let communityHand = '10s Ks 7h'
isFlushPossible()
//write a function that asks if a flush is possible.
function isFlushPossible() {
    let clubs = [];
    let diamonds = []
    let hearts = []
    let spades = []

    let allCards = playerHand + communityHand

    for (i = 0; i < allCards.length; i++) { //initialize i, check conditional, add i so the loop ends
        if (allCards[i] == 'c') { //checks how many cards are a club
            clubs.push(allCards.slice(i, i + 1)) //pushes value from slice to clubs value, i is used to move through the index of  clubs
        } else if (allCards[i] == 's') {
            spades.push(allCards.slice(i, i + 1))
        } else if (allCards[i] == 'd') {
            diamonds.push(allCards.slice(i, i + 1))
        } else if (allCards[i] == 'h') {
            hearts.push(allCards.slice(i, i + 1))
        }
    }
    if (clubs.length > 4 || diamonds.length > 4 || hearts.length > 4 || spades.length > 4) { //checks to see if a flush is possible, as if you have more than 4 of a suit it has to be a flush.
        console.log('You can make a flush!')
    } else {
        console.log('You cannot make a flush.')
    } 
    for (i = 0; i < allCards.length; i++) {
        if (allCards[i] == ) {
            
        }
    }
}