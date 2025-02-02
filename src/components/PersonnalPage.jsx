"use client"
import React, { useState, useEffect } from 'react';
import { pouchDB } from '../utils/Poush';

const PersonnalPage = () => {
  const [personnels, setPersonnels] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await pouchDB.allDocs({ include_docs: true });
        const personnelList = result.rows.map(row => row.doc);
        setPersonnels(personnelList);
      } catch (err) {
        console.error('Error fetching documents:', err);
      }
    };
    fetchData();
  }, []);

  const addPersonnel = async (e) => {
    e.preventDefault();
    const newPersonnel = {
      _id: new Date().toISOString(),
      name,
      age: parseInt(age),
    };
    try {
      await pouchDB.put(newPersonnel);
      setPersonnels([...personnels, newPersonnel]);
      setName('');
      setAge('');
    } catch (err) {
      console.error('Error adding document:', err);
    }
  };

  const deletePersonnel = async (id, rev) => {
    try {
      await pouchDB.remove(id, rev);
      setPersonnels(personnels.filter(personnel => personnel._id !== id));
    } catch (err) {
      console.error('Error deleting document:', err);
    }
  };

  return (
    <div>
      <h1>Personnels</h1>
      <form onSubmit={addPersonnel}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Add Personnel</button>
      </form>
      <ul>
        {personnels.map(personnel => (
          <li key={personnel._id}>
            {personnel.name}, {personnel.age}
            <button onClick={() => deletePersonnel(personnel._id, personnel._rev)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonnalPage;