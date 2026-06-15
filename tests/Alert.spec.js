// Alert handling 
//there are 3 methods in the alert handling
//1.Simple alert
//2.conformation altert
//promt alert 
//page.once ----> it used to handle single altert at a time
//page.on ------>it used to multiful altert  at the time
// dialoge its refference it has lot of method inside , using refference we can call of methods
//dialog.message(), dialog.accept()
// if u dont have lot any id to to locator  or only hav class, 
// that class may be 1 of 3 means at that time we can use whole ().node[1] or [2] 
//   to click box we can use click()
// to check box we can use check()

import{test} from '@playwright/test';
test ('Alert handling application', async ({page}) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')

 //Simple alert
    await page.on ('dialog', async(dialog) =>{
    await dialog.accept()
    console.log("simple alert", dialog.message())
    })
    await page.locator('//button[@class="btn btn-danger"]') .click()
    await page.waitForTimeout(3000)

 /*conformation alert()
   await page.once ('dialog', async(dialog) =>{
   await dialog.accept()
   console.log("conformation alert", dialog.message())
   }) */
   await page.locator('(//a[@class="analystic"])[2]').click()
   await page.locator('//button[@class="btn btn-primary"]') .click()
   await page.waitForTimeout(3000)

//prompt alert
  /* await page.once ('dialog', async(dialog) =>{
   await dialog.accept()
   console.log("prompt alert", dialog.message())
   })
*/   await page.locator('(//a[@class="analystic"])[3]').click()
   await page.locator('//button[@class="btn btn-info"]').click()
   await page.waitForTimeout(3000)
    })