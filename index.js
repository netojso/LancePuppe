const puppeteer = require('puppeteer');
require('dotenv').config();

  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.lance24h.com.br')

    console.log('Acessei o site do Lance 24h')

    await page.waitForSelector('li.Li2')
    await page.click('li.Li2 a')
    await page.waitFor(1000)
    await page.type('input#Log_Email', process.env.USERNAME, {delay:300})

    console.log(`Digitei seu username: ${process.env.USERNAME}`)

    await page.waitFor(2000)
    await page.type('input#Log_Senha', process.env.PASSWORD, {delay:300})

    console.log(`Digitei sua senha: ${process.env.PASSWORD}`)

    await page.waitFor(1000)
    await page.click('div#FFormLogin_B button')

    console.log('Cliquei em entrar')

    await page.waitFor(2000)
    await page.waitForSelector('div.row')
    await page.waitFor(2000)

    console.log('Estou de olho no lance')

   const timer = setInterval(async () => {

        const contadores = await page.evaluate(() => {

          const contador1 = document.getElementById("L_ContDown_1_43035")
          const contador2 = document.getElementById("L_ContDown_2_43035")
          const qtdLances = document.getElementById("F_QtdLancesR")
          return [contador1.textContent, contador2.textContent, qtdLances.textContent]
        })

        const qtdLance = Number(contadores[2])

    
        while (qtdLance > 0 && contadores[0] === '0' && contadores[1] === '4') {
          console.log('Dei um lance!')

          await page.click('div#L_BotaoA_43035 a')

          return;
        }

        if (qtdLance == 0) {
            clearInterval(timer)
            console.log('Opa, você chegou no limite de lances. Vamos fechar o navegador')
            await browser.close()
            process.on('exit', () => {
              console.log('Fechando terminal.')
            })
        } else {
          console.log('Ainda não chegou em 04 segundos para eu dar um lance.')
        }
        
   }, 1000)
  })()
