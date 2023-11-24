import { ResponseBooks } from "@/models/books.interfaces"

export const getAllLibraries = async () => {
  try {
    const res = await fetch("/api/books")

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`)
    }

    const data: ResponseBooks = await res.json()
    return data
  } catch (error) {
    throw new Error("Error fetching data. Please try again later.")
  }
}
