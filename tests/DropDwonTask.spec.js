import{test} from '@playwright/test'
test('Task Alert handling', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="name"]').fill('NAME')
    await page.locator('//input[@id="email"]').fill('email')
    await page.locator('//textarea[@id="textarea"]').fill('4,southst,neelangarai')
    await page.locator('//input[@id="male"]').click()
    await page.locator('//input[@id="female"]').click()
    await page.locator('//input[@id="sunday"]').click()
    await page.locator('//input[@id="monday"]').click()
    await page.locator('//input[@id="tuesday"]').click()
    await page.locator('//input[@id="wednesday"]').click()
    await page.locator('//input[@id="thursday"]').click()
    await page.locator('//input[@id="friday"]').click()
    await page.locator('//input[@id="saturday"]').click()

//  DropDown Handling
    const dropDown = await page.locator('//select[@id="country"]')
    await dropDown.selectOption({index:3})
    const text = await dropDown.locator('Option:checked').textContent()
    console.log(text)
     await page.waitForTimeout(3000)

    const dropDown2 = await page.locator('//select[@id="colors"]')
    await dropDown2.selectOption({index:3},{index:2},{index:1})
    const text1 =  await dropDown2.locator('option:checked').allTextContents()
    console.log(text1)
    await page.waitForTimeout(3000)
    
    const dropDown3= await page.locator('//select[@id="animals"]')
    await dropDown3.selectOption({index:3})
    const text2 =  await dropDown3.locator('option:checked').textContent()
    console.log(text2)
    await page.waitForTimeout(3000)
    


} )