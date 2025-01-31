"use client";
import React, { useState, useEffect } from "react";
import { pouchDB } from "@/utils/Poush";
const Page = () => {
  const [personnels, setPersonnels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await pouchDB.allDocs({ include_docs: true });
        const personnelList = result.rows.map((row) => row.doc);
        setPersonnels(personnelList);
      } catch (err) {
        console.error("Error fetching documents:", err);
      }
    };
    fetchData();
  }, []);
  return <div></div>;
};

export default Page;
