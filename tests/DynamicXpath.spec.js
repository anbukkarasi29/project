// Dynamic X-Path

// ancestor
//parent
// preceding-sibling
// child
// following-siblings
// descendant
 
// inter relationship of paths

import{test} from '@playwright/test'
import { promises } from 'node:dns'
test(' Dynamic X-path Handling', async({browser}) => {
  const context = await browser.newContext()
  const page    = await browser.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill(' samsung tv 55 inch')
    await page.keyboard.press('Enter')
  const  [newPage] = await Promise.all( [context.waitForEvent('page'),
  page.click('')])
  await newPage.waitForLoadState()
  const title = await newPage.title()
  console.log(title)

})