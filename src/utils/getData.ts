import { promises as fs } from "fs"
import path from "path"

export default async function getData<T>(filePath: string): Promise<T> {
  try {
    const data = await fs.readFile(path.join(process.cwd(), filePath), "utf-8")
    return JSON.parse(data)
  } catch (error) {
    // Handle the error here
    console.error("Error while reading or parsing the file:", error)
    throw error // Rethrow the error to propagate it up the call stack if needed
  }
}