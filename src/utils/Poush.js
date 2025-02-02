import PouchDB from 'pouchdb';

const pouchDB = new PouchDB("protection_civile");

// Example document to add to the database
const exampleDoc = {
  _id: '1', // Use a string for the _id
  name: "mohamed dakir",
  ppr: "146975",
  gsm: "0666666666",
  cin: "EE66666",
  function: "chef de service",
  address: "skhour rhamna",
  status: "marie",
  dateNaissance: "1990-01-01",
  dateRecrutement: "2010-01-01",
  grade: "adj",
};

// Add the example document to the database
pouchDB.put(exampleDoc).catch(err => {
  if (err.name !== 'conflict') {
    console.error('Error adding document:', err);
  }
});

export { pouchDB };