const mongoConn = require('./config/db')
const app = require('./app')
const config = require('./config/')


const port = process.env.PORT;


mongoConn.on('error', function() {
    console.error.bind(console,'connection error')
});
mongoConn.once('open',function() {
    console.log('Database connected 👍')
    app.listen(port, () => {
        console.log(`Consign server is running on port ${port}.`);
    });
})