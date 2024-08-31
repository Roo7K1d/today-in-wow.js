// Dependencies

const { getDungeonsAndRaids } = require("./utils/categories/getDungeonsAndRaids.js");
const { getEventsAndRares } = require("./utils/categories/getEventsAndRares.js");
const { getQuests } = require("./utils/categories/getQuests.js");
const { getEconomy } = require("./utils/categories/getEconomy.js");
const { getDragonflight } = require("./utils/categories/getDragonflight.js");
const { getShadowlands } = require("./utils/categories/getShadowlands.js");
const { getBFA } = require("./utils/categories/getBFA.js");
const { getLegion } = require("./utils/categories/getLegion.js");
const { getWOD } = require("./utils/categories/getWOD.js");

// Export all functions

module.exports = {
    getDungeonsAndRaids,
    getEventsAndRares,
    getQuests,
    getEconomy,
    getDragonflight,
    getShadowlands,
    getBFA,
    getLegion,
    getWOD
}