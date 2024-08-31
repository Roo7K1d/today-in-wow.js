// Dependencies

const { getRawData } = require("../getRawData.js")

/**
 * Fetches all items from the Dragonflight category
 *
 * @param  {String}     [locale]    The desired locale of the results, e.g. "de", "en", "es".
 * 
 * @return {Promise}                Returns an array of all Dragonflight info
 * 
 * @author RootK1d
 * @since  1.0.0
 * @type   {Function}
 */

function getDragonflight(locale) {
    return getRawData(locale, 4);
}

module.exports = { getDragonflight };