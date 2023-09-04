const mongoose = require('mongoose')
//process.env.MONGODB_URL
const uri = "mongodb+srv://rujul123:rujul123@testcluster.5mgytsg.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB Connected!')).catch(err => {
    console.log("DB Connection Error..");
    });



// mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology: true,  useNewUrlParser: true })