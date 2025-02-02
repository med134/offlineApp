import PouchDB from "pouchdb";
const db = new PouchDB("my-offline-app");

// Function to add initial data
const addInitialData = async () => {
  const initialDoc = {
    title: "Sample Document",
    content: "This is an example document.",
  };

  try {
    const doc = await db.get(initialDoc._id);
    console.log("Document already exists:", doc);
  } catch (err) {
    if (err.status === 404) {
      try {
        await db.put(initialDoc);
        console.log("Initial document added successfully!");
      } catch (putErr) {
        console.error("Error adding initial document:", putErr);
      }
    } else {
      console.error("Error getting document:", err);
    }
  }
};

// Call the function to add initial data
addInitialData();

export { db };
