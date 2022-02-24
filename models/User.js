const mongoose = require('mongoose');
const Thought = require('./Thought');


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
        match: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`
    },
    thoughts: {
        _id: [Thought]
        //array of _id values referencing Thought
    },
    friends: {
        _id: [User]
        //array of _id values referencing User (self)
    }


});

const User = mongoose.model('User', userSchema);


module.exports = userSchema;