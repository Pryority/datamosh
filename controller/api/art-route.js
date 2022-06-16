const router = require('express').Router();

router.get('/', (req, res) => {
    artworks = [
        {
            src: "images/Tumbling.gif",
            name: "Tumbling"
        },
        {
            src: "images/water_creature.gif",
            name: "Tumbling"
        },
        {
            src: "images/Tokyo_final.gif",
            name: "Tumbling"
        },
        {
            src: "images/Tumbling.gif",
            name: "Tumbling"
        },
    ]
})

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;