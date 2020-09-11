import puppeteer from 'puppeteer'
import ISiteSetting from '../../types/ISiteSetting'
import IPptrSetting from '../../types/IPptrSetting'
import GoToFondos from './actions.GoToFondos'
import GetSelects from './actions.GetSelects'
import GetOptions from './actions.GetOptions'

export async function main (site_settings: ISiteSetting, pptr_settings: IPptrSetting) {
  console.log("FOL actions")
  
  const browser = await puppeteer.launch(pptr_settings)
  const page = await browser.newPage()
  await page.goto(site_settings.url)
  
  await GoToFondos(page)
  const selects = await GetSelects(page)
  for (const select_promise of selects) {
    const select = await select_promise
    console.log(`Select ID: ${select.text}`)
    const options = await GetOptions(select.handler)
  }

  await browser.close();
} 




