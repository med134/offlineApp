"use client";
import { useState } from "react";
import { db } from "@/utils/PouchDB";

export default function Table() {
  const [newDocument, setNewDocument] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDocument((prevDoc) => ({
      ...prevDoc,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      _id: new Date().toISOString(), // Ensure a unique _id
      ...newDocument,
    };
    try {
      await db.put(doc);
      setNewDocument({ title: "", content: "" }); // Clear form fields
      console.log("Document created successfully!");
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return (
    <div>
      <h2>Create New Document</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newDocument.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={newDocument.content}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}