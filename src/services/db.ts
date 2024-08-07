import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI ?? "";

export class Db {
  private static client: MongoClient | null = null;

  static async getClient() {
    if (!this.client) {
      try {
        this.client = new MongoClient(MONGO_URI);
        await this.client.connect();
      } catch (error) {
        console.error("Failed to create MongoDB client", error);
        throw error;
      }
    }
    return this.client;
  }
}
