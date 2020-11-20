import puppeteer from 'puppeteer'
import xpath from './xpaths'
import GetSelectId from './actions.GetSelectId'

const GetSelects = async (page: puppeteer.Page) => {
    const handler_selects = await page.$x(xpath.select.fondos)
    if (handler_selects) {
      console.log(`Found ${handler_selects.length} select elements`)
      const select_ids: string[] = []
      for (const handler of handler_selects){
        const select_id = await GetSelectId(handler)
        select_ids.push(select_id)
      }
      return select_ids
    } else {
      throw new Error("Selects not found");
    }
  }
  export = GetSelects