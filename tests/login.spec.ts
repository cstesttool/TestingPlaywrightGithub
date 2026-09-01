import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


test("Login Test Login Test Login Test Login Test Login Test Login Test Login Test Login Test Login Test Login Test Login Test Login Test Login Test Login Test Login Test Login Test ",
    async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login")
    const loginPage = new LoginPage(page)
    await loginPage.login("tomsmith", "SuperSecretPassword!")
})
