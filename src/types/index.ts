export default interface BookData {
  name: string
  grades: Grade[]
}

export interface Grade {
  grade: string
  books: Book[]
}

export interface Book {
  subject: string
  image: string
  pdf: string
}
