const mongoose = require('mongoose')
const url =''
mongoose.connect(url)

.then((result) => {
    console.log('Connected to nthe database')
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;