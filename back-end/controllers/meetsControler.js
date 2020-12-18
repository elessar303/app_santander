exports.get_meets = function (req, res) {
    res.status(200).json([
        {
            id:'1',
            date: '17/12/2020'
        },
        {
            id:'2',
            date: '18/12/2020'
        },
        {
            id:'3',
            date: '19/12/2020'
        },
        {
            id:'4',
            date: '20/12/2020'
        },
        {
            id:'5',
            date: '21/12/2020'
        }
    ]);
};