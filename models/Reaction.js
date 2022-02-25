const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId,
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
    toJSON: { getters: true },
    id: false 
});

const Reaction = mongoose.model('Reaction', reactionSchema);
function format(date) {
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
}


module.exports = Reaction;