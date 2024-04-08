const mongoose = require('mongoose')
const url ='mongodb+srv://<username>:riya8902@riyarastogi.zcrmwq8.mongodb.net/Mern?retryWrites=true&w=majority&appName=riyarastogi'
mongoose.connect(url)

.then((result) => {
    console.log('Connected to the database')
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;