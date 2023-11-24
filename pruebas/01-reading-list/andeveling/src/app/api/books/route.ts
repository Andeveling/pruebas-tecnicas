import { promises as fs } from "fs"
import path from "path"

export async function GET() {
  // Find the absolute path of the "json" directory
  const jsonDirectory = path.join(process.cwd())
  // Read the "data.json" file
  const fileContents = await fs.readFile(jsonDirectory + "/books.json", "utf8")
  const data = await JSON.parse(fileContents)
  return Response.json(data)
}
