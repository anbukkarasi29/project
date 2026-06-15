export class NewUser {
    constructor(page) {
        this.page= page
        this.username= page.locator('//input[@id="username"]')
        this.password=page.locator('//input[@id="password"]')
        this.confirmpassword=page.locator('id="re_password"')
        this.fullname=page.locator('//inpit[@id="full_name"]')
        this.emailaddress=page.locator('//input[@id="email_add"]')
        this.catchimage=page.locator('//input[@id="captcha"]')
        this.catchtext=page.locator('//input[@id="captcha-form"]')
        this.termscondition=page.locator('//input[@id="tnc_box"]')
        this.register=page.locator('//input[@id="Submit"]')

    }    async visitNewuserPage()
                    {
            await this.page.goto('https://adactinhotelapp.com/Register.php')
                  }
    async enterUsername()
    {
        await this.username.fill('Hari23')
    }
    async enterPassword()
    {
        await this.password.fill('varagan@123')
    }
    async enterConfirmpassword()
    {
        await this.confirmpassword.fill('varagan@123')
    }
    async enterFullname()
    {
        await this.fullname.fill('Harivaragan')
    }
    async enterEmailaddress()
    {
        await this.emailaddress.fill('roosod@gmail.com')

    }
    async enterCatchimage()
    {
        await this.catchimage()
    }
    async enterCatchtext()
    {
        await this.catchtext.fill('eophtic')
    }
    async clickTermscondition()
    {
        await this.termscondition.click()
    }
    async clickRegister()
    {
        await this.register.click()
    }

}
        
    
