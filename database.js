const { MongoClient} = require("mongodb");
const url = "mongodb+srv://NamasteDev:iqXXUyoCkKwLx32r@cluster0.mumwbeq.mongodb.net/";

// creating a new mongodb client obj 
const client = new MongoClient(url);
const dbName = "NamasteDevDb";

async function main(){

    // connecting to the mongodb server
    await client.connect();
    console.log("Connected to MongoDB server");

    // selecting the database
    const db = client.db(dbName);

    // selecting the collection
    const collection = db.collection("User");

    //Finding the document - Read Document
    const findResult = await collection.find({}).toArray(); 
    console.log("Found document:", findResult); 

    // Inserting a document - Create Document
    const data = {
        firstName:"Akshay",
        lastName:"Saini",
        City:"Dehradun",
    }

    const insertResult = await collection.insertMany([data]);
    console.log("Inserted documents:", insertResult);

return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close()); // closing the connection