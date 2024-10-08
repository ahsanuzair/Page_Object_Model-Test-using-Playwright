const { chromium } = require("playwright");
import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login";

test("form demo", async () => {


  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  const Login = new LoginPage(page)


  await Login.gotoLoginPage()
  await Login.login('tomsmith','SuperSecretPassword!')

//   await page.getByLabel("Username").click();
//   await page.getByLabel("Username").fill("tomsmith");
//   await page.getByLabel("Password").click();
//   await page.getByLabel("Password").fill("SuperSecretPassword!");
//   await page.getByRole("button", { name: " Login" }).click();
//   await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})
