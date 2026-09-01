import { test } from '../fixtures/test'


test("Login Test", async({loginPage, page })=>{
    await page.goto("https://the-internet.herokuapp.com/login")
    await page.waitForTimeout(2000)
    await loginPage.login("tomsmith", "SuperSecretPassword!")
})

test("Login Test1", async({loginPage, page })=>{
    await page.goto("https://the-internet.herokuapp.com/login")
    await page.waitForTimeout(2000)
    await loginPage.login("tomsmith", "SuperSecretPassword!")
})