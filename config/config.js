const dotenv = require('dotenv');
const fs = require('fs');

const env = process.env.NODE_ENV || 'development';
const envFile = `.env.${env}`;

if(fs.existsSync(envFile)) {
    dotenv.config({path: envFile});
} else {
    dotenv.config();
}


module.exports = {
    port: process.env.PORT,
    api_key: process.env.API_KEY,
    mode: process.env.MODE
}