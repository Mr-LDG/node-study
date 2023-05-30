const config = require('../conf/config.json'),
    axios = require('axios'),
    HOST = config.requestIp;

Object.defineProperties(
    exports,
    {
        requestSRorNOTI: {
            value: async (dataArr) => {
                await request(dataArr, 'SR_NOTI');
            }
        },
        requestKIDS: {
            value: async (dataArr) => {
                await request(dataArr, 'KIDS');
            }
        },
        requestPOSTER: {
            value: async (dataArr) => {
                await request(dataArr, 'POSTER');
            }
        },
        requestCI: {
            value: async (dataArr) => {
                await request(dataArr, 'CI');
            }
        },
        
    }
)

async function request(dataArr, type) {
    let url = HOST;
    switch(type) {
        case 'SR_NOTI':
            url += 'd-cms/externalApi/sr/content';
        break;
        case 'KIDS':
            url += 'd-cms/externalApi/cr/putReading';
        break;
        case 'POSTER':
            url += 'd-cms/externalApi/cr/putGuxp';
        break;
        case 'CI':
            url += 'd-cms/externalApi/ci/putCastingImg';
        break;
    }

    if(type == 'SR_NOTI'){
        for(let data of dataArr) {
            try {
                await axios.post(url, data);
                console.log(type, url);
            } catch(err) {
                console.error(data, err);
            }
        }
    } else {
        let data = dataArr[0];
        try {
            await axios.post(url, data);
            console.log(type, url);
        } catch(err) {
            console.error(data, err);
        }
    }
    
    
}