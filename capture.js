module.exports =  async function (url, env) {
    const config = require('./config');
    const fse = require('fs-extra');
    const puppeteer = require('puppeteer');
    const opts = {
        headless: true,
        slowMo: 0,
        ags: ['--no-sandbox', '--start-maximized']
    };
    const browser = await puppeteer.launch(opts);
    
    const devices = Object.keys(config.viewports);
    for (const device of devices) {
        const page = await browser.newPage();
        const directory = config.screenshotsPath[env];
        fse.ensureDirSync(directory);
        await page.setViewport(config.viewports[device]);
        await Promise.all([page.goto(url), page.waitForNavigation()]).then(async() => {
            await page.screenshot({path: directory + device + '.jpg', fullPage: true, quality: 100, type: 'jpeg'})
        }).catch((e) => {
            console.log('Error occured while capturing screenshots !', e);
        });
    }
    await browser.close();
};
