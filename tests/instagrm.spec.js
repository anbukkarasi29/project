// Instagraam script
import{test} from '@playwright/test';
test("validate the application", async({page}) => {
    await page.goto ('https://www.instagram.com/')
    await page.locator ( '//input[@id="_r_1l_"]').fill("your-username")
    await page.locator ('//input[@type="password"]').fill("your-password")
    await page.locator ('//span[text()=" Log in"]').click()
    await page.waitForTimeout(3000) //used for refference no must

})