// Dependencies

const { getRawData } = require("../getRawData.js")

/**
 * Fetches all items from the dungeons & raids category
 *
 * @param  {String}     [locale]    The desired locale of the results, e.g. "de", "en", "es".
 * 
 * @return {Promise}                Returns an array of all dungeons & raids info
 * 
 * @author RootK1d
 * @since  1.0.0
 * @type   {Function}
 */

function getDungeonsAndRaids(locale) {
    return getRawData(locale, 0);
}

module.exports = {getDungeonsAndRaids};