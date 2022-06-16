const router = require('express').Router();

router.get('/', (req, res) => {
    getArtData()

    res.render('home', { artworks: artworks });
})

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>");
});

const getArtData = () => {
    return artworks = [
        {
            src: "images/Tumbling.gif",
            name: "Tumbling"
        },
        {
            src: "images/water_creature.gif",
            name: "Water Creature"
        },
        {
            src: "images/Tokyo_final.gif",
            name: "Tokyo"
        },
        {
            src: "images/moss_final.gif",
            name: "Specimen Experiment: Moss"
        },
        {
            src: "images/Dancing.gif",
            name: "Dance"
        },
        {
            src: "images/streetlight.gif",
            name: "Streetlight"
        },
    ]
}



module.exports = router;