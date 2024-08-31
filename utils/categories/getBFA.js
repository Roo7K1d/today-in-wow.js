// Dependencies

const { getRawData } = require("../getRawData.js")

/**
 * Fetches all items from the Battle for Azeroth category
 *
 * @param  {String}     [locale]    The desired locale of the results, e.g. "de", "en", "es".
 * 
 * @return {Promise}                Returns an array of all Battle for Azeroth info
 * 
 * @author RootK1d
 * @since  1.0.0
 * @type   {Function}
 */

function getBFA(locale) {
    return getRawData(locale, 6);
}

module.exports = { getBFA };