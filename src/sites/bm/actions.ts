import puppeteer from 'puppeteer'
import ISiteSetting from '../../types/ISiteSetting'
import IPptrSetting from '../../types/IPptrSetting'
import Login from './actions.login'
import { navigateCotizaciones } from './actions.navigate'
import { navigateCedears } from './actions.navigate'
import Operar from './actions.operar'

export async function main (site_settings: ISiteSetting, pptr_settings: IPptrSetting) {
  console.log("BM actions")
  
  const browser = await puppeteer.launch(pptr_settings)
  const page = await browser.newPage()
  await page.goto(site_settings.url)
  
  console.info(await page.title());
  await Login(page)
  let pages = await browser.pages()
  console.info(await page.title());
  await navigateCotizaciones(page)
  console.info(await page.title());
  await navigateCedears(page)
  // await browser.close();
} 




