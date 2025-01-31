import PouchDB from 'pouchdb'

type Personnel = {
  _id: string;
  name: string;
  ppr: string;
  gsm: string;
  cin: string;
  function: string;
  address: string;
  status: string;
  dateNaissance: string;
  dateRecrutement: string;
  grade: string;
};
const pouchDB = new PouchDB<Personnel>("protectionCivile");

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
