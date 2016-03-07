'use strict';

var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
}];

var numberOfQuotes = quotes.length;
var rdm = Math.floor(Math.random() * numberOfQuotes);

var getRandomQuote = function getRandomQuote () { 
  ReactDOM.render(
  React.createElement('h6',null,quotes[rdm].quote),
  document.getElementById('getRandomQuote')
 );
};

var getAuthor = function getAuthor () {
  ReactDOM.render(
  React.createElement('h6',null,quotes[rdm].author),
  document.getElementById('getAuthor')
 );
}; 

function quoteYoda () {
  var rdmYoda = Math.floor(Math.random() * 4);

  if (rdmYoda == 0)
  {
    var quoteFromCharacterChosen = quotes[0].quote;
  }
  if (rdmYoda == 1)
  {
    var quoteFromCharacterChosen = quotes[5].quote;
  }
  if (rdmYoda == 2)
  {
    var quoteFromCharacterChosen = quotes[7].quote;
  }
  if (rdmYoda == 3)
  {
    var quoteFromCharacterChosen = quotes[9].quote;
  }
  
  document.getElementById("showMeQuoteFromCharacterChosen").innerHTML = quoteFromCharacterChosen;
};

function quoteSenatorPalpatine () {
  var quoteFromCharacterChosen = quotes[1].quote;
  document.getElementById("showMeQuoteFromCharacterChosen").innerHTML = quoteFromCharacterChosen;
};

function quoteCountDooku() {
  var quoteFromCharacterChosen = quotes[2].quote;
  document.getElementById("showMeQuoteFromCharacterChosen").innerHTML = quoteFromCharacterChosen;
};

function quoteDarthVader () {
  var rdmDarthVader = Math.floor(Math.random() * 2);

  if (rdmDarthVader == 0)
  {
    var quoteFromCharacterChosen = quotes[3].quote;
  }
  if (rdmDarthVader == 1)
  {
    var quoteFromCharacterChosen = quotes[10].quote;
  }
  document.getElementById("showMeQuoteFromCharacterChosen").innerHTML = quoteFromCharacterChosen;
};

function quotePrincessLeila () {
  var quoteFromCharacterChosen = quotes[4].quote;
  document.getElementById("showMeQuoteFromCharacterChosen").innerHTML = quoteFromCharacterChosen;
};

function quoteQuiGonJinn () {
  var quoteFromCharacterChosen = quotes[6].quote;
  document.getElementById("showMeQuoteFromCharacterChosen").innerHTML = quoteFromCharacterChosen;
};

function quoteObiWanKenobi () {
  var quoteFromCharacterChosen = quotes[8].quote;
  document.getElementById("showMeQuoteFromCharacterChosen").innerHTML = quoteFromCharacterChosen;
};