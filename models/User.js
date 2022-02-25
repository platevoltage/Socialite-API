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
        ref: 'User'
        // _id: [userSchema]
        //array of _id values referencing User (self)
    }


},{
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
});

userSchema.virtual('friend count').get(function () {
      return this.friends.length;
  })

const User = mongoose.model('User', userSchema);


module.exports = User;