const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/movieDB";
// const dbo = db.db("movieDB"); //ACCESS DDBB

//Connect to DB
const connect = async() => {
const client = await MongoClient.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true}) 
.catch(err => {console.log(err);
})
console.log("connected to db");
return client;
}

// CREATE COLLECTION 
//Method to create movie documents in DB from 

exports.createMovie = async (movie) => {
    client = await connect();
    const result = await client
    .db("movieDB")
    .collection("movies")
    .insertOne(movie);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

//FIND FILM IN COLLECTION

exports.getMovieDetails = async (pos) => {
  const client = await connect();
  console.log("++++++++++++++")
  console.log(pos)
  result = await client
    .db("movieDB")
    .collection("movies")
    .findOne({Title: pos});
  if(result) {
    console.log(`The film ${pos} has been found in the collection.`)
    return result;
  } else {
    return null
  }
}

//FIND VARIOUS FILMS IN COLLECTION

exports.getAllFilms = async () => {
  const client = await connect();
  result = await client
     .db("movieDB")
     .collection("movies")
     .find()
     .toArray();
  if (result) {
    return result;
  } else {
     return null
   }
 };

// DELETE FILM FROM COLLECTION
exports.deleteFilmDoc = async (data) => {
  const client = await connect();
  result = await client
    .db("movieDB")
    .collection("movies")
    .deleteOne({Title: data.Title})
  return result;
}