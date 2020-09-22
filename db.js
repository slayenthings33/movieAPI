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

// CREATE COLLECTION 

exports.createMovie = async (movie) => {
    client = await connect();
    const result = await client
    .db("movieDB")
    .collection("movies")
    .insertOne(movie);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

//FIND FILM IN COLLECTION

exports.getMovieDetails = async (title) => {
  const client = await connect();
  result = await client
    .db("movieDB")
    .collection("movies")
    .findOne({title:name});
  console.log(result)
  if(result) {
    console.log(`The film ${title} has been found in the collection.`)
    return result;
  } else {
    return null
  }
}

//FIND VARIOUS FILMS IN COLLECTION

exports.getFilmsDetail = async () => {
  const client = await connect();
  result = await client
     .db("moviedb")
     .collection("peliculas")
     .find()
     .toArray();
  if (result) {
    return result;
} else {
     return null
   }
 };

// const connect = async () => { 
// const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .catch(err => { console.log(err); });
//     return client;
// }


//Read




