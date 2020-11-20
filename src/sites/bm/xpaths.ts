const xpath = {
  login: {
    ingresar: '//div[contains(@class, "hidden-xs")]//a[contains(., "Ingresar")]',
    usuario: '//input[@id="txt_modal_login_idNumber"]',
    password: '//input[@id="txt_modal_login_password"]',
    submit: '//button[@id="btn_login_ok"]',
    salir: '//div[contains(@class, "hidden-xs")]//a[contains(., "Salir")]'
  },
  link: {
    cotizaciones: '//a[contains(., "COTIZACIONES")]',
    cedears: '//a[contains(., "Cedears")]'
  }

}

export = xpath