module.exports = async function () {
    const compareImages = require("resemblejs/compareImages");
    const fse = require('fs-extra');
    const config = require('./config');
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };
    const devices = Object.keys(config.viewports);
    for (const device of devices) {
        const localImgPath = config.screenshotsPath['local'] + device + '.jpg';
        const liveImgPath =  config.screenshotsPath['live'] + device + '.jpg';
        const comparedImgPath = config.screenshotsPath['result'] + device + '.jpg';
        fse.ensureDirSync(config.screenshotsPath['result']);
        const data = await compareImages(await fse.readFile(localImgPath), await fse.readFile(liveImgPath), options);
        await fse.writeFile(comparedImgPath, data.getBuffer());
    }
};
