"use client";
import { Personnel } from "@/components/Interface";
import PersonnelTable from "@/components/PersonnelTable";
import { pouchDB } from "@/utils/Poush";
import React, { useState, useEffect } from "react";

const PersonnalPage = () => {
  const [personnels, setPersonnels] = useState<Personnel[]>([]); // Ensure state is an array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await pouchDB.allDocs({ include_docs: true });

        // Ensure personnelList is correctly typed
        const personnelList: Personnel[] = result.rows
          .map((row) => row.doc as Personnel)
          .filter((doc) => !!doc); // Remove undefined/null values

        setPersonnels(personnelList);
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
      {personnels?.map((personnel) => (
        <PersonnelTable key={personnel._id} personnel={personnel} />
      ))}
    </div>
  );
};

export default PersonnalPage;
