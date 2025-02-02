"use client";
import PersonnelTable from "@/components/PersonnelTable";
import { pouchDB } from "@/utils/Poush";
import React, { useState, useEffect } from "react";
import SkeltonTable from "./SkeltonTable";

const PersonnalPage = () => {
  const [personnels, setPersonnels] = useState([]);
  const [loading, setLoading] = useState(false); // Ensure state is an array

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await pouchDB.allDocs({ include_docs: true });
        const personnelList = result.rows
          .map((row) => row.doc)
          .filter((doc) => !!doc); // Remove undefined/null values

        setPersonnels(personnelList);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching documents:", err);
      }
    };
    fetchData();
  }, []);

  // Log updated state
  useEffect(() => {
    console.log(personnels);
  }, [personnels]);

  return (
    <div className="py-16">
      <h1 className="text-2xl py-6 px-6 font-sans font-semibold uppercase">
        Les informations des agents de PC Skhour Rhamna
      </h1>
      {loading ? (
        <SkeltonTable />
      ) : (
        <>
          {personnels?.map((personnel) => (
            <PersonnelTable key={personnel._id} personnel={personnel} />
          ))}
        </>
      )}
    </div>
  );
};

export default PersonnalPage;
