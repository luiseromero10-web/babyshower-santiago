const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  const rects = await page.evaluate(() => {
    const svgs = Array.from(document.querySelectorAll('svg')).map(s => {
      const r = s.getBoundingClientRect();
      const comp = window.getComputedStyle(s);
      return {
        tag: s.tagName,
        class: s.className.baseVal,
        top: r.top,
        left: r.left,
        width: r.width,
        height: r.height,
        display: comp.display,
        visibility: comp.visibility,
        opacity: comp.opacity
      };
    });
    return svgs;
  });
  console.log('SVG rects:', JSON.stringify(rects.filter(r => r.width > 20), null, 2));
  await browser.close();
})();
