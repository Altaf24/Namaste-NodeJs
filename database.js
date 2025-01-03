const {MongoClient} = require("mongodb");

const url =
 "mongodb+srv://namastepiter:namaste_piter@namastenode.7o8za.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // Insert a document
  const data ={
    firstname:"Tony",
    lastname:"Stark",
    city:"New York",
    phoneNumber:"1234567890",

    
  };
//   const insertResult = await collection.insertMany([data]);
//   console.log("Inserted documents =>", insertResult);

//   // Update a document
//   const updateResult = await collection.updateOne(
//     { firstname: "Tony" },
//     { $set: { city: "London" } }
//   );

   // Delete a document
  const deleteResult = await collection.deleteOne({
    city: "London",
  });


  // Read a document
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


















// Go to mongodb.com and create a free account
// Create a database called "namastenode"
// Create a collection called "users"
// Get the connection string from the database
// Install MongoDB compass
// Create a new connection
// Connect to the database
// Create a new collection
// Create a new document
// Insert the document into the collection
// Read the document from
// Update the document
// Delete the documenter45