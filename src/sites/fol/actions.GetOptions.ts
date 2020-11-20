import puppeteer from 'puppeteer'

const GetOptions = async (page: puppeteer.Page, select_id: string) => {
  const xpath = `//select[@id="${select_id}"]/option`
  const options_handle = await page.$x(xpath)
  console.log(`Found ${options_handle.length} options`)
  const options = []
  for (const option of options_handle) {
    const option_text = await GetText(option)
    options.push(option_text)
    console.log(option_text)
  }
  return options
}
const GetText = async (element: puppeteer.ElementHandle) => {
  const element_handle = await element.getProperty('innerText')
  const element_text = await element_handle.jsonValue()
  return String(element_text)
}

export = GetOptions