const path = require('path');
const puppeteer = require('puppeteer');

const addProtocol = (path) => `file://${path}`;

(async function () {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const indexFilePath = path.resolve(__dirname, '../build/index.html');

    const finalIndexPath = addProtocol(indexFilePath);

    console.log('finalIndexPath ', finalIndexPath);
    await page.goto(finalIndexPath, { waitUntil: 'networkidle0' });

    const pdfFilePath = path.resolve(
        __dirname,
        '../build/Kashyap_Patel_Resume.pdf'
    );

    const finalPdfPath = addProtocol(pdfFilePath);

    console.log('finalPdfPath ', finalPdfPath);

    await page.pdf({ path: finalPdfPath });

    await browser.close();
})();
