# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adactin1.spec.js >> pom 
- Location: tests\adactin1.spec.js:4:5

# Error details

```
TypeError: _LoginPage.LoginPage is not a constructor
```

# Test source

```ts
  1  | import{test} from '@playwright/test'
  2  | import {LoginPage} from '../page/LoginPage'
  3  | import {NewUser}   from '../page/LoginPage'
  4  | test('pom ', async({page}) => {
> 5  |     const login = new LoginPage(page)
     |                   ^ TypeError: _LoginPage.LoginPage is not a constructor
  6  |     await login.visitUrl()
  7  |     await login.enterUsername()
  8  |     await login.enterPassword()
  9  |     await login.clickButton()
  10 | 
  11 |     const newRegister= new NewUser(page)
  12 |   
  13 | 
  14 | 
  15 |     
  16 |     })
  17 |  
```