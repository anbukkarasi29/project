// Window Handling
import{test} from '@playwright/test'
test ('Window Handling', async ({ browser}) => {
    const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto('https://www.amazon.in/')

    console.log( " to search samsung TV in Amazon")
    
    await page.locator('//input[@id="twotabsearchtextbox"]').fill(' samsung tv 55 inch')
    await page.keyboard.press('Enter')

    const [newPage] =  await Promise.all ( [  context.waitForEvent('page'),
      page.click('//h2[contains(@aria-label,"Sponsored Ad - 55 inches Neo QLED 4K Samsung Vision AI Smart TV QA55QN2EHAULXL")]')
       ] )
    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
})