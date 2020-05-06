const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nickname: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}
});

module.exports = mongoose.model('user', UserSchema);