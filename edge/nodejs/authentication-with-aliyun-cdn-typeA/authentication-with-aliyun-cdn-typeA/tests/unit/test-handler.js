'use strict';

const chai = require('chai');
const expect = chai.expect;
var context;

var event = {
    "Records": [
        {
            "cf": {
                "config": {
                    "distributionDomainName": "d111111abcdef8.cloudfront.net",
                    "distributionId": "EDFDVBD6EXAMPLE",
                    "eventType": "viewer-request",
                    "requestId": "dB2-nvERw_fQuF20pKHWKb7-hv73zdHTXug_zgUF8I1YC-qlr8SKBA=="
                },
                "request": {
                    "clientIp": "203.0.113.178",
                    "headers": {
                        "host": [
                            {
                                "key": "Host",
                                "value": "d111111abcdef8.cloudfront.net"
                            }
                        ],
                        "user-agent": [
                            {
                                "key": "User-Agent",
                                "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36"
                            }
                        ],
                        "accept": [
                            {
                                "key": "accept",
                                "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
                            }
                        ],
                        "accept-encoding": [
                            {
                                "key": "accept-encoding",
                                "value": "gzip, deflate, br"
                            }
                        ],
                        "accept-language": [
                            {
                                "key": "accept-language",
                                "value": "zh-CN,zh;q=0.9,en;q=0.8"
                            }
                        ]
                    },
                    "method": "GET",
                    "querystring": "auth_key=1601454231-0d2f9430e45f49748502ff090ef9882c-0-778a109ffee542551ca972db292e0685",
                    "uri": "/videos/ahaschool/20190702/2bowuguan1/8gugenhaimu.mp4"
                }
            }
        }
    ]
};

describe('Tests index', function () {
  it('verifies successful response', async () => {
    const app = require('../../app.js');
        // const result = await app.handler(event, context, callback)
        // console.log('result: ' + result);
        app.handler(event, context, function(error, data) {
          if (error) {
            console.log(error); // an error occurred
          } else {
            console.log(data); // request succeeded
            expect(data.status).to.equal('403');
          }
        });
    });
});