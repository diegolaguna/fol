import ISiteSetting from '../../types/ISiteSetting'
import IPptrSetting from '../../types/IPptrSetting'


const main = (site_settings : ISiteSetting, pptr_settings : IPptrSetting) => {
  console.log("TEST actions")
  console.log(pptr_settings)
  console.log(site_settings)
}
export { main }