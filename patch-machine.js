const request = require("request");

const APIKEY = "";

var options = {
  method: "POST",
  url: "https://api.hubapi.com/crm/v3/schemas/2-1382020/associations",
  qs: { hapikey: APIKEY },
  headers: { accept: "application/json", "content-type": "application/json" },
  body: {
    fromObjectTypeId: "2-1382020",
    toObjectTypeId: "TICKET",
    name: "machine_to_ticket",
    cardinality: "ONE_TO_MANY",
    inverseCardinality: "ONE_TO_ONE",
  },
  json: true,
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
