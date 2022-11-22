const { Schema, model } = require('mongoose');

// Schema to create User model

const userSchema = new Schema(
    {
        // username: string, unique, required, trimmed
        username: { type: String, required: true, unique: true, trim: true },
        // email: string, unique, required, must match valid email address
        email: { type: String, required: true, unique: true, match: /^([A-Za-z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([A-Za-z\.]{2,6})$/},
        // thoughts: array of _id values referencing the Thought model
        thoughts: [{type: Schema.Types.ObjectId, ref: 'thought'}],
        // friends: array of _id values referencing the User model
        friends: [{type: Schema.Types.ObjectId, ref: 'user'}],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual property friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// initialize User model
const User = model('user', userSchema);

module.exports = User;

