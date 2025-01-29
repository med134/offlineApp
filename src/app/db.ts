import Dexie, { type EntityTable } from 'dexie';

interface Friend {
  id: number;
  name: string;
  age: number;
}

const db = new Dexie('FriendsDatabase') as Dexie & {
  friends: EntityTable<
    Friend,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  friends: '++id, name, age' // primary key "id" (for the runtime!)
});

// Function to add initial data
async function populateDatabase() {
  const count = await db.friends.count();
  if (count === 0) {
    await db.friends.bulkAdd([
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'dakir', age: 35 },
    ]);
  }
}

// Call the function to populate the database
populateDatabase();

export type { Friend };
export { db };