const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        // thoughtText: string, required, must be between 1 and 280 characters
        thoughtText: { 
            type: String, required: true, 
            minLength: 1, 
            maxLength: 280 
        },
        // createdAt: date, default - current timestamp, use getter to format the timestamp on a query
        createdAt: {
            type: Date,
            default: Date.now
        },
        // username: user that created the thought, string, required
        username: { 
            type: String, 
            required: true
        },
        // reactions: array of nested documents created with the reactionSchema
        reactions: [Reaction],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// initialize the Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;