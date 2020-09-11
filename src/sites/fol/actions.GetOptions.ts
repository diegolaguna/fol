import puppeteer from 'puppeteer'

const GetOptions = async (select: puppeteer.ElementHandle) => {
  const options_handle = await select.$x('./option')
  console.log(`Found ${options_handle.length} options`)
  for (const option of options_handle) {
    console.log( await GetText(option) )
  }
}
const GetText = async (element: puppeteer.ElementHandle) => {
  const element_handle = await element.getProperty('innerText')
  const element_text = await element_handle.jsonValue()
  return element_text
}

export = GetOptions