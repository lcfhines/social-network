const { Schema, Types } = require('mongoose');
const { ObjectId } = require('mongoose').Types;
const moment = require('moment');

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

const reactionSchema = new Schema(
    {
        // reactionId: use ObjectId, default set to a new ObjectId
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId(),
        },
        // reactionBody: string, required, 280 char max
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        // username: string, required
        username: {
            type: String,
            required: true
        },
        // createdAt: date, default - current timestamp, use getter to format the timestamp on a query
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdDate) => moment(createdDate).format('MM/DD/YY [at] hh:mm:a')
        }
    }
);

module.exports = reactionSchema;

