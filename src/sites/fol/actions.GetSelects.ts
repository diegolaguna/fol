import puppeteer from 'puppeteer'
import xpath from './xpaths'
import GetSelectId from './actions.GetSelectId'

const GetSelects = async (page: puppeteer.Page) => {
    const handler_selects = await page.$x(xpath.select.fondos)
    if (handler_selects) {
      console.log(`Found ${handler_selects.length} select elements`)
      return handler_selects.map( async (handler) => {
        return {
          handler: handler,
          text: await GetSelectId(handler)
        }
      } )
    } else {
      throw new Error("Selects not found");
    }
  }
  export = GetSelects