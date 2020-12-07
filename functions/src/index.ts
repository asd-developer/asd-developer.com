import * as functions from 'firebase-functions';

import * as sgMail from '@sendgrid/mail';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors)
// app.use(
//     cors({
//         Origin : "http://localhost:3000",
//         Credentials : true,
//         Methods : "GET, POST, OPTIONS",
//         Headers : "Origin, Content-Type, Accept"
//     })
//   );

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);


exports.formMail = functions.https.onRequest(async (req, res) => {
    return cors()(req, res, async () => {

    //Sends copy of the message to the user
    const data = req.body;
    functions.logger.log("data", data);
    functions.logger.log("EMAIL", data.email, data.name);
    
    const msgSend = await {
        to: data.email,
        from: "andreduarte.courses@gmail.com",
        templateId: TEMPLATE_ID,
        dynamic_template_data:{
            email: data.email,
            name: data.name,
            message: data.message
        }
    };
    //Sends me the user message
    const msgReceive = await {
        to: "andreduarte.courses@gmail.com",
        from: "andreduarte.courses@gmail.com",
        templateId: TEMPLATE_ID,
        dynamic_template_data :{
            email: data.email,
            name: data.name,
            message: data.message
        }
    };
    await sgMail.send(msgSend);
    await sgMail.send(msgReceive);

    // Sending response 
    res.status(200).send('Ok it worked');
});
    // Sending response 
    res.status(200).send('Ok');
});