var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var collectnSchema = new Schema({
    name: String
});
module.exports = mongoose.model('collectn', collectnSchema);
