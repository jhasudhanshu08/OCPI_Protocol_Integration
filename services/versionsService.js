const validToken = require("../tokken");

exports.versionsService = async (req) => {
  console.log("req", req.originalUrl);
  let response = {
    status: false,
    data: {},
  };
  const token = req.headers.authorization;

  const urlData = [
    {
      version: "2.2",
      url: "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/versions/2.2",
    },
    // {
    //   version: "2.1",
    //   url: "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/versions/2.1",
    // },
  ];

  const urlVersionData = [
    {
      status_code: 1000,
      timestamp: "2023-09-04T08:12:19.706Z",
      status_message: "Success",
      data: {
        version: "2.2",
        endpoints: [
          {
            identifier: "credentials",
            role: "RECEIVER",
            url: "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/2.2/credentials",
          },
          {
            role: "SENDER",
            identifier: "credentials",
            url: "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/2.2/credentials",
          },
          // {
          //     "identifier": "locations",
          //     "role": "SENDER",
          //     "url": "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/cpo/2.2/locations"
          // },
          // {
          //     "identifier": "tokens",
          //     "role": "RECEIVER",
          //     "url": "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/cpo/2.2/tokens"
          // },
          // {
          //     "identifier": "tokens",
          //     "role": "SENDER",
          //     "url": "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/cpo/2.2/tokens"
          // },
          // {
          //     "identifier": "tariffs",
          //     "role": "SENDER",
          //     "url": "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/cpo/2.2/tariffs"
          // },
          // {
          //     "role": "RECEIVER",
          //     "identifier": "commands",
          //     "url": "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/cpo/2.2/commands"
          // },
          // {
          //     "role": "SENDER",
          //     "url": "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/cpo/2.2/sessions",
          //     "identifier": "sessions"
          // },
          // {
          //     "role": "SENDER",
          //     "url": "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/cpo/2.2/cdrs",
          //     "identifier": "cdrs"
          // },
          // {
          //     "role": "RECEIVER",
          //     "identifier": "sessions",
          //     "url": "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/emsp/2.2/sessions"
          // },
          // {
          //     "role": "RECEIVER",
          //     "identifier": "cdrs",
          //     "url": "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/emsp/2.2/cdrs"
          // },
          //
          // {
          //     "role": "RECEIVER",
          //     "identifier": "locations",
          //     "url": "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/emsp/2.2/locations"
          // },
          // {
          //     "identifier": "tariffs",
          //     "role": "RECEIVER",
          //     "url": "https://dev-api-holmiumtechnologies.cyclic.app/ocpi/emsp/2.2/tariffs"
          // }
        ],
      },
    },
  ];

  try {
    if (req.originalUrl == "/ocpi/versions") {
      if (token === validToken.versionToken) {
        response.status = true;
        response.data = {
          status_code: 1000,
          timestamp: new Date(),
          status_message: "Success",
          data: (() => {
            let tempData = [];
            urlData.forEach((element) => {
              tempData.push({
                version: element.version,
                url: element.url,
              });
            });
            return tempData;
          })(),
        };
      } else {
        response = {
          message: "Token is invalid",
        };
      }

      return (response = {
        status: response.status,
        data: response.data,
      });
    } else if (req.originalUrl == "/ocpi/versions/2.2") {
      if (token === validToken.versionToken) {
        response.status = true;
        response.data = {
          status_code: 1000,
          timestamp: new Date(),
          status_message: "Success",
          data: {
            version: "2.2",
            endpoints: (() => {
              let tempData = [];
              urlVersionData[0].data.endpoints.forEach((element) => {
                tempData.push({
                  identifier: element.identifier,
                  role: element.role,
                  url: element.url,
                });
              });
              return tempData;
            })(),
          },
        };
      } else {
        response = {
          message: "Token is invalid",
        };
      }

      return (response = {
        status: response.status,
        data: response.data,
      });
    }
  } catch (err) {
    const response = {
      status: false,
      message: err.message,
    };
    return response;
  }
};
