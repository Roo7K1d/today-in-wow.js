// Dependencies

const { getRawData } = require("../getRawData.js")

/**
 * Fetches all items from the quests category
 *
 * @param  {String}     [locale]    The desired locale of the results, e.g. "de", "en", "es".
 * 
 * @return {Promise}                Returns an array of all quests info
 * 
 * @author RootK1d
 * @since  1.0.0
 * @type   {Function}
 */

function getQuests(locale) {
    return getRawData(locale, 2);
}

module.exports = { getQuests };