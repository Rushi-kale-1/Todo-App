const mongoose = require("mongoose")

mongoose.connect()

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const ToDoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    todos:[ToDoSchema]
})

const User = mongoose.model('User',UserSchema)

module.exports = {
    User
}
