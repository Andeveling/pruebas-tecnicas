export interface ResponseBooks {
  library: Library[]
}

export interface Library {
  book: Book
}

export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

export interface BookAdapted {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: AuthorAdapted
}

export interface AuthorAdapted {
  name: string
  otherBooks: string[]
}


export interface Author {
  name: string
  otherBooks: string[]
}
