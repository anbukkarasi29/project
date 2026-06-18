# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adactin.spec.js >> pom 
- Location: tests\adactin.spec.js:6:5

# Error details

```
TypeError: _LoginPage.LoginPage is not a constructor
```

# Test source

```ts
  1  | // pom ... import the class loginPage ,
  2  | //  using constructor, call the funtion we must use 'new loginPage(page)' for to create refference
  3  | 
  4  | import{test} from '@playwright/test'
  5  | import {LoginPage} from '../page/LoginPage'
  6  | test('pom ', async({page}) => {
> 7  |     const login = new LoginPage(page)
     |                   ^ TypeError: _LoginPage.LoginPage is not a constructor
  8  |     await login.visitUrl()
  9  |     await login.enterUsername()
  10 |     await login.enterPassword()
  11 |     await login.clickButton()
  12 | 
  13 |     
  14 |     })
  15 |  
```