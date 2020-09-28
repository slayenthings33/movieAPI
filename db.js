const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/movieDB";
const ObjectID = require('mongodb').ObjectID
// const dbo = db.db("movieDB"); //ACCESS DDBB

//Connect to DB
const connect = async() => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true}).catch(err => {console.log(err);
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

exports.getMovieDetails = async (data) => {
  const client = await connect();
  result = await client
    .db("movieDB")
    .collection("movies")
    .findOne({Title: data});
  if(result) {
    console.log(`The film ${data} has been found in the collection.`)
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
exports.deleteFilmDoc = async(data) => {
  const client = await connect();
  result = await client
    .db("movieDB")
    .collection("movies")
    .deleteOne({Title: data.Title})
  return result;
}

exports.updateFilmDoc = async(_id, editedFilm) => {
  const client = await connect();
  console.log("****************")
  console.log(editedFilm)
  console.log("++++++++++++++++")
  console.log(editedFilm.title)
  result = await client
    .db("movieDB")
    .collection("movies")
    .updateOne(
      {"_id": ObjectID(_id) }, // Filtered
      { $set: {
        "Title": editedFilm.title,
        "Released": editedFilm.released,
        "Genre": editedFilm.genre,
        "Director": editedFilm.director,
        "Actors": editedFilm.actors,
        "Plot": editedFilm.plot,
        "Rating": editedFilm.rating,
        "Score": editedFilm.score,
        "Poster": editedFilm.route
      }}, //UPDATED
      {upsert: true}
      );
  console.log(`${result.matchedCount} documents which coincide with request.`);
  if (result.upsertedCount > 0) { 
      console.log(`A document was created with id: ${result.upsertedId._id}`);
      return result;
    } else {
      console.log(`${result.modifiedCount} could not be modified.`);
  }
}