import ISiteSetting from '../types/ISiteSetting'

const SiteSettings: { [id: string] : ISiteSetting } = {}

SiteSettings["test"] = {
    url: "www.testsite.org",
    actions: "test/actions",
    viewport: {
        width: 1024,
        height: 768
    },
    proxy: {
        ip: "10.0.0.1",
        port: "80"
    }
}

SiteSettings["fol"] = {
    url: "https://www.fondosonline.com",
    actions: "fol/actions",
    viewport: {
        width: 800,
        height: 600
    },
    proxy: {
        ip: "10.0.0.1",
        port: "80"
    }
}

SiteSettings["bm"] = {
    url: "https://bullmarketbrokers.com",
    actions: "bm/actions",
    viewport: {
        width: 800,
        height: 600
    },
    proxy: {
        ip: "10.0.0.1",
        port: "80"
    }
}
export { SiteSettings }