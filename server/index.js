const mongoConn = require('./config/db')
const app = require('./app')
const config = require('./config/')


const port = process.env.PORT;


mongoConn.on('error', function() {
    console.error.bind(console,'connection error')
});
mongoConn.once('open',function() {
    console.log('Database connected 👍')
    app.start(() => console.log(`Server is running on http://localhost:4000`))
})