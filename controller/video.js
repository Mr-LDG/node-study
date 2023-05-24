const config = require('../conf/config.json'),
    fsPromise = require('fs/promises'),
    path = require('path');

SOURCE_PATH = config.source,
VIDEO_FILES = [];

Object.defineProperties(
    exports,
    {
        checkVideos: {
            value: async () => {
                try {
                    await findVideo(SOURCE_PATH);
                    console.info('checkVideos success');
                    console.table(VIDEO_FILES);
                } catch(err) {
                    console.error('fail!!!',err);
                }
            }
        },
        videoArr: {
            value: VIDEO_FILES
        }
    }
)

async function findVideo(dirPath) {
    try {
        let files = await fsPromise.readdir(dirPath, {withFileTypes: true})
        
        for(let fileObj of files) {

            let _filePath = path.join(dirPath,fileObj.name)
            
            if(fileObj.isDirectory()) {
                await findVideo(_filePath);
            } else {
                var _result = await checkPath(_filePath);
                
                if(_result) {
                    VIDEO_FILES.push(_filePath);
                }
            }
        }
    } catch(err) {
        console.error(err);
    }
}

async function checkPath(_path) {
    let result = '';
    try {
         result = await fsPromise.stat(_path);
    } catch (e) {
        console.error("fucntion checkPath", e);
    }
    return result;
}