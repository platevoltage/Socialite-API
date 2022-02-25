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
        get: format
        //getter method to format date
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        type: Array
        //array of nested documents created with the reactionSchema
    }
},{ 
    toJSON: { 
        getters: true,
        virtuals: true 
    },
    id: false
});

thoughtSchema.virtual('reaction count').get(function () {
      return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);
function format(date) {
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
}

module.exports = Thought;
