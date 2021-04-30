const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const isEmpty = (arr) => arr ? (Object.keys(arr).length > 0 ? true : false) :  false


const dateNow = () => {
    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    return date + '-' + month +'-' + year
}

module.exports = {
    PORT:process.env.PORT,
    MONGO_DB:process.env.MONGO_DB,
    isEmpty,
    dateNow
}