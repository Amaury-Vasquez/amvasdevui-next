import { Db } from "./db";

export async function getAllComponents() {
  try {
    const client = await Db.getClient();
    const components = await client
      .db("amvasdevui")
      .collection("components")
      .find()
      .toArray();
    return components;
  } catch (error) {
    console.error("Failed to get components", error);
  }
}

export async function getComponentByName(name: string) {
  try {
    const client = await Db.getClient();
    const component = await client
      .db("amvasdevui")
      .collection("components")
      .findOne({ name });
    return component;
  } catch (error) {
    console.error("Failed to get component", error);
  }
}
