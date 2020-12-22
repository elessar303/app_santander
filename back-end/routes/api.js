var meets_controller = require('../controllers/meetsControler');
var users_controller = require('../controllers/usersController');

module.exports = function (app) {
    //Link routes and functions

    /**
     * Meets routes
     */
    app.get('/meets', meets_controller.get_meets);
    app.get('/new_meets', meets_controller.new_meets); 
    app.post('/meet', meets_controller.save_meet);
    app.post('/check_new_meets', meets_controller.check_new_meets);
    app.post('/check_in_meet', meets_controller.check_in_meet);
    /**
     * Users routes
     */
    app.get('/users', users_controller.get_users);
    app.post('/login', users_controller.login);
}