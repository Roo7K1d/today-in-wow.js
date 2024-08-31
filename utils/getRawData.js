// Dependencies

const cheerio = require("cheerio")
const axios = require("axios")

/**
 * The core scraping function for the today-in-wow list from WoWHead.
 *
 * @param  {String}         [locale]    The desired locale of the results, e.g. "de", "en", "es".
 * @param  {Int16Array}     category    The category you wish to get raw data for, e.g. 0 (Dungeons & Raids), 1 (Events & Rares)...
 * 
 * @return {Promise}                Returns an array of the data categories
 * 
 * @author RootK1d
 * @since  1.0.0
 * @type   {Function}
 */

function getRawData(locale, category) {

    //Fall back to english of no other locale is provided
    if (!locale) locale = "en";

    let result = axios.get(`https://www.wowhead.com/${locale}/today-in-wow`).then(({ data }) => {

        const $ = cheerio.load(data);
        return JSON.parse($("script[id='data.wow.todayInWow']").contents())[category];

    })

    return result
}

module.exports = {getRawData}