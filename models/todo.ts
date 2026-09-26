import clientPromise from "@/lib/mongodb";

export async function getTodosCollection() {
  const client = await clientPromise;

  const db = client.db("task-manager");

  return db.collection("todos");
}