// pom ... import the class loginPage ,
//  using constructor, call the funtion we must use 'new loginPage(page)' for to create refference

import{test} from '@playwright/test'
import {LoginPage} from '../page/LoginPage'
test('pom ', async({page}) => {
    const login = new LoginPage(page)
    await login.visitUrl()
    await login.enterUsername()
    await login.enterPassword()
    await login.clickButton()

    
    })
 