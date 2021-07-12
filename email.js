const { chromium } = require('playwright');
(async () => {
    for(let i=0;i<2;i++)
    {

        let email="hp_emp_anud_011"+i;
    
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://yopmail.com/en/
  await page.goto('https://yopmail.com/en/');
  // Click [placeholder="Enter your inbox here"]
  await page.click('[placeholder="Enter your inbox here"]');
  // Fill [placeholder="Enter your inbox here"]
  await page.fill('[placeholder="Enter your inbox here"]',email );

  // Click text=Home
  await page.click('text=Home');
  // assert.equal(page.url(), 'https://yopmail.com/en/');
 
  await page.click('[placeholder="Enter your inbox here"]');
  console.log(email+"@yopmail.com");
  
  // ---------------------
  await context.close();
  await browser.close();
}
})();