const router = require('express').Router();
let Foodie = require('../Models/foodie.model')

router.route('/').get((req, res) => {
    Foodie.find()
        .then(Foodie => res.json(Foodie))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const { foodName, foodImg } = req.body;
    const newFoodie = new Foodie({ foodName, foodImg });


    newFoodie.save()
        .then(() => res.json('foodie added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add more routes for update and delete

module.exports = router;
