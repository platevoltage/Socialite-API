const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.ObjectId,
        default: new mongoose.ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        minLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: format
        //getter method to format timestamp
    }

},{ 
    toJSON: { getters: true } 
});

const Reaction = mongoose.model('Reaction', reactionSchema);
function format(date) {
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
}


module.exports = Reaction;