const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/movieDB";
// const dbo = db.db("movieDB"); //ACCESS DDBB

//Create DDBB
const connect = async() => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true}) 
  .catch(err => {console.log(err);
  })
  console.log("Database Created");
  return client;
}

// CREATE CLIENT
exports.createClient = async(movie) => {
  client = await connect();
  const result = await result
  .db("movieDB")
  .collection("movies")
  .insertOne(movie)
  console.log(result);
  console.log(`${result} was added to the database!`);
  // return result;
}

// CREATE COLLECTION 


exports.createMovie = async (movie) => {
    client = await connect();
    const result = await client
    .db("movieDB")
    .collection("movies")
    .insertOne(movie);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

// const connect = async () => { 
// const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .catch(err => { console.log(err); });
//     return client;
// }


//Read




