"use client";
import { useState } from "react";
import { db } from "./app/db";

export function AddFriendForm({ defaultAge } = { defaultAge: 21 }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(defaultAge);
  const [status, setStatus] = useState("");

  async function addFriend() {
    try {
      // Add the new friend!
      const id = await db.friends.add({
        name,
        age,
      });

      setStatus(`Friend ${name} successfully added. Got id ${id}`);
      setName("");
      setAge(defaultAge);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  /*  async function updateFriend(id: number, updates: Partial<Friend>) {
    await db.friends.update(id, { ...updates });
  } */

  return (
    <>
      <p>{status}</p>
      Name:
      <input
        type="text"
        value={name}
        required
        onChange={(ev) => setName(ev.target.value)}
      />
      Age:
      <input
        type="number"
        value={age}
        onChange={(ev) => setAge(Number(ev.target.value))}
      />
      <button onClick={addFriend}>Add</button>
    </>
  );
}
