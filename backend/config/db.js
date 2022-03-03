const mongose = require('mongoose')


const connectionDB = async () => {
    try{
        const conn = await mongose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connnected : ${conn.connection.host}`.cyan.underline)
    }catch (error){
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectionDB