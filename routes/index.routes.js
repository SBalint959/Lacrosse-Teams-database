const express = require('express');
const router = express.Router();
const { auth } = require('express-openid-connect');
const db = require('../db');
const app = express();
const fs = require('fs');
const { Parser } = require('json2csv');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: '9uXfHuiv9lYR42LkAvUzxe8H4un2tyOYYWin3ymJxr-TAsCT1J20hxg73cvw6sIC',
  baseURL: 'http://localhost:3000',
  clientID: 'aNSzhblfAMBowH1WDz8zlXxoeXBogKRJ',
  issuerBaseURL: 'https://dev-xxdzkni1.us.auth0.com'
};

router.use(auth(config));

router.get('/profile', (req, res) => {
   if(req.oidc.user === undefined){
       res.send("Access denied. You are not logged in!")
   }
   else{
   res.render('profile', {
     title: "Profile - " + req.oidc.user.nickname,
     data: req.oidc.user
   });
   }
});

router.get('/update', async function (req, res, next) {
    if(req.oidc.user === undefined){
        res.send("Access denied. You are not logged in!")
    } else {
        const sqlPodaci =  `SELECT * FROM topplayerteams NATURAL JOIN topplayers`;
        try {
            const resultPodaci = (await db.query(sqlPodaci, [])).rows;

            fs.writeFile('./NLLTeams.json', JSON.stringify(resultPodaci, null, 3), (err) => {
                if(err){
                    console.log(err);
                }
            });
            const parser = new Parser({
                escapedQuote: '"'
            });
            try{
                let csvFile = parser.parse(resultPodaci);
                fs.writeFile('./NLLTeams.csv', csvFile,(err) => {
                    if(err){
                        console.log(err);
                    }
                });
           }
            catch(err){
                console.log(err);
            }
            res.render('updatedFiles');

        } catch (err) {
            console.log(err);
        }
    }

});

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Main page',
        data: req.oidc.user
    });
});

module.exports = router;
