const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // 1. Mobile - Initial Curtain Opener View
  const pageCurtain = await browser.newPage();
  await pageCurtain.setViewport({ width: 390, height: 844, isMobile: true });
  await pageCurtain.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await pageCurtain.screenshot({ path: path.join(__dirname, 'curtain_opener_mobile.png') });
  console.log('Saved curtain_opener_mobile.png');

  // Click "Abrir Invitación" button to reveal the page
  const openBtn = await pageCurtain.$('button');
  if (openBtn) {
    await openBtn.click();
    await new Promise(r => setTimeout(r, 1200)); // wait for curtain animation
  }
  await pageCurtain.screenshot({ path: path.join(__dirname, 'final_mobile.png') });
  console.log('Saved final_mobile.png');

  // 2. Desktop View
  const pageDesktop = await browser.newPage();
  await pageDesktop.setViewport({ width: 1280, height: 900 });
  await pageDesktop.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  // Click to open curtain if present
  const desktopBtn = await pageDesktop.$('button');
  if (desktopBtn) {
    await desktopBtn.click();
    await new Promise(r => setTimeout(r, 1200));
  }
  await pageDesktop.screenshot({ path: path.join(__dirname, 'final_desktop.png') });
  console.log('Saved final_desktop.png');

  await browser.close();
})();
