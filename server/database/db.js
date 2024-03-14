import mongoose from "mongoose";
const Connection = async (username = 'dipenderkashyap', password= 'AGkG37123') => {
    const URL = `mongodb://${username}:${password}@ac-qobemxg-shard-00-00.a6wz2hz.mongodb.net:27017,ac-qobemxg-shard-00-01.a6wz2hz.mongodb.net:27017,ac-qobemxg-shard-00-02.a6wz2hz.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-cbo55u-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true , useNewUrlParser: true });
        console.log('Database Connected Successfully');
    }
    catch(error)
    {
        console.log('Error while connecting with the database ', error );
    }
}
export default Connection;