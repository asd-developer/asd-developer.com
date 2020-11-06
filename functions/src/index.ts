import * as functions from 'firebase-functions';

import * as sgMail from '@sendgrid/mail';

const express = require('express');
const cors = require('cors')({origin: true});
const app = express();

app.use(cors);

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

exports.formMail = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
    //Sends copy of the message to the user
    const data = JSON.parse(req.body);
    functions.logger.log("data", data);
    
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
    res.status(200).send('Ok');
});
    // Sending response 
    res.status(200).send('Ok');
});