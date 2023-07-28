import BookData, { Book } from "@/types"
import getData from "@/utils/getData"

type Props = {
  params: {
    education: string
    book: string
  }
}
export async function generateMetadata({ params }: Props) {
  const bookData: BookData = await getData(`src/data/${params.education}.json`)
  const book = bookData.grades.flatMap((grade) => grade.books).find((book) => book.image === params.book)!

  return {
    title: `${book.subject} ${params.book.charAt(0).replace(/p/g, "ປ.").replace(/m/g, "ມ.")}${params.book.charAt(1)}`,
    description: book.subject,
  }
}
export async function generateStaticParams({ params }: { params: { education: string } }) {
  const bookData: BookData = await getData(`src/data/${params.education}.json`)
  return bookData.grades
    .flatMap((grade) => grade.books)
    .filter((book) => book.pdf)
    .map((book) => ({ book: book.image }))
}

export default async function Page({ params }: Props) {
  const bookData: BookData = await getData(`src/data/${params.education}.json`)
  const book = bookData.grades.flatMap((grade) => grade.books).find((book) => book.image === params.book)!

  return (
    <main>
      <iframe src={`${book.pdf}/preview`} allowFullScreen={true} className="mx-auto h-screen-cut w-full max-w-[800px]"></iframe>
    </main>
  )
}
