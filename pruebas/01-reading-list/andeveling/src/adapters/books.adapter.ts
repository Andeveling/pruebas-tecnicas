import { Author, AuthorAdapted, Book, BookAdapted } from "@/models/books.interfaces"

export const booksAdapter = ({ title, pages, genre, cover, synopsis, year, ISBN, author }: Book): BookAdapted => {
  return {
    title,
    pages,
    genre,
    cover,
    synopsis,
    year,
    ISBN,
    author: authorAdapter(author),
  }
}

export const authorAdapter = ({ name, otherBooks }: Author): AuthorAdapted => {
  return {
    name,
    otherBooks,
  }
}