const app = require('./app')
var cors = require('cors')
app.use(cors())

const port = 27017 //process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
