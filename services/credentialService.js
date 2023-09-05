const validToken = require("../tokken");

exports.credentialService = async (req) => {
  console.log("req", req);
  let response = {
    status: false,
    data: {},
  };
  let data = {
    token: "9e80aca8-28be-11e9-b210-d663bd873d93",
    url: "https://holmiumtechnologies.com/ocpi/versions",
    roles: [
      {
        role: "CPO",
        party_id: "EXO",
        country_code: "NL",
        business_details: {
          name: "Excellent Operator",
        },
      },
      {
        role: "CPO",
        party_id: "PFC",
        country_code: "NL",
        business_details: {
          name: "Plug Flex Charging",
        },
      },
      {
        role: "CPO",
        party_id: "CGP",
        country_code: "NL",
        business_details: {
          name: "Charging Green Power",
        },
      },
    ],
  };

  try {
    if (req.token == validToken.credentialToken) {
        response.status = true;
        response.data = {
            token: data.token,
            url: data.url,
            roles: (() => {
                let tempData = [];
                data.roles.forEach(element => {
                    tempData.push({
                        role: element.role,
                        party_id: element.party_id,
                        country_code: element.country_code,
                        business_details: {
                            name: element.business_details.name
                        }
                    })
                })
                return tempData;
            })(),
        }
    } 
    else {
      response = {
        message: "Token is invalid",
      };
    }

    return response = {
        status: response.status,
        data: response.data
      };

  } catch (err) {
    const response = {
      status: false,
      message: err.message,
    };
    return response;
  }
};
