const request = require("request");

const APIKEY = "";

var options = {
  method: "POST",
  url: "https://api.hubapi.com/crm/v3/schemas",
  qs: { hapikey: APIKEY },
  headers: { accept: "application/json", "content-type": "application/json" },
  body: {
    name: "order",
    labels: {
      singular: "Order",
      plural: "Orders",
    },
    primaryDisplayProperty: "order",
    requiredProperties: ["order"],
    properties: [
      {
        name: "order",
        label: "Order",
        type: "string",
        fieldType: "text",
        isPrimaryDisplayLabel: true,
      },
    ],
    associatedObjects: ["COMPANY", "DEAL", "CONTACT", "2-1382020"],
    metaType: "PORTAL_SPECIFIC",
  },
  json: true,
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
