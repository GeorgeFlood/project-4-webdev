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
    year: 'unknown',
  },
  {
    quote: 'Learning never exhausts the mind',
    source: 'Leonardo Da Vinci',
    citation: 'Inventing',
    year: '1471'
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
    citation: 'Deep',
    year: '1976'
  },
  {
    quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
    source: 'Dr.Suess',
    citation: 'Imagination',
    year: 'unknown',
  }
];

/***
 * `getRandomQuote` function
 ***/
getRandomQuote = arr => randomQuote = arr[Math.floor(Math.random() * arr.length)];


/***
 * `printQuote` function
 ***/


let printQuote = () => {
  let a = getRandomQuote(quotes);
  let html;
  if (a.citation === 'unknown') {
    html = `
    <p class='quote'>${a.quote}</p>
    <p class='source'>${a.source}
    <span class='citation'></span>
    <span class='year'>${a.year}</span></p>
    `
  } else if (a.year === 'unknown') {
    html = `
    <p class='quote'>${a.quote}</p>
  <p class='source'>${a.source}
  <span class='citation'>${a.citation}</span>
  <span class='year'></span></p>
    `
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