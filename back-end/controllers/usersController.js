import users from '../data/users';

exports.get_users = function (req, res) {
    res.status(200).json(users);
};

exports.login = function (req, res) {

    const email = req.body.email
    const password = req.body.password

    const userLogin = users.find( user => user.email === email );

    if(userLogin){

        if(userLogin.password === password){
            res.status(200).json(userLogin)
        }else{
            res.status(400).json({message:'Incorrect password!'})
        }
        

    }else{
        res.status(400).json({message:'User not found!'})
    }
    

};