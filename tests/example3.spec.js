import{test} from '@playwright/test';
test("validate the application", async({page}) => {
    await page.goto ('https://practicetestautomation.com/practice-test-login/')
    await page.locator ( '//input[@id="username"]') .fill('stuentname')
    await page.locator ('//input[@id="password"]').fill('Password123')
    await page.locator ('//button[@id="submit"]') .click()
    await page.waitForTimeout(3000) //used for refference no must
    
})