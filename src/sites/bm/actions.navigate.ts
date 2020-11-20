import puppeteer from 'puppeteer'
import xpath from './xpaths'

const navigateCotizaciones = async (page: puppeteer.Page) => {
  console.log("navigateCotizaciones()");
  try {
    const cotizaciones_link = await page.$x(xpath.link.cotizaciones)
    if (cotizaciones_link.length) {
      console.info(cotizaciones_link)
      // cotizaciones_link[0].click()
    }
  } catch (e) {
    console.log(e);
  }
}
const navigateCedears = async (page: puppeteer.Page) => {
  console.log("navigateCedears()");
  const cedears_link = await page.$x(xpath.link.cedears)
  if (cedears_link.length) {
    console.info(cedears_link)

    // cedears_link[0].click()
  }
}

export { navigateCotizaciones, navigateCedears }