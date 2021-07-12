const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({
        headless: false
      });

      const context = await browser.newContext();
      // Open new page
      const page = await context.newPage();

  // Go to https://yopmail.com/en/
  await page.goto('https://yopmail.com/en/');

  

});