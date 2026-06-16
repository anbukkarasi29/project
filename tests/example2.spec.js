import{test} from "@playwright/test";
test("validate flipcKart Application", async( {page} ) => {

    await page.goto("https://www.flipkart.com/");
})