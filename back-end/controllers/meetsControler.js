const Meet = require('../models/Meet');

exports.get_meets = function (req, res) {
    
    let search = {}
    if (req.query !== '') {
        search = req.query;
    }
    
    try {
        Meet.find(search).sort([['date', 1]]).exec(function (err, meets) {
            if (err) {
                console.log(JSON.stringify(err))
                res.status(400).json({ message: err.message });
            } else {
                res.status(200).json({ meets });
            }
        });   
    } catch (error) {
        console.log(JSON.stringify(error))
        res.status(400).json({ message: error });
    }
};

exports.save_meet = function (req, res) {

    let newMeet = new Meet(req.body);
    newMeet.save(function (err) {
        if (err) {
            console.log(JSON.stringify(err))
            res.status(400).json({ message: err.message });
        } else {
            res.status(200).json({ message: 'Success' });
        }
    });

};

exports.new_meets = function (req, res) {

    const search = { "guests.email": req.query.userEmail, "guests.notify": {$ne: true} }

    try {
        Meet.find(search).exec(function (err, meets) {
            if (err) {
                console.log(JSON.stringify(err))
                res.status(400).json({ message: err.message });
            } else {
                res.status(200).json({ meets });
            }
        });   
    } catch (error) {
        console.log(JSON.stringify(error))
        res.status(400).json({ message: error });
    }
};

exports.check_new_meets = function (req, res) {

    const search = { "guests.email": req.body.userEmail, "guests.notify": {$ne: true} }

    try {
        Meet.updateMany(search, { "guests.$[].notify": true }).exec(function (err, meets) {
            if (err) {
                console.log(JSON.stringify(err))
                res.status(400).json({ message: err.message });
            } else {
                res.status(200).json({ meets });
            }
        });   
    } catch (error) {
        console.log(JSON.stringify(error))
        res.status(400).json({ message: error });
    }
};

exports.check_in_meet = async  function (req, res) {

    const search = { _id:req.body.id, "guests.email": req.body.userEmail, "guests.checked": {$ne: true} }
    
    const id = req.body.id

    try {
        Meet.findById(id, async function (err, meet) {

            const guests = [...meet.guests];
            guests.forEach(function (user) {
                if(user.email === req.body.userEmail){
                    user.checked = true;
                }
            });

            const resp = await Meet.updateOne({ _id: id }, { guests: guests });

            if (err) {
                console.log(JSON.stringify(err))
                res.status(400).json({ message: err.message });
            } else {
                res.status(200).json({ resp });
            }
        });   
    } catch (error) {
        console.log(JSON.stringify(error))
        res.status(400).json({ message: error });
    }
};