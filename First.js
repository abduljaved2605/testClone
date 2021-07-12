
const { chromium } = require('playwright');
(async () => {
    
    for (let i=0;i<3;i++) {

              let emailAddress= "hp_emp_anud_01"+i+"@yopmail.com"
              
            const browser = await chromium.launch({
              headless: false
            });
            const context = await browser.newContext();
            
            // Open new page
            const page = await context.newPage();
            
            // Go to https://www.hpsmartpie.com/
            await page.goto('https://www.hpsmartpie.com/');
            // Go to https://www.hpsmartpie.com/us/en
            //await page.goto('https://www.hpsmartpie.com/us/en');
            
            await page.click('button:has-text("I ACCEPT")');

            // Click button:has-text("Sign In")
            await page.click('button:has-text("Sign In")');
            // assert.equal(page.url(), 'https://login3.stg.cd.id.hp.com/login3?flow=https://directory.stg.cd.id.hp.com/directory/v1/authentication/login/AWc7nCRAeesaa3d7C6NSzroEywK1AAAAAAAAAAD4OlMsz4hD7CNjL3WAlOeNgoMg9iZ0-BzCmutUEOEPNlH6MoOoU-AcdDmUrt84hF7ggT92YZFST4_ppn1seRV47Di-qIC4Ftggt-JuuBgrOpkBMHAVQX3Djk-Yp143gEl_LMe1N__oEmkxFoc-GxQYuWesEK6wDW8OTsTuLM5F124p4r4loRJBGmoSybkM8yVChsK4_UwLUk01iCEA78nb9u5Oiz3NZmVCHGpjVozk6W8CyeaPEp89xtlFeSQimGP6b77ISfVERrgtaV2pQLKlB_xz4x3N1yVImT2AEdIxYt4dcXTlpjlNpyd-wL6kS4SiGIY8SKPNPC-fGFRo3eOlb6Hxw_Bmt3KfXQEjjuqjD76vMQAxNQMiKT1Tt04Of5z_LAlo9Xc7W8OX_KPBDObx76eyZ2wsh_vZDdEbii9u7R-eJDg7PWS1_wbFxj9x_dYiOhOyFMGQe5PgIz8QOotmC3ehS_n85SiwtVIeM1U5PxJ0k2KfeDQ9ZTHyjoeGn5T8ptcCZIJ3qZukjYwFcFev0I5W0YhKLOzkpIknHVoxAtzsTibaSf5h_uL7YbYWZRfysVAJSBGAv_QRc1AXaK-omGHBvGmwAVIXVqVsoT1oC7wmF2In0kfqeHhUqhXRFhHGbi8cEFK7ikTlZkvqbaer3M9WH66KVbVIa3bYWElmNTc6VKWzHxyBAVVkER6OLPfMwKImoEHEW318r7Aiyva4Lwe6Ao9rzvlZIv6nvAcqjg');
            // Click text=Don't have an account? Sign up
            await page.click('text=Don\'t have an account? Sign up');
            // assert.equal(page.url(), 'https://login3.stg.cd.id.hp.com/login3/sign-up');
            // Click input[name="firstName"]
            await page.click('input[name="firstName"]');
            // Fill input[name="firstName"]
            await page.fill('input[name="firstName"]', 'new');
            // Click input[name="lastName"]
            await page.click('input[name="lastName"]');
            // Fill input[name="lastName"]
            await page.fill('input[name="lastName"]', 'first');
            // Click input[name="email"]
            await page.click('input[name="email"]');
            // Fill input[name="email"]
            await page.fill('input[name="email"]', emailAddress);
            // Click input[name="phoneNumber"]
            await page.click('input[name="phoneNumber"]');
            // Fill input[name="phoneNumber"]
            await page.fill('input[name="phoneNumber"]', '(780) 716-8811');
            // Click input[name="password"]
            await page.click('input[name="password"]');
            // Fill input[name="password"]
            await page.fill('input[name="password"]', 'test123$');
            // Click input[name="confirmPassword"]
            await page.click('input[name="confirmPassword"]');
            // Fill input[name="confirmPassword"]
            await page.fill('input[name="confirmPassword"]', 'test123$');
            // Click button:has-text("CREATE ACCOUNT")
            await page.click('button:has-text("CREATE ACCOUNT")');
            console.log(emailAddress+"********Created******");
            //wait(7000);
            // ---------------------
            //await context.close();
            //await browser.close();

          }
})();
