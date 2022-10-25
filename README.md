# Socialite-API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


This is a backend for a social media site called Socialite. It Express.js to serve up data from MongoDB through the Mongoose ODM. REST routes are included for adding Users, Users befriending other users, making posts called "Thoughts", and adding comments called "Reactions".



##

- a getter function is used to convert the UNIX time stamp into a human readable format

```
function format(date) {
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
}
```
- email addresses are validated using Mongoose's "match" functionality and a regular expression

```
email: { 
    type: String, 
    required: true, 
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
},
```

## [Watch the demo video](https://antieatingactivist.github.io/Socialite-API/)



<img width="1065" alt="Screen Shot 2022-02-25 at 9 01 35 PM" src="https://user-images.githubusercontent.com/1414728/155829871-4a15aeca-8933-4c19-ac8a-3281127fc7d7.png">




## Usage
MongoDB must be running on your machine.

The server can be started by navigating into the application's directory and running the command:
`npm start`

POST method can be used to create new users, thoughts, reactions, and add friends.

PUT can be used to modify an existing element.

DELETE can be used to delete an element.


## Built With

* [mongoDB](https://mongodb.com)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [node.js](https://nodejs.dev) 
* [mongoose](https://mongoosejs.com)



## Authors

Garrett Corbin

- [https://github.com/platevoltage/](https://github.com/)
- [https://www.linkedin.com/in/garrett-corbin-7a7777227/](https://www.linkedin.com/)

## License

This project is licensed under The MIT license

