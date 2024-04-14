const menuRouter = require('express').Router();
let Menu = require('../Models/menu.model')

menuRouter.route('/menu').get((req, res) => {
    Menu.find()
        .then(Menu => res.json(Menu))
        .catch(err => res.status(400).json('Error: ' + err));
});

menuRouter.route('/menuAdd').post((req, res) => {
    const { appName, shopName,price } = req.body;
    const newMenu = new Menu({ appName, shopName,price });


    newFoodie.save()
        .then(() => res.json('menu added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add more routes for update and delete

module.exports = menuRouter;
