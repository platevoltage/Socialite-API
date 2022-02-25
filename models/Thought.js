const mongoose = require('mongoose');
const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId

    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    userName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: format
    }
});

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
    reactions: [ reactionSchema ]
},{ 
    toJSON: { 
        getters: true,
        virtuals: true 
    },
    id: false
});

function format(date) {
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
}

thoughtSchema.virtual('reaction count').get(function () {
      return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);
function format(date) {
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
}

module.exports = Thought;
