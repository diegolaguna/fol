import IPptrSetting from '../types/IPptrSetting'

const settings: { [id: string] : IPptrSetting; } = {}

settings["normal"] = {
    headless: true,
    slowMo: 250,
    devtools: false,
    args: ['--start-maximized']
}

settings["debug"] = {
    headless: false,
    slowMo: 500,
    devtools: true,
    args: ['--start-maximized']
}

export { settings };