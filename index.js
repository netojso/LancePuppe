const puppeteer = require('puppeteer');
// const puppeteer = require('puppeteer');
// const fs = require('fs');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.instagram.com/rocketseat_oficial');

// const imgList = await page.evaluate(() => {

//         const nodelist = document.querySelectorAll("article img")
//         const imgarray = [...nodelist]
//         const imglist = imgarray.map( ({src}) => ({src}))
//         return imglist
//   })

//   console.log(imgList)

//   fs.writeFile('instagram.json', JSON.stringify(imgList,null,2), err => {
//     if (err) throw new Error('deu ruim')
//     console.log("Well done")
//  })

// })();

// const puppeteer = require('puppeteer');
// const screenshot = 'youtube_fm_dreams_video.png'
// try {
//   (async () => {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto('https://youtube.com')
//     await page.type('input#search', 'Fleetwood Mac Dreams')
//     await page.click('button#search-icon-legacy')
//     await page.waitForSelector('ytd-app')
//     await page.screenshot({ path: 'youtube_fm_dreams_list.png' })
//     const videos = await page.$$('a#thumbnail')
//     await videos[5].click()
//     await page.waitForSelector('.html5-video-container')
//     await page.waitFor(5000)
//     await page.screenshot({ path: screenshot })
//     await browser.close()
//     console.log('See screenshot: ' + screenshot)
//   })()
// } catch (err) {
//   console.error(err)
// }

    try{
      (async () => {
        const browser = await puppeteer.launch({headless:false})
        const page = await browser.newPage()
        await page.goto('https://www.lance24h.com.br')
        await page.click('li.Li2 a')
        await page.waitFor(1000)
        await page.type('input#Log_Email', 'antonioluciofb', {delay:300})
        await page.waitFor(1000)
        await page.type('input#Log_Senha', 'aleatorio22A', {delay:300})
        await page.waitFor(1000)
        await page.click('div#FFormLogin_B button')
        await page.waitFor(2000)
        await page.goto('https://www.lance24h.com.br/Detalhes.php?Titulo=Pacote-50-Lances&Codigo=43042')
        await page.waitFor(2000)
        const timer = await page.evaluate ( async () =>{
          
          setInterval(function(){ 
            
          const contador = document.getElementById("L_ContDown_1_43042")
          const contador2 = document.getElementById("L_ContDown_2_43042")
          console.log(contador.textContent)
          console.log(contador2.textContent)

          // if (contador == 0 && contador2 == 8) {
          //     await page.click('div#L_BotaoA_43042 a')
          // } 
        
              }, 1000);
         
        })
      })()
    } catch (err) {
      console.error(err)
    }