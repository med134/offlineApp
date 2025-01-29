"use client";
import { AddFriendForm } from "@/Data";
import { db } from "./db";
import { useLiveQuery } from "dexie-react-hooks";

interface Friend {
  id: number;
  name: string;
  age: number;
}
export default function Home() {
  const friends = useLiveQuery(() => db.friends.toArray());

  return (
    <div>
      hello
      <ul>
        {friends?.map((friend: Friend) => (
          <li key={friend.id}>
            {friend.name}, {friend.age}
          </li>
        ))}
      </ul>
      <AddFriendForm defaultAge={45} />
    </div>
  );
}
