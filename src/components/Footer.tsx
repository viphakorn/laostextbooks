import Link from "next/link"
// import ExportedImage from "next-image-export-optimizer"
import Image from "next/image"

  import Logo from "public/svg/logo.svg"

 export default function Footer() {
   return (
     <footer className="footer container mx-auto flex flex-col items-center gap-2 border-t border-sky-400/10 py-4 text-center">
       <Link href="/" className="logo flex items-center gap-2">
         <Image src={Logo} alt="" className="w-8 sm:w-16" />
         <h2 className="bg-gradient-to-r from-sky-400 to-sky-500 bg-clip-text text-lg font-black text-sky-400 text-transparent sm:text-2xl">Laos TextBooks</h2>
         <span className="sr-only">ປຶ້ມແບບຮຽນ ປຶ້ມຄູ່ມືຄູ</span>
       </Link>
       <p className="text-sm text-sky-400">ເວັບໄຊທ໌ເພື່ອການສຶກສາ 2021-2023</p>
     </footer>
   )
 }
