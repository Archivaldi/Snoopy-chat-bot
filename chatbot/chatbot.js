"use strict";
const dialogflow = require("dialogflow");
const config = require("../config/keys");
const structjson = require("./utils")

const projectID = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

const credentials = {
    "client_email": config.googleClientEmail,
    "private_key": config.googlePrivateKey
}

const sessionClient = new dialogflow.SessionsClient({ projectID, credentials });

module.exports = {
    textQuery: async function (text, userID, parameters = {}) {
        let sessionPath = sessionClient.sessionPath(projectID, sessionId + userID);
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        }

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses)
        return responses;
    },

    eventQuery: async function (event, userID, parameters = {}) {
        let sessionPath = sessionClient.sessionPath(projectID, sessionId + userID);
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: event,
                    parameters: structjson.jsonToStructProto(parameters),
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            }
        }

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses)
        return responses;
    },

    handleAction: function (responses) {
        return responses;
    }
}