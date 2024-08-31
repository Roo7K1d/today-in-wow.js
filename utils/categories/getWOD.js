// Dependencies

const { getRawData } = require("../getRawData.js")

/**
 * Fetches all items from the Warlords of Draenor category
 *
 * @param  {String}     [locale]    The desired locale of the results, e.g. "de", "en", "es".
 * 
 * @return {Promise}                Returns an array of all Warlords of Draenor info
 * 
 * @author RootK1d
 * @since  1.0.0
 * @type   {Function}
 */

function getWOD(locale) {
    return getRawData(locale, 8);
}

module.exports = { getWOD };