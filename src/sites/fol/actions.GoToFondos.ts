import puppeteer from 'puppeteer'
import xpath from './xpaths'

const GoToFondos = async (page: puppeteer.Page) => {
    const handler_link_fondos = await page.waitForXPath(xpath.link.fondos);
    if (handler_link_fondos) {
      await handler_link_fondos.click();
      await page.waitForNavigation({waitUntil: 'domcontentloaded'})
    } else {
      throw new Error("Link not found");
    }
  }
  export = GoToFondos