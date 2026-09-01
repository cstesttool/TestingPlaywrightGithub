import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

type MyFixtures = {
    loginPage: LoginPage;
}

export const test = base.extend<MyFixtures>({
    
    loginPage: async({page}, use)=>{
        console.log("login page started")
        const loginPage = new LoginPage(page)
        await use(loginPage)        
        console.log("login page closed")
    }
})

