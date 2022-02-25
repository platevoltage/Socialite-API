const mongoose = require('mongoose');
const thoughtSchema = require('./Thought');


const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        // match: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`
    },
    thoughts: {
        type: Array,
        ref: 'Thought'

    },
        //array of _id values referencing Thought
    
    friends: {
        type: Array,
        // _id: [userSchema]
        //array of _id values referencing User (self)
    }


});

const User = mongoose.model('User', userSchema);


module.exports = User;