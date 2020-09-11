import { settings } from './defaults/pptr'
import { SiteSettings } from './sites/settings'

(async () => {
  const args = process.argv.slice(2)

  const mode = args[0] || "normal"
  const site_id = args[1] || "test"
  
  const pptr_settings = settings[mode]
  const site_settings = SiteSettings[site_id]
  
  const script = await import(`./sites/${site_settings.actions}`);
  script.main(site_settings, pptr_settings)

})();