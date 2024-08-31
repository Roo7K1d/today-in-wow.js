(async () => {
    const todayInWow = require("./index.js")

    let eventsAndRares = await todayInWow.getEventsAndRares("de")

    let delves = eventsAndRares.groups.filter(group => {
        return group.id == "tww-bountiful-delves"
    })

    console.log(delves[0].content)
})()
