const path = require('path');
const puppeteer = require('puppeteer');

(async function () {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        const indexFilePath = path.resolve(__dirname, '../build/index.html');
        await page.goto(`file:///${indexFilePath}`, { waitUntil: 'networkidle0' });

        const pdfFilePath = path.resolve(__dirname, '../build/Kashyap_Patel_Resume.pdf');
        await page.pdf({ path: pdfFilePath, height: '12.31in'  });

        await browser.close();
    } catch (err) {
        console.error('Error occured while printing pdf. ', JSON.stringify(err));
    }
})();
