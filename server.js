const express = require('express');
const app = express();
const port = process.env.PORT || 8787;
const database = require('./database/mongodb');
//console.log(database);
// database.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// }).finally()
// console.log('Process completed')
app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);
})