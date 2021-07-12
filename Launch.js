const { chromium } = require('playwright');
(async () => {
    

  //  let emailAddress= "hp_ab_emp_001"+i+"@yopmail.com"
    
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  
  // Open new page
  const page = await context.newPage();
  
  // Go to https://www.hpsmartpie.com/
  await page.goto('https://www.hpsmartpie.com/','setTimeout=8000');
  // Go to https://www.hpsmartpie.com/us/en
  //await page.goto('https://www.hpsmartpie.com/us/en');

  await page.click('button:has-text("I ACCEPT")','setTimeout=8000');
  await page.click('button:has-text("Sign In")');

  await page.click('input[name="usernameEmailName"]');
  // Fill input[name="firstName"]
  await page.fill('input[name="usernameEmailName"]', 'new');
  await page.click('button:has-text("next")');
})();