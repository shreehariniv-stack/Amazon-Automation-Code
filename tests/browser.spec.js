import {test} from '@playwright/test';

test ('locators', async ({page})=>{

    await page.goto ('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill("laptop I5");
    await page.locator('#nav-search-submit-button').click();
})