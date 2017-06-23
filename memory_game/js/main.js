console.log("Up and running!")
console.log("User flipped queen")
console.log("User flipped king") 

var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-hearts.png'
	}
	];

var cardsInPlay = [];


var checkForMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!!");
	} else {
		alert("Sorry, try again!!");
	}
};

var cardID = cards [0,1,2,3]


var flipCard = function (cardID) {
	var cardID = this.getAttribute('data-id')
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) checkForMatch();
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch();
};


var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement ('img');
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', i);
	var gameBoard = document.getElementById("game-board").innerHTML;
	document.getElementByID('game-board').appendChild(cardElement);
	cardElement.addEventListener('click', flipCard);	
}
};

createBoard();