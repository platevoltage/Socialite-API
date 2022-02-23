const mongoose = require('mongoose');

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
        //array of _id values referencing Thought
    },
    friends: {
        //array of _id values referencing User (self)
    }


});


module.exports = User;