import{test} from '@playwright/test'
import {LoginPage} from '../page/LoginPage'
import {NewUser}   from '../page/LoginPage'
test('pom ', async({page}) => {
    const login = new LoginPage(page)
    await login.visitUrl()
    await login.enterUsername()
    await login.enterPassword()
    await login.clickButton()

    const newRegister= new NewUser(page)
  


    
    })
 