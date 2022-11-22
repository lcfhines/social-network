
// thoughtText
    // string, required, must be between 1 and 280 characters

// createdAt
    // date, set default value to current timestamp, use a getter to format the timestamp on a query

// username (user that created the thought)
    // string, required

// reactions (these are like replies)
    // array of nested documents created with the reactionSchema

// Schema settings
    // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

// reaction
    // reactionId
        // use mongoose's ObjectId data type
        // default value is set to a new ObjectId
    // reactionBody
        // string, required, 280 char max
    // username
        // string, required
    // createdAt
        // date, set default to current timestamp, use a getter method to format the timestamp on query

    // This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

