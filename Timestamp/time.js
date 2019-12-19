const moment = require('moment');

module.exports = {
    parse: function (req, res) {
        const date = req.params.time;
        // console.log(date)
        let timestamp = {
            'unix': null,
            'utc': null
        }
        let today = `${moment().format("YYYY-MM-DD")}`
        // console.log('TOday', moment().utc().format('lll'))
        // console.log(today);
        // console.log(date);
        // console.log(moment(date)._f === 'YYYY-MM-DD')

        if(date === today){
            timestamp.unix = moment(today).format('X');
            timestamp.utc = moment().utc().format('lll')
        } else if(moment(date)._f === 'YYYY-MM-DD'){
            timestamp.unix = moment(date).format("X");
            timestamp.utc = `${new Date(moment(date).utc().format())}`
        } else {
            timestamp = 'INVALID DATE'
        }
        res.send(timestamp);
        
    }
}