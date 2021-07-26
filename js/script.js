/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



//Quotes array 

let quotes = [{

  quote: "And, when you want something, all the universe conspires in helping you to achieve it.",
  source: "Paulo Coelho, The Alchemist"


  },
  {

  quote: "Stay hungry, stay foolish.",
  source: "Steve Jobs"

  },
  {
  
  quote: "Genius is 1% inspiration, 99% perspiration.",
  source: "Thomas Edison"

  },
  {

  quote: "Creativity is intelligence having fun.",
  source: "Albert Einstein"

  },
  {

  quote: "Courage is being scared to death... and saddling up anyway.",
  source: "John Wayne"

  },
  {

  quote: "Fall seven times and stand up eight.",
  source: "Japanese Proverb",
  tags: "Philosophy"

  },
  {

  quote: "A hungry stomach, an empty wallet and a broken heart can teach you the best lessons of life.",
  source: "Robin Williams",

  },
  {

  quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  source: "Mahatma Gandhi",
  tags: "Philosophy"

  },
  {

  quote: "All our dreams can come true, if we have the courage to pursue them.",
  source: "Walt Disney"

  },
  {
  
    quote: "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.",
  source: "Carl Sagan"

  },
  {

  quote: "I was born to make mistakes, not to fake perfection.",
  source: "Drake"
  
  },
  {

  quote: "Take the first step in faith. You don't have to see the whole staircase, just take the first step.",
  source: "Martin Luther King, Jr."

  },
  {
  
  quote: "Don't be afraid to give up the good to go for the great.",
  source: "John D. Rockefeller"

  },
  {
  quote: "My mother said to me, 'If you are a soldier, you will become a general. If you are a monk, you will become the Pope.' Instead, I was a painter, and became Picasso.",
  source: "Pablo Picaso"

  },
  {
    
  quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
  source: "Albert Einstein"
  
  },
  {
  
  quote: "I am not the richest, smartest or most talented person in the world, but I succeed because I keep going and going and going.",
  source: "Sylvester Stallone"
  
  },
  {
  
  quote: "You have to remember something: Everybody pities the weak; jealousy you have to earn.",
  source: "Arnold Schwarzenegger"
  
  },
  {
  
  quote: "I can accept failure, everyone fails at something. But I can't accept not trying.",
  source: "Michael Jordan"
  
  },
  {
  
  quote: "I don't stop when I'm tired, I stop when I'm done.",
  source: "David Goggins"
  
  },
  {
  
  quote: "Your time is limited, so don't waste it living someone else's life.",
  source: "Steve Jobs",
  citation: "Interview",
  year: "2005"
  
  },
  {
  
  quote: "When something is important enough, you do it even if the odds are not in your favor.",
  source: "Elon Musk",
  citation: "Interview",
  year: "2012"
  
  },
  {

  quote: "A disciplined mind brings happiness.",
  source: "Buddha",
  tags: "Philosophy"
  
  },
  {

  quote: "In the middle of chaos lies opportunity.",
  source: "Bruce Lee",
  citation: "Martial Arts Magazine",
  year: "1970"

  },
  ];



//getRandomQuote Function - Produces random quote from array


function getRandomQuote() {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  getRandomColor(); //inserted to change background color when random quote changes
  return quote;
}





//printQuote Function - Prints quote to browswer 



function printQuote() {
  
  let quote1 = getRandomQuote(); //Created variable to store random object from GetRandomQuote function 
   
  let sumHtml = ` 
  <p class="quote">${quote1.quote}</p>
  <p class="source"> ${quote1.source}
  ` //closed source with ` 
  
  if (quote1.citation) {
    sumHtml += `<span class=  "citation" >${quote1.citation}</span >` // added (+=) citation to original string 
      
  }

  if (quote1.year) {
    sumHtml += `<span class="year">${quote1.year}</span>` 
    
  }

  if (quote1.tags) {
  
    sumHtml += `<span class="year">${quote1.tags}</span>`
  
  }

  sumHtml += `</p>`
  


  document.getElementById('quote-box').innerHTML = sumHtml; /*returns string to browswer*/
  

  }




 
 // setInterval Function - Automatically changes quote every 10 seconds



setInterval(() => {
printQuote();

}, 10000);


 


 // getRandomColor function - (produces random RGB and changes background when new quote appears)


function getRandomColor() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  ranColor = rgb;
  document.body.style.backgroundColor = rgb; 
}







/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote,  false);
