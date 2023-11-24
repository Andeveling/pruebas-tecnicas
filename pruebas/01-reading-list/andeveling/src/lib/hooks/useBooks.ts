import { BookAdapted } from "@/models/books.interfaces"
import { useEffect, useState } from "react"
import { getAllLibraries } from "../services/book.service"

export const useBooks = ({ filter, maxPagesRange }: { filter: string; maxPagesRange: number }) => {
  const [books, setBooks] = useState<BookAdapted[]>([])
  const [genres, setGenres] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllLibraries()
        const uniqueGenres = [...new Set(data.library.flatMap((lib) => lib.book.genre))]
        setGenres(uniqueGenres)

        const filteredBooks = data.library
          .filter((book) => filter === "" || book.book.genre.includes(filter))
          .filter((book) => book.book.pages <= maxPagesRange)
          .map((book) => book.book)

        setBooks(filteredBooks)
      } catch (error) {
        setError("Error fetching data. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [filter, maxPagesRange])

  return {
    books,
    genres,
    isLoading,
    error,
  }
}
