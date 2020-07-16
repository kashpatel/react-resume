const puppeteer = require('puppeteer');

(async function () {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    await page.pdf({ path: 'build/Kashyap_Patel_Resume.pdf' });
    await browser.close();
})();
