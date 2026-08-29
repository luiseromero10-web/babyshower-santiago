const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Desktop
  const pageDesktop = await browser.newPage();
  await pageDesktop.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
  await pageDesktop.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await pageDesktop.screenshot({ path: path.join(__dirname, 'desktop_view.png') });
  console.log('Saved desktop_view.png');

  // Mobile
  const pageMobile = await browser.newPage();
  await pageMobile.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 });
  await pageMobile.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await pageMobile.screenshot({ path: path.join(__dirname, 'mobile_view.png') });
  console.log('Saved mobile_view.png');

  await browser.close();
})();
