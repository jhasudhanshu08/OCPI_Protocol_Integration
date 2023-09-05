const express = require('express');
const app = express();
// const validToken = require("./tokken");
const versionRoutes = require('./routes/versionsRoutes');

app.use(express.json());


app.use('/ocpi/', versionRoutes)

// const urlData = [
//     {
//         "version": "2.2",
//         "url": "https://holmiumtechnologies.com/ocpi/versions/2.2"
//     },
//     {
//         "version": "2.1",
//         "url": "https://holmiumtechnologies.com/ocpi/versions/2.2"
//     }
// ]

// app.post('/verification', (req, res) => {
//     const token = req.headers.authorization;
//     console.log("token", token)
//     console.log("validToken", validToken)

//     if (token === validToken) {
//         res.status(201).json({
//             status_code: 1000,
//             timestamp: new Date(),
//             status_message: "Success",
//             data: (() => {
//                 let tempData = [];
//                 urlData.forEach(element => {
//                     tempData.push({
//                         version: element.version,
//                         url: element.url
//                     })
//                 })``
//                 return tempData;
//             })(),
//         });
//       } else {
//         res.status(401).json({ message: "Token is invalid" });
//       }
// })

app.listen(7000, () => {
    console.log("servering on port 7000")
})