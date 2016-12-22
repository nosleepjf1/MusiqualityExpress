/**
 * Created by bobnweave on 12/21/16.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var user = new Schema({
   id: ObjectId,
   username: String,
    password: String
});

var userFavoriteBand = new Schema({
   id: ObjectId,
    bandname: String,
    bandid: Number,
    userid: String
});


module.exports = {
    User: mongoose.model('user', user),
    UserFavoriteBand: mongoose.model('user_favorite_band', userFavoriteBand)
};