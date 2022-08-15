const keys = {
    "mongoUri":"mongodb+srv://Username:Username@cluster0.blhamqz.mongodb.net/?retryWrites=true&w=majority" , 
    "SecreteKey" :"Zoo2010" , 
    "port": 9000

}



// dbName  => test project 











module.exports = {
    myDb: keys.mongoUri, 
    secrete:keys.SecreteKey, 
    PORT : keys.port
}