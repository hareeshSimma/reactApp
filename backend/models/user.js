const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    gender:{
        type:String,
        required:true
    }
    
});

const User = module.exports = mongoose.model("ReactjsRegistration", UserSchema);



module.exports.getUserById = function(id, callback) {
    User.findById(id, callback)
}

module.exports.getUserByUsername = function(username, callback) {
    var query = { email: username }
    User.findOne(query, callback);
    console.log(query)
}

module.exports.addUser = function(newuser, callback) {
    console.log(newuser)
    bcrypt.genSalt(15, (err, salt) => {
        bcrypt.hash(newuser.pwd, salt, (err, hash) => {
            if (err) {
                console.log(err);
            }
            newuser.pwd = hash;
            newuser.save(callback);
            console.log(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });

}
module.exports.getEmailAlert = function(email, callback) {
    var query = { email: email }
    User.findOne(query, callback);
    console.log(query)

}

module.exports.setpswd = function(newuser, callback) {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newuser.password, salt, (err, hash) => {
            newuser.password = hash;
            callback();

            console.log(hash)


        });

    });
}