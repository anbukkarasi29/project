// Frame Handling.... we can use framelocator
// inside frame if u hav 1 of 2 id in single text box , u dont use node
// within frame if we hav  more than two text box, same id for more than 1 ..u hav to use node


import{test} from '@playwright/test'
test("Frame Handling", async({page}) =>  {
    await page.goto('https://demo.automationtesting.in/Frames.html')

    //single frame

    const singleFrame= await page.frameLocator('//iframe[@id="singleframe"]')  //  first single frame address
    await singleFrame.locator('//input[@type="text"]').fill('hi chozhan')     // single frame text box 

    await page.locator('(//a[@class="analystic"])[2]').click()               // second tab button address

    // multiFrame
   const outerFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]') // 1st frame
   const innerFrame = await outerFrame.frameLocator('//iframe[@src="SingleFrame.html"]') // 2nd frame
   await innerFrame.locator('//input[@type="text"]').fill('Hello Guys')  // 2 nd frame text box
})