import { promises as fs } from "fs"
import path from "path"

export default async function getData<T>(filePath: string): Promise<T> {
  const data = await fs.readFile(path.join(process.cwd(), filePath), "utf-8")
  return JSON.parse(data)
}
