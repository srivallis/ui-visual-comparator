const captureScreenshot = require('./capture');
const compareImages = require('./compare');
const config = require('./config');

(async function () {
    await Promise.all([captureScreenshot(config.domains['local'], 'local'), captureScreenshot(config.domains['live'], 'live')]).then( async() => {
        await compareImages().then(() => {
            console.log('Screenshots has been captured, compared and the results are stored in the screenshots directory !');
        }).catch((e) => {
            console.log('Error occured while comparing screenshots !', e);
        });
    }).catch((e) => {
        console.log('Error occured while capturing screenshots !', e);
    });
})();