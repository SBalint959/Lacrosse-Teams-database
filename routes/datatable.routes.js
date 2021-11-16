const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', async function (req, res, next) {
    const sqlPodaci = `SELECT * FROM topplayerteams NATURAL JOIN topplayers`;
    try {
        const resultPodaci = (await db.query(sqlPodaci, [])).rows;
        const rawPodaci = JSON.stringify(resultPodaci)
        const jsonPodaci = JSON.parse(rawPodaci);

        res.render('datatable', {
            title: 'Baza podataka',
            podaci: jsonPodaci,
            linkActive: 'datatable'
        });
    } catch (err) {
        console.log(err);
    }
    
});

module.exports = router;