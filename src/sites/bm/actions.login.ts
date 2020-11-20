import puppeteer from 'puppeteer'
import xpath from './xpaths'

const Login = async (page: puppeteer.Page) => {
  console.log("Login()")
  // await page.waitForXPath(xpath.login.salir);
  const link_salir = await page.$x(xpath.login.salir);
  if (link_salir.length) {
    console.log("Already logged in")
    return
  }

  // await page.waitForXPath(xpath.login.ingresar);
  const link_ingresar = await page.$x(xpath.login.ingresar);
  if (link_ingresar) {
    await link_ingresar[0].click();
  } else {
    throw new Error("login link not found");
  }

  const username_input = await page.$x(xpath.login.usuario);
  const password_input = await page.$x(xpath.login.password);
  const login_submit = await page.$x(xpath.login.submit);

  if (username_input.length && password_input.length) {
    await username_input[0].type('26031048')
    await password_input[0].type('l1ghtFr4m3')
    await login_submit[0].click()
  }
}
export = Login