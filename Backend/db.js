const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://krishna:12345@cluster0.tf8mk.mongodb.net/taskDatabase?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;