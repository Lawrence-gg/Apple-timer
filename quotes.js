let quotes = {
  chooseQuote: chooseQuote,
};

let quoteObj = {
  q1: {
    quote:
      'It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.',
    author: 'Madeleine Albright',
  },
  q2: {
    quote:
      'Education is the most powerful weapon which you can use to change the world.',
    author: 'Nelson Mandela',
  },
  q3: {
    quote:
      'Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.',
    author: 'Augustine Og Mandino',
  },
  q4: {
    quote:
      "The elevator to success is out of order. You'll have to use the stairs, one step at a time.",
    author: 'Joe Girard',
  },
  q5: {
    quote: 'People say nothing is impossible, but I do nothing every day.',
    author: 'Winnie the Pooh',
  },
  q6: {
    quote:
      'Just one small positive thought in the morning can change your whole day.',
    author: 'Dalai Lama',
  },
  q7: {
    quote: 'Be messy and complicated and afraid and show up anyways.',
    author: 'Glennon Doyle Melton',
  },
  q8: {
    quote: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  q9: {
    quote:
      'Always remember that you are absolutely unique. Just like everyone else.',
    author: 'Margaret Mead',
  },
  q10: {
    quote:
      'Tell me and I forget. Teach me and I remember. Involve me and I learn',
    author: 'Benjamin Franklin',
  },
  q11: {
    quote: 'Never let the fear of striking out keep you from playing the game',
    author: 'Babe Ruth',
  },
  q12: {
    quote:
      'You have brains in your head. You have feet in your shoes. You can steer yourself in any direction you choose',
    author: 'Dr.Seuss',
  },
  q13: {
    quote:
      'If life were predictable it would cease to be life and be without flavor.',
    author: 'Eleanor Roosevelt',
  },
  q14: {
    quote:
      'In this life we cannot do great things. We can only do small things with great love',
    author: 'Mother Teresa',
  },
  q15: {
    quote:
      "Go confidently in the direction of your dreams! Live the life you've imagined.",
    author: 'Henry David Thoreau',
  },
  q16: {
    quote:
      'Success usually comes to those who are too busy to be looking for it.',
    author: 'Henry David Thoreau',
  },
  q17: {
    quote:
      'If you look really closely, most overnight successes took a long time.',
    author: 'Steve Jobs',
  },
  q18: {
    quote: 'A smile will gain you ten more years in life.',
    author: 'Chinese Proverb',
  },
  q19: {
    quote:
      'He who asks is a fool for five minutes, but he who does not ask remains a fool forever.',
    author: 'Chinese Proverb',
  },
  q20: {
    quote: 'Patience is a bitter plant, but its fruit is sweet.',
    author: 'Chinese Proverb',
  },
};

function chooseQuote(obj) {
  let quoteText = document.querySelector('.quote-text');
  let key = Object.keys(obj);
  let chosenQuote = obj[key[(key.length * Math.random()) >> 0]];
  let author = obj[key[(key.length * Math.random()) >> 0]].author;
  return (quoteText.textContent = `${chosenQuote.quote} - ${chosenQuote.author}`);
}
