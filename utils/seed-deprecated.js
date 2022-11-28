const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const {
    getRandomUserName,
    getRandomReactions,
    getRandomThought,
    genRandomIndex,
} = require('./data-deprecated');

console.time('seeding');

connection.once('open', async () => {
    await User.deleteMany({});
    // await Thought.deleteMany({});
    // await Reaction.deleteMany({});


const reactions = [...getRandomReactions(2)];
// const reactions = [];
const users = [];
const thoughts = [];

for (let i = 0; i < 10; i++) {
    const username = getRandomUserName();
    const email = `${getRandomUserName()}@gmail.com`

    users.push({
        username,
        email, 
    });
}


const makeThought = (thoughtText) => {
    thoughts.push({
        thoughtText,
        createdAt: 11/23/2022,
        reactions: [reactions[genRandomIndex(reactions)]._id],
        username: getRandomUserName(),
    })
};

await User.collection.insertMany(users);

await Reaction.collection.insertMany(reactions);

reactions.forEach(() => makeThought(getRandomThought(10)));

await Thought.collection.insertMany(thoughts);


console.table(users);
console.table(thoughts);
console.table(reactions);
process.exit(0);
});