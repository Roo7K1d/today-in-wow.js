// Dependencies

const { getRawData } = require("../getRawData.js")

/**
 * Fetches all items from the Legion category
 *
 * @param  {String}     [locale]    The desired locale of the results, e.g. "de", "en", "es".
 * 
 * @return {Promise}                Returns an array of all Legion info
 * 
 * @author RootK1d
 * @since  1.0.0
 * @type   {Function}
 */

function getLegion(locale) {
    return getRawData(locale, 7);
}

module.exports = { getLegion };