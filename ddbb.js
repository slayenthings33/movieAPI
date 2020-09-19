const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/movieDB";


//Create

const connect = async () => { 
const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => { console.log(err); });
    return client;
}

exports.createMovie = async (movie) => {
    client = await connect();
    const result = await client
    .db("movieDB")
    .collection("movies")
    .insertOne(movie);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

//Read




