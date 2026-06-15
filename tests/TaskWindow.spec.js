import{test} from '@playwright/test'
test ('Window Handling', async ({ browser}) => {
    const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto('https://www.amazon.in/')

    console.log( " to iphone 17 pro in Amazon")
    
    await page.locator('//input[@id="twotabsearchtextbox"]').fill(' iphone 17 pro')
    await page.keyboard.press('Enter')

    const [newPage] =  await Promise.all ( [ context.waitForEvent('page'),
      page.click('//h2[contains(@aria-label,"Sponsored Ad - iPhone 17 Pro 256 GB: 15.93 cm (6.3″) ")]')
       ])
    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
})