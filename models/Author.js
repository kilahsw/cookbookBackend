//Import connection
const mongoose = require('../db/connection');
const Schema = mongoose.Schema

/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/
const AuthorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    cookbooks: [
        {
            ref: 'Cookbooks',
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})


//export model named "Author"
Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;
