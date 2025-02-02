"use client";
import { useEffect, useState } from "react";
import { db } from "../utils/PouchDB";

export default function MyPage() {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const allDocs = await db.allDocs({ include_docs: true });
        setDocuments(allDocs.rows.map((doc) => doc.doc));
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
    fetchDocuments();
  }, []);
  return (
    <ul>
      {documents.map((doc) => (
        <li className="text-red-500" key={doc._id}>{doc.title}</li>
      ))}
    </ul>
  );
}
