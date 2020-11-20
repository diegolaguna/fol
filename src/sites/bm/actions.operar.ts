import puppeteer from 'puppeteer'
import Operacion from './enum.operacion'
import xpath from './xpaths'

const Operar = async (page: puppeteer.Page, tipo_operacion: Operacion) => {
  console.log(`Operar: ${tipo_operacion}`)
}
export = Operar