const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle2' });
  
  const info = await page.evaluate(() => {
    const svgs = Array.from(document.querySelectorAll('svg')).map(s => ({
      class: s.className.baseVal,
      w: s.getAttribute('width') || s.clientWidth,
      h: s.getAttribute('height') || s.clientHeight,
      parent: s.parentElement?.className
    }));
    return { svgs };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
