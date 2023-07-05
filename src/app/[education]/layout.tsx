import { promises as fs } from "fs"
import path from "path"

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), "src/data"))
  return files.map((file) => ({ education: file.replace(".json", "") }))
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
