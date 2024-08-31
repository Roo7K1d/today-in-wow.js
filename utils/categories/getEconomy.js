// Dependencies

const { getRawData } = require("../getRawData.js")

/**
 * Fetches all items from the economy category
 *
 * @param  {String}     [locale]    The desired locale of the results, e.g. "de", "en", "es".
 * 
 * @return {Promise}                Returns an array of all economy info
 * 
 * @author RootK1d
 * @since  1.0.0
 * @type   {Function}
 */

function getEconomy(locale) {
    return getRawData(locale, 3);
}

module.exports = { getEconomy };