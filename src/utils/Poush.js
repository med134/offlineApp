import PouchDB from "pouchdb";

const pouchDB = new PouchDB("protectionCivile");

pouchDB.put({
  _id: "1",
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
});

export { pouchDB };
