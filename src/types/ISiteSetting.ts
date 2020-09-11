interface ISiteSetting {
    url: string,
    actions: string,
    viewport: { width: number, height: number },
    proxy: { ip: string, port: string }
}
export = ISiteSetting