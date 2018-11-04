import SuperAgent from 'superagent';
import UAParser from 'ua-parser-js';

const parser = new UAParser();
const {browser} = parser.getResult();
const noCache = require('superagent-no-cache')

export default class HttpClient {
    static get(url, queryJson, withCredentials = false) {
        return _get(url, queryJson, withCredentials);
    }

    static post(url, dataJson) {
        return _post(url, dataJson);
    }
}

const getReject = function (error) {
    if (error !== undefined) return error.status;
    return 'connection error'
};

function _get(url, queryJson, withCredentials = false) {
    return new Promise((resolve, reject) => {
        let request = SuperAgent
            .get(url);
        if(withCredentials)
            request = request.withCredentials();
        request
            .set("Client-Url", location.pathname)
            .set("React-Url", location.hash)
            .set("Browser-Name", browser.name)
            .set("Browser-Version", browser.version)
            .use(noCache)
            .query(queryJson)
            .end(function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            })
    }).catch(error => Promise.reject(getReject(error)))
        .then(res => res.body);
}

function _post(url, dataJson, attempt = 1) {
    return new Promise((resolve, reject) => {
        const request = SuperAgent
            .post(url)
            .set("Client-Url", location.pathname)
            .set("React-Url", location.hash)
            .set("Browser-Name", browser.name)
            .set("Browser-Version", browser.version)
            .set("Attempt", attempt)
            .use(noCache)
            .send(dataJson)
            .end(function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            })
    }).catch(error => {
        const commonError = getReject(error);
        if (CommonErrors.isInvalidJsonPrimitive(commonError) && attempt < 5)
            return _post(url, dataJson, ++attempt);

        return Promise.reject(commonError);
    })
        .then(res => res.body);
}
