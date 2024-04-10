const mongoose = require('mongoose')
const url ="mongodb+srv://riyarastogi:riya8902@riyarastogi.zcrmwq8.mongodb.net/mern?retryWrites=true&w=majority&appName=riyarastogi"
mongoose.connect(url)

.then((result) => {
    console.log('Connected to the database')
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;