const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //getter method to format date
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        //array of nested documents created with the reactionSchema
    }
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = thoughtSchema;