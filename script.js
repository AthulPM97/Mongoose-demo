const mongoose = require('mongoose');
const User = require('./User');


mongoose.connect('mongodb://localhost/testdb');

const user = new User({name: 'athul', age: 25});
user.save().then(() => console.log('user saved'))