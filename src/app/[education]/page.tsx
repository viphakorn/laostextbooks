import BookData from "@/types"
import Link from "next/link"
// import ExportedImage from "next-image-export-optimizer"
 import Image from "next/image"
 import getData from "@/utils/getData"
 type Props = {
   params: {
     education: string
   }
 }

 export async function generateMetadata({ params }: Props) {
   const bookData: BookData = await getData(`src/data/${params.education}.json`)

   return {
     title: bookData.name,
     description: bookData.name,
   }
 }

 export default async function Page({ params }: Props) {
   const { education } = params
   const bookData: BookData = await getData(`src/data/${education}.json`)
   return (
     <main className="container py-8">
       <h1 className="p-4 text-center text-4xl text-sky-400 sm:text-5xl/normal md:text-6xl/normal lg:text-7xl/normal">{bookData.name}</h1>
       {bookData.grades.map(({ grade, books }) => (
         <section key={grade}>
           <h2 className="py-4 text-center text-xl text-sky-400 md:text-2xl">{grade}</h2>
           <ul className="grid grid-cols-2 justify-center gap-4 sm:grid-cols-[repeat(auto-fit,minmax(min(100%,10rem),10rem))]">
             {books.map(({ subject, image, pdf }) => {
               if (!pdf) return null
               return (
                 <li key={subject}>
                   <Link href={`/${education}/${image}`} className="group space-y-2">
                     <Image src={require(`public/images/${education}/${image}.webp`).default} alt={`${grade} - ${subject}`} placeholder="blur" className="aspect-[8/11] rounded-lg object-cover" />
                     <p className="text-center text-sm transition group-hover:text-sky-400">{subject}</p>
                   </Link>
                 </li>
               )
             })}
           </ul>
         </section>
       ))}
     </main>
   )
 }
