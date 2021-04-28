const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const isEmpty = (arr) => arr ? (Object.keys(arr).length > 0 ? true : false) :  false


module.exports = {
    PORT:process.env.PORT,
    MONGO_DB:process.env.MONGO_DB,
    isEmpty
}