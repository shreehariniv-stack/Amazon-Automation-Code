import { test, expect } from '@playwright/test';

test('Frame Handle', async ({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/")
})
