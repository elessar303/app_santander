var meets_controller = require('../controllers/meetsControler');

module.exports = function (app) {
    //Link routes and functions
    app.get('/meets', meets_controller.get_meets);
}