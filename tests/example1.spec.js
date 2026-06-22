import{test} from '@playwright/test';
test("validate facebook Application", async( {page} ) => {
    await page.goto("https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F");
    console.log("anbu")
    console.log("welcome")
    console.log("practice")
} )