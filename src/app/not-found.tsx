import Link from "next/link"

export const metadata = {
  title: "404! ບໍ່ມີໜ້ານີ້",
  description: "Laos Textbooks ປຶ້ມແບບຮຽນ ແລະ ປຶ້ມຄູ່ມືຄູ 404! ບໍ່ມີໜ້ານີ້",
}

export default function NotFound() {
  return (
    <main className="container flex grow items-center justify-center">
      <h1 className="text-2xl">404! ບໍ່ມີໜ້ານີ້</h1>
      <Link href="/" className="hover:text-sky-400 dark:hover:text-sky-400">
        ກັບໄປໜ້າຫຼັກ
      </Link>
    </main>
  )
}
