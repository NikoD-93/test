const request = require('request')


const APIKEY = ""

var options = {
    method: 'POST',
    url: 'https://api.hubapi.com/crm/v3/schemas',
    qs: {hapikey: APIKEY},
    headers: {accept: 'application/json', 'content-type': 'application/json'},
    body: { name: "hospital",
            labels: {
                singular: "Hospital",
                plural: "Hospitals"
            },
            primaryDisplayProperty: "name",
            requiredProperties: [
                "name"
            ],
            properties: [
                {
                    name: "name",
                    label: "Name",
                    type: "string",
                    fieldType: "text",
                    isPrimaryDisplayLabel: true
                }
            ],
        metaType: 'PORTAL_SPECIFIC'  
    },
    json: true

};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });