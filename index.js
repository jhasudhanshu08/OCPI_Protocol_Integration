const express = require('express');
const app = express();
const versionRoutes = require('./routes/versionsRoutes');

app.use(express.json());


app.use('/ocpi/', versionRoutes)

app.listen(7000, () => {
    console.log("servering on port 7000")
})