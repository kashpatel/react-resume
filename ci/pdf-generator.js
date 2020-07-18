const path = require('path');
const puppeteer = require('puppeteer');

(async function () {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox'],
    });
    const page = await browser.newPage();

    const indexFilePath = path.resolve(__dirname, '../build/index.html');
    console.log('indexFilePath ', indexFilePath);
    await page.goto(indexFilePath, { waitUntil: 'networkidle0' });

    const pdfFilePath = path.resolve(
        __dirname,
        '../build/Kashyap_Patel_Resume.pdf'
    );
    console.log('pdfFilePath ', pdfFilePath);
    await page.pdf({ path: pdfFilePath });

    await browser.close();
})();
