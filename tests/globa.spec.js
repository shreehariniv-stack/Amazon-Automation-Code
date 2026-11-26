import { test, expect } from '@playwright/test';

test.only('Frame Handle', async ({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/")
})