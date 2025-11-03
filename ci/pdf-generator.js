const path = require('path');
const puppeteer = require('puppeteer');

(async function () {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        const indexFilePath = path.resolve(__dirname, '../build/index.html');
        await page.goto(`file:///${indexFilePath}`, { waitUntil: 'networkidle0' });

        const pdfFilePath = path.resolve(__dirname, '../build/Kashyap_Patel_Resume.pdf');
        await page.pdf({
            path: pdfFilePath,
            // format: 'A6'
            height: '1180px',
            width: '816px',
            printBackground: false,
            pageRanges: '1',

        });

        await browser.close();
    } catch (err) {
        console.error('Error occured while printing pdf. ', JSON.stringify(err));
    }
})();
