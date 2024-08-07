import { Db } from "./db";

export async function getAllComponents() {
  try {
    const client = await Db.getClient();
    const components = await client
      .db("amvasdevui")
      .collection("components")
      .find()
      .toArray();
    // @ts-ignore
    return components;
  } catch (error) {
    console.error("Failed to get components", error);
  }
}
