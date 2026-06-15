import{test}  from '@playwright/test';
test('DemoSite handling', async({page}) => {
    await page.goto('https://demoqa.com/text-box')
    await page.locator('//input[@id="userName"]').fill('Anbukkarasi')
    await page.locator('//input[@id="userEmail"]').fill('anbushan22@gmail.com')
    await page.locator('//textarea[@id="currentAddress"]').fill('j2, wipro st, sholinganallur,chennai ')
    await page.locator('//textarea[@id="permanentAddress"]').fill( ' a7, mela sengundhar,st,srimushnam ')
    await page.locator('//button[@id="submit"]').click()
    await page.waitForTimeout(6000)
})