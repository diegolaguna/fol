import puppeteer from 'puppeteer'

const GetSelectId = async (select: puppeteer.ElementHandle) => {
  const property_id = await select.getProperty('id')
  const id_text= await property_id.jsonValue()
  return String(id_text)
}

export = GetSelectId