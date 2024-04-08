const express = require('express');
const app  = express();
const port = 3000;

const userRouter = require('./Routers/User');

//middleware
app.use(express.json());
app.use('/User', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = router;