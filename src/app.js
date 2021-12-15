const express = require('express')
const path = require('path')
const hbs = require('hbs')

const port = process.env.PORT || 3000

const app = express()

const partPaths = path.join(__dirname, '/templates/partials')

const viewsPath = path.join(__dirname, '/templates/views')
// Set up handlebars views and location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partPaths)

app.use(express.static(path.join(__dirname, '/css')))

arr = [
       {name: 'ITC, A Desi Meme Stock?', text: 'Desi Desi Desi', link: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202109/itc-bull-sixteen_nine.jpg'},
       {name: 'Gifting Stock to your loved ones?', text: 'Happy Birthday to you!, Here have some TATA Steel', link: 'https://uploads-ssl.webflow.com/6162a962dc629739e87e64b1/61b97b22391775ec0dc9a3b0_Gifting-Stocks.png'}, 
       {name: 'Is Brave Browser truly secure?', text: 'Not too brave afterall', link: 'https://imgix.lifehacker.com.au/content/uploads/sites/4/2017/09/brave-browser.jpg?ar=16%3A9&auto=format&fit=crop&q=80&w=1280&nrs=40'},
       {name: 'Print Mania at Govt.?', text: 'Would it lead to a surge in crypto use?', link: 'https://images.livemint.com/img/2021/02/14/1600x900/2021-01-11T144717Z_275782552_RC2Q5L9ZAS4E_RTRMADP_3_CRYPTO-CURRENCY_1610445717396_1610445743829_1613318148161.JPG'},
       {name: 'Macroprofits in Microfinance', text: 'The Multi-Billion Dollar Industry of Micro-Finance', link: 'https://indiaforensic.com/certifications/wp-content/uploads/2016/06/microfinance-g20.jpg'},
       {name: 'Intra-Day trading', text: 'idk what it means, so <insert>', link: 'https://wp-asset.groww.in/wp-content/uploads/2019/12/03151709/Blog-banner-images-06-scaled.png'},
    
    ]

app.get('/', (req, res) => {
    res.render('index', { arr: arr })
})

app.listen(port, () => {
    console.log('Server is up')
})