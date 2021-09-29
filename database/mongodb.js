const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const connectToMongo = async () => {
    try {
        const client = await MongoClient.connect(uri);
        const database = client.db('admin');
         const data = await database.collection('dogs').find().toArray();
        // console.log(data);
        client.close()
    } catch (error) {
        console.log('Unable to connect to the database')
        console.log(error)
    }
}
module.exports = connectToMongo();
// MongoClient.connect(uri).then(client=>{
//    console.log('Database connected successfully');
//   const database = client.db('admin');
// //   database.stats().then(stats=>{
// //       console.log(stats)
// //   }).catch(err=>{
// //       console.log(err);
// //   })
//   database.collection('dogs').find().toArray().then(data=>{
//    console.log(data);
//    client.close();
//   }).catch(err=>{
//       console.log(err)
//   })
//    //client.close()
// }).catch(err=>{
//     console.log(err)
// })