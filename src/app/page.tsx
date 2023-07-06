import Educator from "@/assets/svg/educator.svg"
import Link from "next/link"
import links from "@/components/Links"
// import ExportedImage from "next-image-export-optimizer"
import Image from "next/image"

export default function Home() {
  return (
    <main className="container flex h-full grow flex-col gap-4 py-4 md:py-8 lg:py-12">
      <section className="flex h-1/2 flex-col items-center justify-center rounded-2xl border-2 p-4 dark:border-sky-400/10 dark:bg-slate-900 md:flex-row md:p-8">
        <h1 className="p-4 text-center text-4xl text-sky-400 sm:text-5xl/normal md:text-6xl/normal lg:text-7xl/normal">
          ປຶ້ມແບບຮຽນ
          <br />
          ປຶ້ມຄູ່ມືຄູ
        </h1>
        <Image src={Educator} alt={"Educator"} className="h-1/2 w-full max-w-sm md:h-auto md:w-1/2" />
      </section>
      <ul className="grid h-1/2 items-center rounded-2xl border-2 p-4 dark:border-sky-400/10 dark:bg-slate-900 sm:grid-cols-2 md:p-8">
        {links.slice(1).map(({ label, link, icon: Icon }) => (
          <li key={link} className="h-full w-full">
            <Link
              href={link}
              className="flex h-full w-full items-center gap-4 rounded-md  text-center text-xl text-slate-700 transition hover:bg-slate-100 hover:text-sky-400 dark:text-white dark:hover:bg-slate-800 dark:hover:text-sky-400 sm:text-2xl/normal md:text-3xl/normal lg:text-4xl/normal"
            >
              <Icon className="ml-4 h-6 w-6 md:h-12 md:w-12" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
