// Dependencies

const { getRawData } = require("../getRawData.js")

/**
 * Fetches all items from the Shadowlands category
 *
 * @param  {String}     [locale]    The desired locale of the results, e.g. "de", "en", "es".
 * 
 * @return {Promise}                Returns an array of all Shadowlands info
 * 
 * @author RootK1d
 * @since  1.0.0
 * @type   {Function}
 */

function getShadowlands(locale) {
    return getRawData(locale, 5);
}

module.exports = { getShadowlands };