const axios = require('axios');




async function getOcidByUserId(userId){
    const API_KEY = process.env.API_KEY;
    const url = "https://open.api.nexon.com";
    const path = `/maplestory/v1/id?character_name=${userId}`;

    const urlStr = url + path;
    let ocid
    await axios({
        url: urlStr,
        method: "GET",
        headers: {
            "accept": "application/json",
            "x-nxopen-api-key" : API_KEY
        }
    }).then(res => {
        console.log("ocid : " + res.data.ocid);
        ocid = res.data.ocid
    }).catch(err => {
        console.log(err);
    });

    return ocid
}


module.exports = {
    getOcidByUserId
}