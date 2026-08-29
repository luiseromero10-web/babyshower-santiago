const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Desktop View
  const pageDesktop = await browser.newPage();
  await pageDesktop.setViewport({ width: 1280, height: 900 });
  await pageDesktop.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle2' });
  await pageDesktop.screenshot({ path: path.join(__dirname, 'final_desktop.png') });
  console.log('Saved final_desktop.png');

  // Mobile View
  const pageMobile = await browser.newPage();
  await pageMobile.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 });
  await pageMobile.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle2' });
  await pageMobile.screenshot({ path: path.join(__dirname, 'final_mobile.png') });
  console.log('Saved final_mobile.png');

  await browser.close();
})();
