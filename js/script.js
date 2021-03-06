/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community

/*** 
 * `quotes` array 
 ***/



let quotes = [{
    quote: 'I have no special talent. I am only passionately curious.',
    source: 'Albert Einstein',
    citation: 'Science!',
  },
  {
    quote: 'Learning never exhausts the mind',
    source: 'Leonardo Da Vinci',
    citation: 'Inventing',
  },
  {
    quote: `Don't let yesterday take up too much of today`,
    source: 'Will Rogers',
    citation: 'Philosophy',
    year: '1930'
  },
  {
    quote: 'Be yourself, everyone else is taken',
    source: 'Oscar Wilde',
    year: '1976'
  },
  {
    quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
    source: 'Dr.Suess',
    citation: 'Imagination',
  },
  {
    quote: `If you fulfill your obligations everyday, you don't need to worry about the future`,
    source: 'Jordan Peterson',
    citation: 'Psychology',
  },

];

/***
 * `getRandomQuote` function
 ***/

// cycles through my array by random and picks an object.
getRandomQuote = arr => randomQuote = arr[Math.floor(Math.random() * arr.length)];


/***
 * `printQuote` function
 ***/

//  conditions so a key doesn't have an empty value --
// inner-HTML manipulating the quote-box by the value of getRandomQuote.
let printQuote = arr => {
  let a = getRandomQuote(quotes);
  let html;
  if (!a.citation) {
    html = `
    <p class='quote'>${a.quote}</p>
    <p class='source'>${a.source}
    <span class='year'>${a.year}</span></p>
    `;
  } else if (!a.year) {
    html = `
    <p class='quote'>${a.quote}</p>
  <p class='source'>${a.source}
  <span class='citation'>${a.citation}</span>
    `;
  } else {
    html = `
  <p class='quote'>${a.quote}</p>
  <p class='source'>${a.source}
  <span class='citation'>${a.citation}</span>
  <span class='year'>${a.year}</span></p>
  `
  }
  document.getElementById('quote-box').innerHTML = html;
  return html;
}

// function so the background style changes each click by random.
random_bg_color = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", () => {
  random_bg_color();
  printQuote();
});