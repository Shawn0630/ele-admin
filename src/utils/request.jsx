import { config } from '../config';
import * as agent from 'superagent';
import store from "../index";

const ApiMethod = {
    GET: "GET", 
    POST: "POST", 
    PUT: "PUT",
    DELETE: "DELETE"
}

const PayloadType = {
    FORM: "FORM",
    JSON: "JSON"
}

async function fetch(action) {
    debugger;
    return agentFetch(action).catch(err => {
       store.dispatch({
           type: "global/addError",
           payload: err
       });

       throw err;
    })
}

async function agentFetch(action) {
    const { endpoint, method, payload, handlers } = action;
    const payloadType = action.payloadType != null ? action.payloadType : PayloadType.JSON;
    const useBuffer = action.useBuffer || false;
    const url = endpoint.indexOf(config.apiRoot) === -1 ? config.apiRoot + endpoint : endpoint;
    debugger;
    switch (method) {
        case ApiMethod.POST:
        case ApiMethod.PUT:
            let request
            if (method === ApiMethod.POST) {
                request = agent.post(url);
            } else if (method === ApiMethod.PUT) {
                request = agent.put(url);
            } else {
                return Promise.reject(new Error(`Unexpected ApiMethod:  ${method}`));
            }
            request.withCredentials();

            if (useBuffer) {
                request = request.responseType("arraybuffer");
                request.set("Content-Type", "application/json");
                request.set("accept", "protobuf");
                request.sent(payload);
            } else if (payloadType === PayloadType.JSON) {
                request.set("Content-Type", "application/json");
                request.send(payload);
            } else {
                for (const key of Object.keys(payload)) {
                    request.field(key, payload[key]);
                }

                if (handlers != null && handlers.progress != null) {
                    request.on("progress", (event) => {
                        handlers.progress(event);
                    })
                }
            }

            return new Promise((resolve, reject) => {
                request.end((err, res) => {
                    if (err != null) {
                        if (handlers != null && handlers.response != null) {
                            handlers.response(err);
                        }

                        let errorMessage = err.message;
                        if (err.response != null && err.response.text != null && err.response.text.trim().length > 0) {
                            errorMessage = err.response.text;
                        }

                        reject(new Error(errorMessage));
                    } else if (!res.ok) {
                        const error = res.text;
                        if (handlers != null && handlers.response != null) {
                            handlers.response(error);
                        }
                        reject(new Error(res.text));
                    } else {
                        if (handlers != null && handlers.response != null) {
                            handlers.response(null, res);
                        }

                        if (res.body != null) {
                            resolve(res.body);

                            return;
                        }

                        resolve(res.text);
                    }
                })
            })
        case ApiMethod.DELETE:
            return new Promise((resolve, reject) => {
                agent.delete(url).withCredentials().end((err, res) => {
                    if (err != null) {
                        reject(err);
                    } else if (!res.ok) {
                        reject(new Error(res.text));
                    } else {
                        resolve(res.body);
                    }
                })
            })
        default:
            return handleGet(url ,useBuffer);
    }
}

async function handleGet(url, useBuffer) {
    return new Promise((resolve, reject) => {
        let req = agent.get(url).withCredentials();

        if (useBuffer) {
            req = req.responseType("arraybuffer");
            req.set("accept", "protobuf");
        }

        req.end((err, res) => {
            if (err != null) {
                let errorMessage = err.toString();
                if (err.response != null && err.response.text != null && err.response.text.trim().length > 0) {
                    errorMessage = err.response.text;
                } else if (err.message != null) {
                    errorMessage = err.message;
                }

                reject(new Error(errorMessage));
            } else if (!res.ok) {
                reject(new Error(res.text));
            } else if (res.body != null) {
                resolve(res.body);
            } else {
                resolve(res.text);
            }
        })
    })
}

export { ApiMethod, PayloadType, fetch }