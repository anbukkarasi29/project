// WEb Table
// tocontain   ---->any of one data match
//toequal ---extractmatch
import{test, expect} from '@playwright/test'
test('WebTable handling', async({page}) => {
    await page.goto('https://qavbox.github.io/demo/webtable/') 

  // to select first row from the table  tr[1]

    const rowData =await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
    console.log(rowData)
    
 // to use expect.. 
    await expect(rowData).toContain('System Architect')  // any of one data match
    await expect(rowData).toEqual([ 
        'Tiger Nixon',
        'System Architect',
        'Edinburgh',
        '61',
        '2011/04/25',
        '$320,800'])                                    // accurate match

  // to select first columan fron the table i.e td[1]      

    const columData =await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents()
    console.log(columData)
    await expect(columData).toContain('Sonya Frost')

 //  to select paricular data
    const rowColum =await page.locator('//table[@id="table02"]//tbody//tr[3]//td[4]').textContent()
    console.log(rowColum)

})