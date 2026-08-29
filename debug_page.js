const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  const text = await page.evaluate(() => {
    return {
      hasToilePatternGiraffe: document.body.innerHTML.includes('toilePatternGiraffeMain'),
      hasGiraffeTag: !!document.querySelector('svg'),
      allSvgCount: document.querySelectorAll('svg').length,
      htmlSample: document.querySelector('section')?.innerText
    };
  });
  console.log('Result:', text);
  await browser.close();
})();
