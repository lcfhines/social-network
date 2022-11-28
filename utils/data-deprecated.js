const usernames = [
    'lcfhines',
    'shaquilleoatmeal',
    'averagestudent',
    'anonymouse',
    'fluffycookie',
    'nachocheesefries',
    'orchestrasilver',
    'ownerhills',
    'wriststatistics',
    'uncletofu',
    'mincedestablish',
    'shadowgucci',
    'systemkoko',
    'graduatetrafalgar',
    'extensivepolenta',
    'specialistlime',
    'trufflefiggy',
    'bellcool',
    'doppingsoulful',
    'brashrescue',
    'employmentpodzol',
    'barrelshameless',
    'conferenceworrisome',
    'collardsdelight',
    'boguspsychology',
    'richesseshoemaker',
  ];
  
  const reactions = [
    'Decision Trackers are awesome',
    'Find My Phone is a useful app',
    'Learn Piano is not very good for learning Piano',
    'Starbase Defender is a great game, I love it',
    'Tower Defense is okay',
    'Monopoly Money is better than real money IMO',
    'Movie trailers are just the best parts of a movie distilled into 90 seconds',
    'Hello world, this is a comment',
    'Social media is a big waste of time',
    'Notes is my most used app',
    'Messages is open on my computer 24/7',
    'Email is open on my computer',
    'Compass is never opened',
    'Firefox is great for privacy',
  ];
  
  const lorum = [
    'lorem',
    'imsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'curabitur',
    'vel',
    'hendrerit',
    'libero',
    'eleifend',
    'blandit',
    'nunc',
    'ornare',
    'odio',
    'ut',
    'orci',
    'gravida',
    'imperdiet',
    'nullam',
    'purus',
    'lacinia',
    'a',
    'pretium',
    'quis',
  ];
  
  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  
  const getRandomWord = () => `${lorum[genRandomIndex(lorum)]}`;
  
  const getRandomThought = (words) => {
    let thought = '';
    for (let i = 0; i < words; i++) {
      thought += ` ${getRandomWord()}`;
    }
    return thought;
  };
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random username
  const getRandomUserName = () =>
    `${getRandomArrItem(usernames)}`;
  
  // Function to generate random reactions given a number (ex. 10 reactions === getRandomReactions(10))
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        text: getRandomArrItem(reactions),
        username: getRandomUserName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = {
    getRandomUserName,
    getRandomReactions,
    getRandomThought,
    genRandomIndex,
  };
  