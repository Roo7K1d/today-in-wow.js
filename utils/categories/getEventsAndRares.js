// Dependencies

const { getRawData } = require("../getRawData.js")

/**
 * Fetches all items from the events & rares category
 *
 * @param  {String}     [locale]    The desired locale of the results, e.g. "de", "en", "es".
 * 
 * @return {Promise}                Returns an array of all events info
 * 
 * @author RootK1d
 * @since  1.0.0
 * @type   {Function}
 */

function getEventsAndRares(locale) {
    return getRawData(locale, 1);
}

module.exports = { getEventsAndRares };