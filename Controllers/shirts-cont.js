const rp = require('request-promise');
var cheerio = require('cheerio');
require('dotenv').config();
const Shirt = require('../Models/shirts-model')

module.exports.postShirts = async function postShirts(numberOfImages) {
    const url = `https://www2.hm.com/en_us/men/products/t-shirts-tank-tops.html?sort=stock&image-size=small&image=model&offset=0&page-size=${numberOfImages}`;
    const dataExtracted = []

    rp(url).then((html) => {
        const $ = cheerio.load(html);

        $('div[class=image-container] > a > .item-image').each((i, img) => {
            const src = img.attribs['data-src'];
            const alt = img.attribs.alt;
            dataExtracted.push(new Shirt({
                src: src,
                alt: alt,
            }));
        })
        console.log(`Scraped ${dataExtracted.length} Images`);

    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        return dataExtracted;
    });
}