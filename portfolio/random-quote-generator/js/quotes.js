//Create an array of JavaScript objects to hold the data for your quotes. Name the array quotes. The quotes array should be accessible in the global scope.

/*
Each quote object in the quotes array should have the following properties:
A quote property which contains a string: the text of the quote that will be displayed on the page.
A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
*/


var quotes = [
  {
    quote: 'I love deadlines. I love the whooshing noise they make as they go by.',
    source: 'Douglas Adams',
    citation: 'The Salmon of Doubt',
    year: 2002,
    tags: ['deadlines', ' humour', ' work', ' writing'],
  },
  {
    quote: 'There is nothing to writing. All you do is sit down at a typewriter and bleed.',
    source: 'Ernest Hemingway',
//    citation: 'Attributed',
//    year: 'Date unknown',
    tags: ['humour', ' work', ' writing'],
  },
  {
    quote: 'If there\'s a book that you want to read, but it hasn\'t been written yet, then you must write it.',
    source: 'Toni Morrison',
//    citation: 'from an unknown speech',
//    year: 'Date unknown',
    tags: ['books', ' writing'],
  },
  {
    quote: 'If you don\'t have time to read, you don\'t have the time (or the tools) to write. Simple as that.',
    source: 'Stephen King',
    citation: 'On Writing',
    year: 2001,
    tags: ['reading', ' writing'],
  },
  {
    quote: 'Substitute \'damn\' every time you\'re inclined to write \'very\'; your editor will delete it and the writing will be just as it should be.',
    source: 'Mark Twain',
//    citation: 'Attributed',
//    year: 'Date unknown',
    tags: ['humour', ' writing'],
  },
  {
    quote: 'There are books of which the backs and covers are by far the best parts.',
    source: 'Charles Dickens',
    citation: 'Oliver Twist',
    year: 1838,
    tags: ['books', ' humour', ' writing'],
  },
  {
    quote: 'The good writers touch life often. The mediocre ones run a quick hand over her. The bad ones rape her and leave her for the flies.',
    source: 'Ray Bradbury',
    citation: 'Fahrenheit 451',
    year: 1953,
    tags: ['quality', ' skill', ' writers', ' writing'],
  },
  {
    quote: 'We can destroy what we have written, but we cannot unwrite it.',
    source: 'Anthony Burgess',
    citation: 'A Clockwork Orange',
    year: 1962,
    tags: ['writing'],
  },
  {
    quote: 'Literature is strewn with the wreckage of those who have minded beyond reason the opinion of others.',
    source: 'Virginia Woolf',
    citation: 'A Room of One\'s Own',
    year: 1929,
    tags: ['literature', ' reading', ' writing'],
  },
  {
    quote: 'Write what disturbs you, what you fear, what you have not been willing to speak about. Be willing to be split open.',
    source: 'Natalie Goldberg',
    citation: 'Writing Down the Bones: Freeing the Writer Within',
    year: 1986,
    tags: [' soul', ' writing'],
  },
]