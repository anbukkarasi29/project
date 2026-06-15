import{test} from '@playwright/test';
test("validate the application", async({page}) =>
     {

    await page.goto ('https://practice.expandtesting.com/login')
    await page.locator ( '//input[@id="username"]') .fill('practice')
    await page.locator ('//input[@id="password"]').fill('SuperSecretPassword')
    await page.locator ('//button[@id="submit-login"]').click()
    await page.waitForTimeout(3000) 

} )
