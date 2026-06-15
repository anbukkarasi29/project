//dropdownhandling
//Dropdown methods ------ used for to select value from dropdown box or list
// three methods used
//1.index()
//2.value()
//3.label() for this method we should use object inside method {key : value}

//selectoption() method used for to select value in dropdown box inside method we give object only

import { test } from '@playwright/test';
test('validate Dropdown handling', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns/' )
    //single dropdown
    
    const SingleDropdown = await page.locator('//select[@id="fruits"]') 
    const textSingle= await SingleDropdown.selectOption({ index: 2 } )
    const text1= await SingleDropdown.locator('option:checked').textContent()
    console.log(text1)
    await page.waitForTimeout(3000)

    //multiDropdown
    const multiDropdown= await page.locator('//select[@id="superheros"]')
    await multiDropdown.selectOption( [ {index: 2},  { value: "ca"}, { label: "Iron Man"} ] )
    const text= await multiDropdown.locator('option:checked').allTextContents()
    console.log(text)
    //await page.waitForTimeout(3000)
}) 










